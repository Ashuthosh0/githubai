import { db } from "@/server/db";
import { Octokit } from "octokit";
import axios from "axios";
import { aisummarizeCommit } from "./gemini";


export const octokit = new Octokit({
  auth : process.env.GITHUB_TOKEN,
})

const githubUrl = "https://github.com/Ashuthosh0/abap-LLM"

type Response ={
  commitHash : string;
  commitMessage :string ;
  commitAuthorAvatar : string;
  commitAuthorName : string;
  commitDate : string;
}

export const getCommitHashes = async (githubUrl : string): Promise<Response[]> => {
  const [owner , repo] = githubUrl.split('/').slice(-2)
  if(!owner || !repo){
    throw new Error("Invalid github url")
  }
  const {data} = await octokit.rest.repos.listCommits({
    owner ,
    repo
  })
  const sortedCommits = data.sort((a:any ,b:any) => new Date(b.commit.author.date).getTime() - new Date(a.commit.author.date).getTime()) as any[]

  return sortedCommits.slice(0,15).map((commit : any) =>({
    commitHash : commit.sha as string,
    commitAuthorName : commit.commit?.author?.name ?? "",
    commitMessage :commit.commit.message ?? "",
    commitAuthorAvatar : commit?.author?.avatar_url ?? "",
    commitDate : commit.commit?.author?.date ?? ""
  }))
}

export const pollCommits = async (projectId : string) =>{
  const {project , githubUrl} = await fetchProjectGithubUrl(projectId)

  const commitHashes = await getCommitHashes(githubUrl)
  const unprocessedCommits = await filterUnprocessedCommits(projectId , commitHashes)
  const summaryResponses = await Promise.allSettled(unprocessedCommits.map(commit =>{
    return summarizeCommit(githubUrl , commit.commitHash)
  }))
  const summaries = summaryResponses.map((Responses) =>{
    if(Responses.status ==="fulfilled"){
      return Responses.value as string
    }
    return ""
  })
  const commit = await db.commit.createMany({
    data: summaries.map((summary , index)=>{
      console.log(`processing commit ${index}`)
      return {
        projectId : projectId,
        commitHash : unprocessedCommits[index]!.commitHash,
        commitMessage : unprocessedCommits[index]!.commitMessage,
        commitAuthorName : unprocessedCommits[index]!.commitAuthorName,
        commitAuthorAvatar : unprocessedCommits[index]!.commitAuthorAvatar,
        commitDate : unprocessedCommits[index]!.commitDate,
        summary
      }
    })
  })
  return unprocessedCommits
}


async function fetchProjectGithubUrl(projectId : string){
  const project = await db.project.findUnique({
    where : {id :projectId},
    select : {
      githubUrl : true
    }
  })
  if(!project?.githubUrl){
    throw new Error("Project has no github url")
  }
  return { project , githubUrl : project.githubUrl}
}

async function filterUnprocessedCommits(projectId : string , commitHashes : Response[]) {
  const processedCommits = await db.commit.findMany({
    where : {projectId}
  }) as any[]
  const unprocessedCommits = commitHashes.filter((commit) => !processedCommits.some((processedCommit) => processedCommit.commitHash === commit.commitHash))
  return unprocessedCommits
}


async function summarizeCommit (githubUrl : string ,commitHash : string ){
  const {data} = await axios.get(`${githubUrl}/commit/${commitHash}.diff`,{
    headers : {
      Accept : 'application/vnd.github.v3.diff'
    }
  }
  )
  return await aisummarizeCommit((data) || "")
}