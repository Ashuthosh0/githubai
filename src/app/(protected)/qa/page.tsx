


'use client'
import UseProject from '@/hooks/use-project'
import { api } from '@/trpc/react'
import React from 'react'
import AskQuestionCard from '../dashboard/ask-question-card'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import MDEditor from '@uiw/react-md-editor'
import CodeReferences from '../dashboard/code-references'

const QApage = () => {
  const { projectId } = UseProject()
  const { data: questions } = api.project.getQuestions.useQuery({ projectId })

  const [questionIndex, setQuestionIndex] = React.useState(0)
  const question = questions?.[questionIndex]

  return (
    <Sheet>
      <div className="space-y-4">
        <AskQuestionCard />
        
        <div>
          <h1 className="text-xl font-semibold">Saved Questions</h1>
        </div>

        <div className="flex flex-col gap-3">
          {questions?.map((question, index) => (
            <React.Fragment key={question.id}>
              <SheetTrigger onClick={() => setQuestionIndex(index)}>
                <div className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-md border cursor-pointer hover:bg-gray-50 transition">
                  <img
                    className="rounded-full w-10 h-10 object-cover"
                    src={question.user.imageUrl ?? ''}
                    alt="User"
                  />
                  <div className="flex flex-col text-left w-full">
                    <div className="flex justify-between items-center">
                      <p className="text-gray-800 line-clamp-1 text-lg font-medium">
                        {question.question}
                      </p>
                      <span className="text-xs text-gray-400">
                        {new Date(question.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-gray-500 line-clamp-1 text-sm mt-1">
                      {question.answer}
                    </p>
                  </div>
                </div>
              </SheetTrigger>
            </React.Fragment>
          ))}
        </div>

        {question && (
          <SheetContent className="sm:max-w-[80vh]">
            <SheetHeader className="space-y-4">
              <SheetTitle className="text-xl font-semibold">
                {question.question}
              </SheetTitle>
              <MDEditor.Markdown source={question.answer} />
              <CodeReferences filesReferences={(question.filesReferences ?? []) as any} />
            </SheetHeader>
          </SheetContent>
        )}
      </div>
    </Sheet>
  )
}

export default QApage
