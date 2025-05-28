// 'use client'
// import UseProject from '@/hooks/use-project'
// import { api } from '@/trpc/react'
// import { ExternalLink } from 'lucide-react'
// import Link from 'next/link'
// import React from 'react'
// import { cn } from '@/lib/utils'

// const CommitLog = () => {
//   const { projectId, project } = UseProject()
//   const { data: commits } = api.project.getCommits.useQuery({ projectId })

//   return (
//     <ul className="space-y-6">
//       {commits?.map((commit, commitIdx) => (
//         <li key={commit.id} className="relative flex gap-x-4">
//           <div
//             className={cn(
//               'absolute left-0 top-0 flex w-6 justify-center',
//               commitIdx === commits.length - 1 ? 'h-6' : '-bottom-6'
//             )}
//           >
//             <div className="w-px translate-x-1 bg-gray-200" />
//           </div>

//           <div className="flex flex-col">
//             <img
//               src={commit.commitAuthorAvatar}
//               alt="commit avatar"
//               className="relative mt-4 size-8 flex-none rounded-full bg-gray-50"
//             />

//             <div className="flex justify-between gap-x-4">
//               <Link
//                 target="_blank"
//                 href={`${project?.githubUrl}/commits/${commit.commitHash}`}
//                 className="py-0.5 text-xs leading-5 text-gray-500"
//               >
//                 {commit.commitMessage}
//                 <span className="inline-flex items-center ml-2">
//                   {commit.commitAuthorName}
//                   <span className="ml-1">committed</span>
//                   <ExternalLink className="ml-1 size-4" />
//                 </span>
//               </Link>
//             </div>
//             <span className="font-semibold">{commit.commitMessage}</span>
//             <pre className="mt-2 whitespace-pre-wrap text-sm leading-6 text-gray-500">
//               {commit.summary}
//             </pre>
//           </div>
//         </li>
//       ))}
//     </ul>
//   )
// }

// export default CommitLog


// 'use client'
// import UseProject from '@/hooks/use-project'
// import { api } from '@/trpc/react'
// import { ExternalLink } from 'lucide-react'
// import Link from 'next/link'
// import React from 'react'
// import { cn } from '@/lib/utils'

// const CommitLog = () => {
//   const { projectId, project } = UseProject()
//   const { data: commits } = api.project.getCommits.useQuery({ projectId })

//   return (
//     <ul className="space-y-6">
//       {commits?.map((commit, commitIdx) => (
//         <li key={commit.id} className="relative flex items-start gap-4 pl-4">
//           {/* Vertical timeline line */}
//           <div
//             className={cn(
//               'absolute left-4 top-4 w-px bg-gray-200',
//               commitIdx === commits.length - 1 ? 'h-4' : 'bottom-0'
//             )}
//           />

//           {/* Commit Author Avatar */}
//           <img
//             src={commit.commitAuthorAvatar}
//             alt="commit avatar"
//             className="z-10 mt-1 w-8 h-8 rounded-full bg-gray-100 object-cover"
//           />

//           {/* Commit Content */}
//           <div className="flex-1">
//             {/* Clickable Author + commit label */}
//             <Link
//               target="_blank"
//               href={`${project?.githubUrl}/commits/${commit.commitHash}`}
//               className="inline-flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors"
//             >
//               <span className="font-medium">{commit.commitAuthorName}</span>
//               <span className="ml-1">committed</span>
//               <ExternalLink className="ml-1 w-4 h-4" />
//             </Link>

//             {/* Commit Message */}
//             <div className="mt-1 text-sm font-semibold text-gray-900">
//               {commit.commitMessage}
//             </div>

//             {/* Commit Summary */}
//             <pre className="mt-2 whitespace-pre-wrap text-sm text-gray-600">
//               {commit.summary}
//             </pre>
//           </div>
//         </li>
//       ))}
//     </ul>
//   )
// }

// export default CommitLog


'use client'
import UseProject from '@/hooks/use-project'
import { api } from '@/trpc/react'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { cn } from '@/lib/utils'

const CommitLog = () => {
  const { projectId, project } = UseProject()
  const { data: commits } = api.project.getCommits.useQuery({ projectId })

  return (
    <ul className="space-y-4">
      {commits?.map((commit, commitIdx) => (
        <li
          key={commit.id}
          className="relative flex gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
        >
         
          <img
            src={commit.commitAuthorAvatar}
            alt="commit avatar"
            className="mt-1 w-10 h-10 rounded-full bg-gray-100 object-cover"
          />

          <div className="flex-1">
           
            <Link
              target="_blank"
              href={`${project?.githubUrl}/commits/${commit.commitHash}`}
              className="inline-flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors"
            >
              <span className="font-medium">{commit.commitAuthorName}</span>
              <span className="ml-1">committed</span>
              <ExternalLink className="ml-1 w-4 h-4" />
            </Link>

            {/* Commit Message */}
            <div className="mt-1 text-sm font-semibold text-gray-900">
              {commit.commitMessage}
            </div>

            {/* Commit Summary */}
            <pre className="mt-2 whitespace-pre-wrap text-sm text-gray-600">
              {commit.summary}
            </pre>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default CommitLog





