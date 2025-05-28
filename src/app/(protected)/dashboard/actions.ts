'use server'

import { generateEmbedding } from "@/lib/gemini"
import { streamText } from 'ai'
import { createStreamableValue } from 'ai/rsc'
import { createGoogleGenerativeAI } from '@ai-sdk/google'
import { db } from "@/server/db"

const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API,
})

export async function askQuestion(question: string, projectId: string) {
  console.log(`[askQuestion] Invoked with question: "${question}" | projectId: ${projectId}`)

  const stream = createStreamableValue()
  console.log(`[askQuestion] Initialized streamable value.`)

  const queryVector = await generateEmbedding(question)
  console.log(`[askQuestion] Generated query vector embedding. Vector length: ${queryVector.length}`)

  const vectorQuery = `[${queryVector.join(',')}]`
  console.log(`[askQuestion] Vector prepared for SQL query.`)

  console.time('[askQuestion] Vector DB Query Time')
  const result = await db.$queryRaw`
    SELECT "fileName", "sourceCode", "summary",
    1 - ("summaryEmbedding" <=> ${vectorQuery} :: vector) AS similarity
    FROM "SourceCodeEmbedding"
    WHERE 1 - ("summaryEmbedding" <=> ${vectorQuery} :: vector) > 0.5
    AND "projectId" = ${projectId}
    ORDER BY similarity DESC
    LIMIT 10
  ` as { fileName: string; sourceCode: string; summary: string }[]
  console.timeEnd('[askQuestion] Vector DB Query Time')
  console.log(`[askQuestion] Retrieved ${result.length} context files.`)

  let context = ''
  result.forEach((doc, index) => {
    context += `source ${doc.fileName}\ncode content : ${doc.sourceCode} \n summary of file: ${doc.summary} \n\n`
    console.log(`[askQuestion] Context doc[${index}] => fileName: ${doc.fileName}, sourceCode.length: ${doc.sourceCode.length}, summary.length: ${doc.summary.length}`)
  })

  console.log(`[askQuestion] Constructed context block. Total length: ${context.length}`)

  ;(async () => {
    console.log(`[askQuestion] Starting Gemini streamText call...`)
    const { textStream } = await streamText({
      model: google('gemini-1.5-flash'),
      prompt: `
You are an AI code assistant who answers questions about the codebase. Your target audience is a technical intern.
AI assistant is a brand new, powerful, human-like artificial intelligence.
The traits of AI include expert knowledge, helpfulness, cleverness, and articulateness.
AI is a well-behaved and well-mannered individual.
AI is always friendly, kind, and inspiring, and is eager to provide vivid and thoughtful responses to the user.
AI has the sum of all knowledge in their brain, and is able to accurately answer nearly any question about any topic.
If the question is asking about code or a specific file, AI will provide a detailed answer, giving step-by-step instructions.
START CONTEXT BLOCK
${context}
END OF CONTEXT BLOCK
START QUESTION
${question}
END OF QUESTION
AI assistant will take into account any CONTEXT BLOCK that is provided in a conversation.
If the context does not provide the answer to the question, the AI assistant will say, "I'm sorry, but I don't have enough information to answer that based on the provided context."
AI assistant will not apologize for previous responses, but instead will indicate when new information would be helpful.
AI assistant will not invent anything that is not drawn directly from the context.
Answer in markdown syntax, with code snippets if needed. Be as detailed as possible when answering technical questions.
      `,
    })

    console.log(`[askQuestion] Gemini stream started.`)
    let chunkCount = 0
    for await (const delta of textStream) {
      chunkCount++
      console.log(`[askQuestion] Delta chunk [${chunkCount}]:`, delta)
      stream.update(delta)
    }
    stream.done()
    console.log(`[askQuestion] Streaming completed. Total chunks received: ${chunkCount}`)
  })()

  console.log(`[askQuestion] Returning stream and file references to caller.`)

  return {
    output: stream.value, // not stream.value!
    filesReferences: result,
  }
}

