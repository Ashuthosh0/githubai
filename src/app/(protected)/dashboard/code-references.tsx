// 'use client'
// import { Tabs , TabsContent } from '@/components/ui/tabs';
// import { getFileInfo } from 'prettier';
// import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
// import {lucario } from 'react-syntax-highlighter/dist/esm/styles/prism'
// import React from 'react'
// import { cn } from "@/lib/utils";

// type Props = {
//   filesReferences : {fileName : string ; sourceCode : string ; summary : string} []
// }


// const CodeReferences = ({ filesReferences}:Props) => {
//   const [tab ,setTab] = React.useState(filesReferences[0]?.fileName)
//   if(filesReferences.length === 0) return null
//   return (
//     <div className ="max-w-[70vw]">
//       <Tabs value ={tab} onValueChange ={setTab}>
        // <div className ="overflow-scroll flex gap-2 bg-gray-200 p-1 rounded-md">
        //   {filesReferences.map(file =>(
        //     <button key={file.fileName} className={cn('px-3 py-1.5 text-sm font-medium rounded-md transition-color whitespace-nowrap text-muted-foreground hover:bg-muted',
        //       {
        //         'bg-primary text-primary-foreground':tab ===file.fileName ,
        //       }

        //     )}>
        //       {file.fileName}
        //     </button>
        //   ))}
        // </div>
//         {filesReferences.map(file => (
//           <TabsContent key = {file.fileName} value ={file.fileName} className ="max-h-[40vh] overflow-scroll max-w-7x1 rounded-md">
//             <SyntaxHighlighter language ='typescript' style ={lucario}>
//               {file.sourceCode}
//             </SyntaxHighlighter>


//           </TabsContent>
//         ))}
//       </Tabs>
//     </div>
//   )
// }

// export default CodeReferences


'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { lucario } from 'react-syntax-highlighter/dist/esm/styles/prism';
import React from 'react';
import { cn } from "@/lib/utils";

type Props = {
  filesReferences: { fileName: string; sourceCode: string; summary: string }[];
};

const CodeReferences = ({ filesReferences }: Props) => {
  const [tab, setTab] = React.useState(filesReferences[0]?.fileName);
  if (filesReferences.length === 0) return null;

  return (
    <div className="max-w-[70vw] space-y-4">
      <Tabs value={tab} onValueChange={setTab}>
        
        {/* Tabs List */}
        <TabsList className="overflow-x-auto flex gap-2 bg-gray-100 p-1 rounded-md w-fit max-w-full">
          {filesReferences.map((file) => (
            <TabsTrigger
              key={file.fileName}
              value={file.fileName}
              className={cn(
                'px-3 py-1.5 text-sm font-medium rounded-md whitespace-nowrap transition-colors',
                {
                  'bg-primary text-primary-foreground': tab === file.fileName,
                  'text-muted-foreground hover:bg-muted': tab !== file.fileName,
                }
              )}
            >
              {file.fileName}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Tabs Content */}
        {filesReferences.map((file) => (
          <TabsContent
            key={file.fileName}
            value={file.fileName}
            className="mt-4 max-h-[45vh] overflow-auto rounded-md w-full"
          >
            {/* Summary Section */}
            <div className="mb-3 text-sm text-gray-700 leading-relaxed">
              {file.summary}
            </div>

            {/* Code Viewer */}
            <SyntaxHighlighter language="typescript" style={lucario} customStyle={{ borderRadius: '0.5rem', padding: '1rem' }}>
              {file.sourceCode}
            </SyntaxHighlighter>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default CodeReferences;
