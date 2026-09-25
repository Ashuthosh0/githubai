import { GithubRepoLoader } from '@langchain/community/document_loaders/web/github';
import { generateEmbedding, summariseCode } from './gemini';
import type { Document } from '@langchain/core/documents';
import { db } from '@/server/db';
import { getOctokit, parseGithubUrl } from './github';
import type { Octokit } from 'octokit';

const getFileCount = async (path: string, octokit: Octokit, githubOwner: string, githubRepo: string, acc: number = 0): Promise<number> => {
  try {
    const { data } = await octokit.rest.repos.getContent({
      owner: githubOwner,
      repo: githubRepo,
      path,
    });

    if (!Array.isArray(data) && data.type === 'file') {
      return acc + 1;
    }
    if (Array.isArray(data)) {
      let fileCount = 0;
      const directories: string[] = [];

      for (const item of data) {
        if (item.type === 'dir') {
          directories.push(item.path);
        } else {
          fileCount++;
        }
      }

      if (directories.length > 0) {
        const directoryCounts = await Promise.all(
          directories.map((dirPath) => getFileCount(dirPath, octokit, githubOwner, githubRepo, 0))
        );
        fileCount += directoryCounts.reduce((acc, count) => acc + count, 0);
      }
      return acc + fileCount;
    }
    return acc;
  } catch (error) {
    console.error(`Error in getFileCount for path "${path}":`, error);
    return acc;
  }
};

export const checkCredits = async (githubUrl: string, githubToken?: string) => {
  try {
    const { owner, repo } = parseGithubUrl(githubUrl);
    const octokit = getOctokit(githubToken);
    const fileCount = await getFileCount('', octokit, owner, repo, 0);
    return fileCount;
  } catch (err) {
    console.error('Error in checkCredits:', err);
    return 0;
  }
};

export const loadGithubRepo = async (githubUrl: string, githubToken?: string) => {
  const { owner, repo, cleanUrl } = parseGithubUrl(githubUrl);
  let defaultBranch = 'main';

  try {
    const octokit = getOctokit(githubToken);
    const repoData = await octokit.rest.repos.get({ owner, repo });
    defaultBranch = repoData.data.default_branch || 'main';
  } catch {
    console.warn("Could not determine repo default branch, falling back to 'main'");
  }

  const loader = new GithubRepoLoader(cleanUrl, {
    accessToken: githubToken || process.env.GITHUB_TOKEN || '',
    branch: defaultBranch,
    ignoreFiles: [
          // Package manager lock files
          'package-lock.json',
          'yarn.lock',
          'pnpm-lock.yaml',
          'bun.lockb',

          // Node modules folder
          'node_modules/',

          // Build output folders
          'dist/',
          'build/',
          'out/',
          'coverage/',

          // Environment files
          '.env',
          '.env.local',
          '.env.development',
          '.env.test',
          '.env.production',

          // Logs
          'npm-debug.log',
          'yarn-debug.log',
          'yarn-error.log',

          // OS-specific files
          '.DS_Store',
          'Thumbs.db',

          // Editor directories and files
          '.vscode/',
          '.idea/',
          '*.suo',
          '*.ntvs*',
          '*.njsproj',
          '*.sln',
          '*.swp',
          
          // Temporary files
          '*.tmp',
          '*.temp',
          '*.bak',
          '*.backup',

          // Misc
          '.cache/',
          '.parcel-cache/',
          '.next/',
          '.nuxt/',
        ],
      recursive : true,
      unknown : 'warn',
      maxConcurrency : 5
    })
    const docs = await loader.load();
    return docs;
}


export const indexGithubRepo = async(projectId :string , githubUrl : string , githubToken? : string) => {
  const docs = await loadGithubRepo(githubUrl , githubToken)
  console.log(docs)
  const allEmbeddings = await generateEmbeddings(docs);
  await Promise.allSettled(allEmbeddings.map(async (embedding , index) =>{
    console.log(`processing ${index} of ${allEmbeddings.length}`)
    if(!embedding) return 
    const sourceCodeEmbedding = await db.sourceCodeEmbedding.create({
      data:{
        summary : embedding.summary,
        sourceCode : embedding.sourceCode,
        fileName : embedding.filename,
        projectId,
      }
    })
    await db.$executeRaw`
    UPDATE "SourceCodeEmbedding"
    SET "summaryEmbedding" = ${embedding.embedding} :: vector
    WHERE "id" = ${sourceCodeEmbedding.id}
    `
  }))

}

const generateEmbeddings = async (docs :Document[]) => {
  return await Promise.all(docs.map(async doc =>{
    const summary = await summariseCode(doc)
    const embedding = await generateEmbedding(summary)
    return {
      summary,
      embedding,
      sourceCode :JSON.parse(JSON.stringify(doc.pageContent)),
      filename : doc.metadata.source,
    }

  }))
}