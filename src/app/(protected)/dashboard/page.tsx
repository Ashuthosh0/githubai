'use client'
import { useUser } from '@clerk/nextjs'
import React from 'react'
import UseProject from '@/hooks/use-project'
import { Github } from 'lucide-react'
import Link from 'next/link'
import CommitLog from './commit-log'
import AskQuestionCard from './ask-question-card'
import MeetingCard from './MeetingCard'
import ArchiveButton from './archive-button'
import InviteButton from './InviteButton'
import TeamMembers from './TeamMembers'

const DashboardPage = () => {
  const { project } = UseProject()
  return (
    <div>
      <div className="flex items-center justify-between flex-wrap gap-y-4">
        <div className="w-fit rounded bg-primary px-4 py-3">
          <div className="flex items-center">
            <Github className="w-5 h-5 text-white" />
            <div className="ml-2">
              <p className="text-sm font-medium text-white">
                This project is linked to{' '}
                <Link
                  href={project?.githubUrl ?? ''}
                  className="text-white/80 hover:underline"
                >
                  {project?.githubUrl}
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className = 'h-4'></div>

        <div className ="flex items-center gap-4">
          <TeamMembers/>
          <InviteButton/>
          <ArchiveButton/>
        </div>
      </div>

      <div  className = "mt-4">
        <div className = "grid grid-cold-1 gap-4 sm:grid-cols-5">
          <AskQuestionCard/>
          <MeetingCard/> 
        </div>
      </div>
      <div className = "mt-8"></div>
      <CommitLog/>


    </div>
  )
}

export default DashboardPage
