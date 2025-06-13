# GitHubAI 
GitHubAI is your personal repo Q&A and meeting notes extractor, built to make GitHub content and audio recordings instantly understandable. Whether you're revisiting a long issue thread or skimming through a call recording, GitHubAI helps you extract context, generate summaries, and get straight to the point.

Under the hood, it taps into GitHub API, AssemblyAI, and Gemini Pro (RAG) to do the heavy lifting.  

---

## Tech Stack  

### Frontend & UI  
- Next.js App Router — for routing and layouts  
- TailwindCSS — for styling  
- shadCN — polished, accessible UI components  

### Backend & APIs  
- Prisma ORM + NeonDB — handles user data and interaction records  
- Clerk — authentication layer (email/password, social logins) 
- tRPC — typesafe API layer between UI and backend  
- GitHub API — fetches repo content and file structure
   (also designed an algorithm to fetch the file count of that repo)
- AssemblyAI — transcribes audio + extracts meeting highlights with timestamps 
- Gemini API — does Q&A with basic RAG implementation  

---

## What You'll see after logging in: 

1. After Clerk login 
   → Auth session is created, tracked in NeonDB using Prisma.

2. Create Page  
   → GitHub API fetches the repo’s file tree + raw content.

3. Q&A Page  
   → The app chunks files (if needed), runs retrieval (RAG), sends prompt to gemini API, and responds with answers.

4. Upload a meeting audio file(meetings page)  
   → Audio is processed via AssemblyAI, highlights are pulled out and shown.

5. All data is saved per user  
   → Interactions, repo metadata, and audio notes are stored for later access.

---

## How to Set up 

### 1. Clone the Repo  
```bash
git clone https://github.com/your-username/githubAI.git
cd githubAI
```

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

im planning to integrate razorpay payment gateway, with a separate Billing page where users must buy credits to create a project and use other features




