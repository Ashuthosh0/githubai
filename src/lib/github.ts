import { db } from "@/server/db";
import { Octokit } from "octokit";
import axios from "axios";
import { aisummarizeCommit } from "./gemini";

export const getOctokit = (githubToken?: string) => {
  const token = githubToken || process.env.GITHUB_TOKEN;
  return new Octokit(token ? { auth: token } : {});
};

export const octokit = getOctokit();

export const parseGithubUrl = (githubUrl: string) => {
  const cleanUrl = githubUrl.trim().replace(/\/+$/, '').replace(/\.git$/, '');
  const parts = cleanUrl.split('/');
  const repo = parts[parts.length - 1];
  const owner = parts[parts.length - 2];
  if (!owner || !repo) {
    throw new Error("Invalid github url");
  }
  return { owner, repo, cleanUrl };
};

type Response = {
  commitHash: string;
  commitMessage: string;
  commitAuthorAvatar: string;
  commitAuthorName: string;
  commitDate: string;
};

export const getCommitHashes = async (githubUrl: string, githubToken?: string): Promise<Response[]> => {
  const { owner, repo } = parseGithubUrl(githubUrl);
  const octokitInstance = getOctokit(githubToken);
  let data: any[];

  try {
    const res = await octokitInstance.rest.repos.listCommits({
      owner,
      repo,
    });
    data = res.data;
  } catch (err: any) {
    if (err?.status === 401 && !githubToken && process.env.GITHUB_TOKEN) {
      // Fallback to unauthenticated request if env token was invalid for a public repo
      const publicOctokit = new Octokit({});
      const res = await publicOctokit.rest.repos.listCommits({ owner, repo });
      data = res.data;
    } else {
      throw err;
    }
  }

  const sortedCommits = data.sort(
    (a: any, b: any) =>
      new Date(b.commit?.author?.date || 0).getTime() - new Date(a.commit?.author?.date || 0).getTime()
  ) as any[];

  return sortedCommits.slice(0, 15).map((commit: any) => ({
    commitHash: commit.sha as string,
    commitAuthorName: commit.commit?.author?.name ?? "",
    commitMessage: commit.commit?.message ?? "",
    commitAuthorAvatar: commit?.author?.avatar_url ?? "",
    commitDate: commit.commit?.author?.date ?? new Date().toISOString(),
  }));
};

export const pollCommits = async (projectId: string, githubToken?: string) => {
  const { project, githubUrl } = await fetchProjectGithubUrl(projectId);

  const commitHashes = await getCommitHashes(githubUrl, githubToken);
  const unprocessedCommits = await filterUnprocessedCommits(projectId, commitHashes);
  const summaryResponses = await Promise.allSettled(
    unprocessedCommits.map((commit) => {
      return summarizeCommit(githubUrl, commit.commitHash, githubToken);
    })
  );
  const summaries = summaryResponses.map((response) => {
    if (response.status === "fulfilled") {
      return response.value as string;
    }
    return "";
  });

  if (unprocessedCommits.length > 0) {
    await db.commit.createMany({
      data: summaries.map((summary, index) => {
        console.log(`processing commit ${index}`);
        return {
          projectId: projectId,
          commitHash: unprocessedCommits[index]!.commitHash,
          commitMessage: unprocessedCommits[index]!.commitMessage,
          commitAuthorName: unprocessedCommits[index]!.commitAuthorName,
          commitAuthorAvatar: unprocessedCommits[index]!.commitAuthorAvatar,
          commitDate: new Date(unprocessedCommits[index]!.commitDate || Date.now()),
          summary,
        };
      }),
    });
  }
  return unprocessedCommits;
};

async function fetchProjectGithubUrl(projectId: string) {
  const project = await db.project.findUnique({
    where: { id: projectId },
    select: {
      githubUrl: true,
    },
  });
  if (!project?.githubUrl) {
    throw new Error("Project has no github url");
  }
  return { project, githubUrl: project.githubUrl };
}

async function filterUnprocessedCommits(projectId: string, commitHashes: Response[]) {
  const processedCommits = (await db.commit.findMany({
    where: { projectId },
  })) as any[];
  const unprocessedCommits = commitHashes.filter(
    (commit) => !processedCommits.some((processedCommit) => processedCommit.commitHash === commit.commitHash)
  );
  return unprocessedCommits;
}

async function summarizeCommit(githubUrl: string, commitHash: string, githubToken?: string) {
  const { owner, repo, cleanUrl } = parseGithubUrl(githubUrl);
  let diff = "";

  try {
    const octokitInstance = getOctokit(githubToken);
    const res = await octokitInstance.rest.repos.getCommit({
      owner,
      repo,
      ref: commitHash,
      mediaType: { format: "diff" },
    });
    diff = typeof res.data === "string" ? res.data : String(res.data);
  } catch (err) {
    try {
      const token = githubToken || process.env.GITHUB_TOKEN;
      const { data } = await axios.get(`${cleanUrl}/commit/${commitHash}.diff`, {
        headers: {
          Accept: "application/vnd.github.v3.diff",
          ...(token ? { Authorization: `token ${token}` } : {}),
        },
      });
      diff = data || "";
    } catch (axiosErr) {
      console.error(`Failed to fetch diff for commit ${commitHash}:`, axiosErr);
    }
  }

  if (!diff) return "";
  return await aisummarizeCommit(diff);
}