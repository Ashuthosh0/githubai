'use client'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import UseProject from '@/hooks/use-project'
import React from 'react'
import { toast } from 'sonner'

const InviteButton = () => {
  const {projectId} = UseProject()
  const [open, setOpen] = React.useState(false)
  return (
    <>
    <Dialog open ={open} onOpenChange ={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Invite Team member</DialogTitle>
        </DialogHeader>
        <p className ="text-sm text-gray-500">Copy and paste this link</p>
        <Input className ="mt-4" readOnly onClick={() =>{
          navigator.clipboard.writeText(`${window.location.origin}/join/${projectId}`)
          toast.success("copied to clipboard")
        }} value ={`${window.location.origin}/join/${projectId}`}/>
      </DialogContent>
    </Dialog>
    <Button size ="sm" onClick ={() => setOpen(true)}>Invite Member</Button>
    </>
  )
}

export default InviteButton