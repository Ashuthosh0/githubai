'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import UseRefetch from '@/hooks/use-refetch'
import type { AppRouter } from '@/server/api/root'
import { api } from '@/trpc/react'
import type { inferRouterOutputs } from '@trpc/server'
import { Info } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Router } from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

type CheckCreditsOutput = inferRouterOutputs<AppRouter>['project']['check_Credits'];

type FormInput = {
  repoUrl: string
  projectName: string
  githubToken?: string
}

const CreatePage = () => {
  const router = useRouter()
  const { register, handleSubmit, reset } = useForm<FormInput>()
  const createProject = api.project.createProject.useMutation()
  const checkCredits = api.project.check_Credits.useMutation()

  const fileCount: number | undefined = checkCredits.data?.fileCount;
  const userCredits: number | undefined = checkCredits.data?.userCredits;

  const refetch = UseRefetch();

  function onSubmit(data: FormInput) {
    if(!!checkCredits.data){
      createProject.mutate({
      githubUrl : data.repoUrl,
      name : data.projectName,
      githubToken : data.githubToken
    },
  {
    onSuccess: () =>{
      toast.success('Project created successfully')
      refetch();
      reset()
      router.push('/dashboard');
    },
    onError : () => {
      toast.error('Failed to create project')
    }
  })
    } else {
      checkCredits.mutate({
        githubUrl : data.repoUrl,
        githubToken : data.githubToken
      })
    }
  }

  const hasEnoughCredits = checkCredits?.data?.userCredits ? checkCredits.data.userCredits >= checkCredits.data.fileCount : true;

  return (
    <div className="flex flex-col items-center justify-center h-full gap-6 px-4">
      <div className="text-center">
        <h1 className="font-semibold text-2xl">
          Link your GitHub repository
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Enter the URL of the repository to connect it with GitHub AI
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full max-w-md gap-3">
        <Input
          {...register('projectName', { required: true })}
          placeholder="Project name"
          required
        />
        <Input
          {...register('repoUrl', { required: true })}
          placeholder="GitHub URL"
          type ="url"
          required
        />
        <Input
          {...register('githubToken')}
          placeholder="GitHub Token (Optional)"
        />
        {!!checkCredits.data &&(
          <>
          <div className="mt-4 bg-blue-50 px-4 py-2 rounded-md border border-blue-200 text-blue-700">
            <div className="flex items-center gap-2">
              <Info className="size-4" />
              <p className="text-sm">
                You will be charged <strong>{fileCount} credit for this repository</strong>
              </p>
            </div>
            <p className="text-sm text-blue-600 ml-6">
              You have <strong>{userCredits}</strong> credits remaining.
            </p>
          </div>
          
          </>
        )}
        <div className ="h-4"></div>
        <Button type="submit" disabled={createProject.isPending || checkCredits.isPending || !hasEnoughCredits}>
          {!!checkCredits.data ? 'Create Project ' : 'Check Credits'}
        </Button>
      </form>

    </div>
  )
}

export default CreatePage
