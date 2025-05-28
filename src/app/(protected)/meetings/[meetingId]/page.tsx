import React from 'react'
import IssueList from './IssuesList'
 type props = {
  params : Promise<{meetingId : string}>
 }
const MeetingDetailsPage = async( {params} : props) => {
  const  {meetingId} = await params
  return (
    <IssueList meetingId={meetingId}/>
  )
}

export default MeetingDetailsPage