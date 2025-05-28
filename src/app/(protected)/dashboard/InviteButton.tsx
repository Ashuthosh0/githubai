'use client'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import UseProject from '@/hooks/use-project'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'

const InviteButton = () => {
  const { projectId } = UseProject()
  const [open, setOpen] = React.useState(false)
  const [inviteLink, setInviteLink] = useState('') // State to hold the invite link

  // Set the invite link only after the component mounts on the client
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setInviteLink(`${window.location.origin}/join/${projectId}`)
    }
  }, [projectId]) // Re-run if projectId changes

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Invite Team member</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-gray-500">Copy and paste this link</p>
          <Input
            className="mt-4"
            readOnly
            onClick={() => {
              navigator.clipboard.writeText(inviteLink)
              toast.success('copied to clipboard')
            }}
            value={inviteLink}
          />
        </DialogContent>
      </Dialog>
      <Button size="sm" onClick={() => setOpen(true)}>
        Invite Member
      </Button>
    </>
  )
}

export default InviteButton