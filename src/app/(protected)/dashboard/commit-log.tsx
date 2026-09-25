'use client'

import UseProject from '@/hooks/use-project'
import { api } from '@/trpc/react'
import { ExternalLink, GitCommit, Loader2, RefreshCw } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

const CommitLog = () => {
  const { projectId, project } = UseProject()
  const { data: commits, isLoading, refetch, isRefetching } = api.project.getCommits.useQuery(
    { projectId },
    { enabled: !!projectId }
  )

  const pullCommits = api.project.pullCommits.useMutation({
    onSuccess: (data) => {
      toast.success(`Fetched ${data?.length ?? 0} latest commits!`)
      refetch()
    },
    onError: (err) => {
      toast.error(`Failed to pull commits: ${err.message}`)
    },
  })

  if (!projectId || !project) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 p-8 text-center bg-gray-50/50">
        <GitCommit className="size-10 text-gray-400 mb-2" />
        <h3 className="font-semibold text-gray-800 text-lg">No Project Selected</h3>
        <p className="text-sm text-gray-500 mt-1 max-w-sm">
          Please select a project from the sidebar or create a new one to view commit logs.
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <GitCommit className="size-5 text-gray-700" />
          <h2 className="font-semibold text-gray-900 text-lg">Commit History</h2>
          <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-700">
            {commits?.length ?? 0} commits
          </span>
        </div>
        <Button
          size="sm"
          variant="outline"
          onClick={() => pullCommits.mutate({ projectId })}
          disabled={pullCommits.isPending || isRefetching}
          className="flex items-center gap-1.5"
        >
          <RefreshCw className={`size-3.5 ${pullCommits.isPending || isRefetching ? 'animate-spin' : ''}`} />
          Sync Commits
        </Button>
      </div>

      {isLoading ? (
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse flex gap-4 rounded-xl border border-gray-200 bg-white p-4">
              <div className="size-10 rounded-full bg-gray-200 shrink-0" />
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-200 rounded w-1/3" />
                <div className="h-4 bg-gray-200 rounded w-2/3" />
                <div className="h-12 bg-gray-100 rounded w-full" />
              </div>
            </div>
          ))}
        </div>
      ) : !commits || commits.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 p-8 text-center bg-gray-50/50">
          <GitCommit className="size-8 text-gray-400 mb-2" />
          <h3 className="font-medium text-gray-800">No commits found</h3>
          <p className="text-sm text-gray-500 mt-1">
            Click &quot;Sync Commits&quot; to fetch the latest commits from GitHub.
          </p>
        </div>
      ) : (
        <ul className="space-y-3">
          {commits.map((commit) => (
            <li
              key={commit.id}
              className="relative flex gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              {commit.commitAuthorAvatar ? (
                <img
                  src={commit.commitAuthorAvatar}
                  alt={commit.commitAuthorName || 'commit avatar'}
                  className="mt-1 size-10 rounded-full bg-gray-100 object-cover shrink-0"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none'
                  }}
                />
              ) : (
                <div className="mt-1 size-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold shrink-0">
                  {commit.commitAuthorName?.[0]?.toUpperCase() ?? 'U'}
                </div>
              )}

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <Link
                    target="_blank"
                    href={`${project?.githubUrl}/commit/${commit.commitHash}`}
                    className="inline-flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors gap-1"
                  >
                    <span className="font-medium text-gray-900">{commit.commitAuthorName}</span>
                    <span className="text-gray-500">committed</span>
                    <span className="font-mono text-xs text-gray-400">
                      {commit.commitHash.slice(0, 7)}
                    </span>
                    <ExternalLink className="size-3.5 ml-0.5 text-gray-400" />
                  </Link>

                  {commit.commitDate && (
                    <span className="text-xs text-gray-400">
                      {new Date(commit.commitDate).toLocaleDateString(undefined, {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                  )}
                </div>

                <div className="mt-1 text-sm font-semibold text-gray-900 break-words">
                  {commit.commitMessage}
                </div>

                {commit.summary && (
                  <div className="mt-2 rounded-lg bg-gray-50 p-3 text-sm text-gray-700 border border-gray-100 whitespace-pre-wrap font-sans leading-relaxed">
                    {commit.summary}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default CommitLog





