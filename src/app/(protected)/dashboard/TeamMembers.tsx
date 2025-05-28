'use client'

import UseProject from '@/hooks/use-project'
import { api } from '@/trpc/react'
import React from 'react'

const TeamMembers = () => {
  const {projectId} = UseProject()
  const {data:members} = api.project.getTeamMembers.useQuery({ projectId})
  return (
    <div className ="flex items-center gap-2">
      {members?.map(member =>(
        <img key ={member.id} src ={member.user.imageUrl || ''} alt ={member.user.firstName || ''} height ={30} width ={30} className ="w-8 h-8 rounded-full"/>))}
    </div>
  )
}

export default TeamMembers
