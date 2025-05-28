'use client'
import MDEditor from '@uiw/react-md-editor'
import React from 'react'
import { Card, CardContent, CardTitle, CardHeader } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import UseProject from '@/hooks/use-project'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import Image from 'next/image'
import { askQuestion } from './actions'
import { readStreamableValue } from 'ai/rsc'
import CodeReferences from './code-references'
import { api } from '@/trpc/react'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import UseRefetch from '@/hooks/use-refetch'



const AskQuestionCard = () => {
  const { project } = UseProject()
  const [open, setOpen] = React.useState(false)
  const [question, setQuestion] = React.useState('')
  const [loading , setLoading] = React.useState(false)
  const [answer , setAnswer] = React.useState('')
  const [filesReferences , setFilesReferences] = React.useState<{ fileName :string ; sourceCode :string; summary:string }[]>([])
  const saveAnswer = api.project.saveAnswer.useMutation();


  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setAnswer('');
    setFilesReferences([]);
    e.preventDefault()
    if (!project?.id) return

    setLoading(true)
    

    try {
      const { output, filesReferences } = await askQuestion(question, project.id)
      setOpen(true)
      setFilesReferences(filesReferences)

      for await (const delta of readStreamableValue(output)) {
        if (delta) {
          console.log('Delta:', delta);
          setAnswer((ans) => ans + delta)
        }
      }
    } catch (err) {
      console.error('Error while asking question:', err)
      setAnswer('An error occurred while getting the answer.')
    }
    setLoading(false)
  }

  const refetch = UseRefetch();
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className ="sm:max-w-[80vw]">
          <DialogHeader>
            <div className ="flex items-center gap-2">
              <DialogTitle className="flex items-center gap-2">
              <Image src="/logo2.png" alt="githubai" width={40} height={40} />
            </DialogTitle>
            <Button variant ={'outline'} onClick ={()=>{
              saveAnswer.mutate({
                projectId: project!.id,
                question,
                answer,
                filesReferences 
              },{
                onSuccess:() =>{
                  toast.success('ANSWER SAVED')
                  refetch();
                },
                onError:() => {
                    toast.error('Failed to save the answer')
                }

              })
            }}>
              Save Answer
            </Button>
            </div>
          </DialogHeader>
          <MDEditor.Markdown source = {answer} className ="max-w-[70vw] !h-full max-h-[40vh] overflow-scroll"/>
          <div className ="h-4" ></div>
          <CodeReferences filesReferences={filesReferences}/>

        <Button type ='button' onClick={() => setOpen(false)}>close</Button>
        </DialogContent>
      </Dialog>

      <Card className="relative col-span-3">
        <CardHeader>
          <CardTitle>Ask a question</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit}>
            <Textarea
              placeholder="Explain the codebase"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <div className="h-4" />
            <Button type="submit" disabled ={loading}>Ask the AI</Button>
          </form>
        </CardContent>
      </Card>
    </>
  )
}

export default AskQuestionCard
