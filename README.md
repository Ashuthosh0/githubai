# GitHubAI

GitHubAI is a repo Q&A and meeting highlight platform designed to help you quickly understand large GitHub projects and extract key points from recorded meetings. Whether you’re exploring unfamiliar codebases or reviewing discussion calls, GitHubAI makes the process faster and more manageable.

It brings together GitHub API, AssemblyAI, and Gemini Pro (via basic RAG) to do the heavy lifting behind the scenes.

---

## Tech Stack

### Frontend & UI
- Next.js App Router — for structured routing and layouts  
- TailwindCSS — utility-first styling  
- shadCN — accessible and clean component library

### Backend & APIs
- Prisma ORM + NeonDB — manages all user data and project state  
- Clerk — handles authentication (email, social logins)  
- tRPC — enables typesafe API communication between frontend and backend  
- GitHub API — pulls file trees and raw repo content  
  (includes a small algorithm to count all files in a repo)  
- AssemblyAI — transcribes audio files and extracts timestamped highlights  
- Gemini API — performs contextual Q&A using a basic Retrieval-Augmented Generation setup

---

## What You’ll See After Logging In

1. Login via Clerk  
   → The user session is created and saved using Prisma + NeonDB.

2. Create Page  
   → GitHub API fetches the structure and contents of the selected repo.

3. Q&A Page  
   → You can ask questions about the repo; the system chunks the content, retrieves relevant parts, and Gemini generates the answer.

4. Meetings Page  
   → Upload audio recordings of meetings; AssemblyAI transcribes and extracts the main highlights with timestamps.

5. Everything is stored per user  
   → Project data, questions, answers, and meeting summaries are saved for reuse.

---

## How to Set It Up

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/githubAI.git
cd githubAI


### 2. Install Dependencies  
```bash
npm install
```
### 3. Create a .env.local File
Create a .env.local file in the root directory and add your config keys:
```bash
DATABASE_URL=""
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL = "/sync-user"
GITHUB_TOKEN =''
GEMINI_API=''
ASSEMBLYAI_API_KEY = ""
NEXT_PUBLIC_APP_URL='http://localhost:3000'
```

### 4. Setup Database
Everytime you add a model into the prisma or modify it run:
```bash
npx prisma generate
npx prisma db push
```

### 5. Start the App
```bash
npm run dev
```

I’m currently working on Razorpay integration. Users will be able to buy credits via a dedicated Billing page. These credits will be required to create new projects and unlock advanced features.



