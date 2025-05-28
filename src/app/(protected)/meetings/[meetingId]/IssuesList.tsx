'use client'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { api, type RouterOutputs } from '@/trpc/react'
import { VideoIcon } from 'lucide-react'
import React from 'react'

type Props = {
  meetingId: string
}

const IssueList = ({ meetingId }: Props) => {
  const { data: meeting, isLoading } = api.project.getMeetingById.useQuery(
    { meetingId },
    {
      refetchInterval: 4000,
    }
  )

  if (isLoading || !meeting) return <div>Loading...</div>

  return (
    <>
      <div className="p-8">
        <div className="mx-auto flex max-w-2xl items-center justify-between gap-x-8 border-b pb-6 lg:mx-0 lg:max-w-none">
          <div className="flex items-center gap-x-6">
            <div className="rounded-full border bg-white p-3">
              <VideoIcon className="h-6 w-6" />
            </div>
            <h1>
              <div className="text-sm leading-6 text-gray-600">
                Meeting on {new Date(meeting.createdAt).toLocaleDateString()}
              </div>
              <div className="mt-1 text-base font-semibold leading-6 text-gray-900">
                {meeting.name}
              </div>
            </h1>
          </div>
        </div>
        <div className="h-4"></div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          {meeting.issues?.map((issue) => (
            <IssueCard key={issue.id} issue={issue} />
          ))}
        </div>
      </div>
    </>
  )
}

function IssueCard({
  issue,
}: {
  issue: NonNullable<RouterOutputs['project']['getMeetingById']>['issues'][number]
}) {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      {/* Add a clickable element to open the dialog */}
      <div onClick={() => setOpen(true)} className="cursor-pointer p-4 border rounded shadow hover:shadow-md transition">
        <h3 className="font-semibold">{issue.gist}</h3>
        <p className="text-sm text-gray-500">{new Date(issue.createdAt).toLocaleDateString()}</p>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{issue.gist}</DialogTitle>
            <DialogDescription>{new Date(issue.createdAt).toLocaleDateString()}</DialogDescription>
          </DialogHeader>
          <p className="text-gray-600">{issue.headline}</p>
          <blockquote className="mt-2 border-l-4 border-gray-300 bg-gray-50 p-4">
            <span className="text-sm text-gray-600">
              {issue.start} - {issue.end}
            </span>
            <p className="font-medium italic leading-relaxed text-gray-900">{issue.summary}</p>
          </blockquote>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default IssueList
