module.exports = {

"[project]/.next-internal/server/app/api/trpc/[trpc]/route/actions.js [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("@opentelemetry/api", () => require("@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/env.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "env": (()=>env)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$t3$2d$oss$2f$env$2d$nextjs$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@t3-oss/env-nextjs/dist/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$v3$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/dist/v3/index.js [app-route] (ecmascript)");
;
;
const env = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$t3$2d$oss$2f$env$2d$nextjs$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createEnv"])({
    /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */ server: {
        DATABASE_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$v3$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().url(),
        NODE_ENV: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$v3$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].enum([
            "development",
            "test",
            "production"
        ]).default("development")
    },
    /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */ client: {
    },
    /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */ runtimeEnv: {
        DATABASE_URL: process.env.DATABASE_URL,
        NODE_ENV: ("TURBOPACK compile-time value", "development")
    },
    /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
   * useful for Docker builds.
   */ skipValidation: !!process.env.SKIP_ENV_VALIDATION,
    /**
   * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and
   * `SOME_VAR=''` will throw an error.
   */ emptyStringAsUndefined: true
});
}}),
"[externals]/@prisma/client [external] (@prisma/client, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}}),
"[project]/src/server/db.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "db": (()=>db)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.js [app-route] (ecmascript)");
;
;
const createPrismaClient = ()=>new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]({
        log: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NODE_ENV === "development" ? [
            "query",
            "error",
            "warn"
        ] : [
            "error"
        ]
    });
const globalForPrisma = globalThis;
const db = globalForPrisma.prisma ?? createPrismaClient();
if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NODE_ENV !== "production") globalForPrisma.prisma = db;
}}),
"[externals]/node:crypto [external] (node:crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/server/api/trpc.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * YOU PROBABLY DON'T NEED TO EDIT THIS FILE, UNLESS:
 * 1. You want to modify request context (see Part 1).
 * 2. You want to create a new middleware or type of procedure (see Part 3).
 *
 * TL;DR - This is where all the tRPC server stuff is created and plugged in. The pieces you will
 * need to use are documented accordingly near the end.
 */ __turbopack_context__.s({
    "createCallerFactory": (()=>createCallerFactory),
    "createTRPCContext": (()=>createTRPCContext),
    "createTRPCRouter": (()=>createTRPCRouter),
    "protectedProcedure": (()=>protectedProcedure),
    "publicProcedure": (()=>publicProcedure)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@trpc/server/dist/index.mjs [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$initTRPC$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@trpc/server/dist/unstable-core-do-not-import/initTRPC.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@trpc/server/dist/unstable-core-do-not-import/error/TRPCError.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/superjson/dist/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$v3$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/dist/v3/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server/auth.js [app-route] (ecmascript)");
;
;
;
;
;
const createTRPCContext = async (opts)=>{
    return {
        db: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"],
        ...opts
    };
};
/**
 * 2. INITIALIZATION
 *
 * This is where the tRPC API is initialized, connecting the context and transformer. We also parse
 * ZodErrors so that you get type safety on the frontend if your procedure fails due to validation
 * errors on the backend.
 */ const t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$initTRPC$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["initTRPC"].context().create({
    transformer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$superjson$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"],
    errorFormatter ({ shape, error }) {
        return {
            ...shape,
            data: {
                ...shape.data,
                zodError: error.cause instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$v3$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ZodError"] ? error.cause.flatten() : null
            }
        };
    }
});
const createCallerFactory = t.createCallerFactory;
const createTRPCRouter = t.router;
/**
 * Middleware for timing procedure execution and adding an artificial delay in development.
 *
 * You can remove this if you don't like it, but it can help catch unwanted waterfalls by simulating
 * network latency that would occur in production but not in local development.
 */ const isAuthenticated = t.middleware(async ({ next, ctx })=>{
    const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["auth"])();
    if (!user) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
            code: 'UNAUTHORIZED',
            message: "You must be logged in to access this response"
        });
    }
    return next({
        ctx: {
            ...ctx,
            user
        }
    });
});
const timingMiddleware = t.middleware(async ({ next, path })=>{
    const start = Date.now();
    if (t._config.isDev) {
        // artificial delay in dev
        const waitMs = Math.floor(Math.random() * 400) + 100;
        await new Promise((resolve)=>setTimeout(resolve, waitMs));
    }
    const result = await next();
    const end = Date.now();
    console.log(`[TRPC] ${path} took ${end - start}ms to execute`);
    return result;
});
const publicProcedure = t.procedure.use(timingMiddleware);
const protectedProcedure = t.procedure.use(isAuthenticated);
}}),
"[externals]/node:buffer [external] (node:buffer, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}}),
"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/path [external] (path, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/url [external] (url, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/assert [external] (assert, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}}),
"[externals]/tty [external] (tty, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}}),
"[externals]/os [external] (os, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[project]/src/lib/gemini.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "aisummarizeCommit": (()=>aisummarizeCommit),
    "generateEmbedding": (()=>generateEmbedding),
    "summariseCode": (()=>summariseCode)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@google/generative-ai/dist/index.mjs [app-route] (ecmascript)");
;
const genAI = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GoogleGenerativeAI"](process.env.GEMINI_API);
const model = genAI.getGenerativeModel({
    model: 'gemini-1.5-flash'
});
const aisummarizeCommit = async (diff)=>{
    const response = await model.generateContent([
        `You are an expert programmer, and you are trying to summarize a git diff.

Reminders about the git diff format:
For every file, there are a few metadata lines, like (for example):
\`\`\`
diff --git a/lib/index.js b/lib/index.js
index aadf691..bfef603 100644
--- a/lib/index.js
+++ b/lib/index.js
\`\`\`
This means that \`lib/index.js\` was modified in this commit. Note that this is only an example.
Then there is a specifier of the lines that were modified.

A line starting with \`+\` means it was added.
A line that starting with \`-\` means that line was deleted.
A line that does not start with \`+\` nor \`-\` is code given for context better understanding.

It is not part of the diff.

[...]

EXAMPLE SUMMARY COMMENTS:
\`\`\`
* Raised the amount of returned recordings from \`10\` to \`100\` [packages/server/recordings_api.ts], [packages/server/constants.ts]
* Fixed a typo in the github action name [.github/workflows/gpt-commit-summarizer.yml]
* Moved the \`octokit\` initialization to a separate file [src/octokit.ts], [src/index.ts]
* Added an OpenAI API for completions [packages/utils/apis/openai.ts]
* Lowered numeric tolerance for test files
\`\`\`
Most commits will have less comments than this examples list.
The last comment does not include the file names,
because there were more than two relevant files in the hypothetical commit.
Do not include parts of the example in your summary.
It is given only as an example of appropriate comments.

Please summarise the following diff file: \n\n${diff},`
    ]);
    return response.response.text();
};
async function summariseCode(doc) {
    try {
        console.log("getting summary for ", doc.metadata.source);
        const code = doc.pageContent.slice(0, 10000);
        const response = await model.generateContent([
            `You are an intelligent senior software engineer who specializes in onboarding junior software engineers into projects`,
            `You are onboarding a junior software engineer and explaining to them the purpose of the ${doc.metadata.source} file`,
            `here is the code:
    ---
      ${code}
      ---
        Give a summary no more than 100 words of the code above`
        ]);
        return response.response.text();
    } catch (error) {
        console.log(error);
        return "Unable to generate a summary for this code.";
    }
}
async function generateEmbedding(summary) {
    const model = genAI.getGenerativeModel({
        model: "text-embedding-004"
    });
    const result = await model.embedContent(summary);
    const embedding = result.embedding;
    return embedding.values;
}
}}),
"[project]/src/lib/github.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getCommitHashes": (()=>getCommitHashes),
    "octokit": (()=>octokit),
    "pollCommits": (()=>pollCommits)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$octokit$2f$dist$2d$bundle$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/octokit/dist-bundle/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gemini$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/gemini.ts [app-route] (ecmascript)");
;
;
;
;
const octokit = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$octokit$2f$dist$2d$bundle$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Octokit"]({
    auth: process.env.GITHUB_TOKEN
});
const githubUrl = "https://github.com/Ashuthosh0/abap-LLM";
const getCommitHashes = async (githubUrl)=>{
    const [owner, repo] = githubUrl.split('/').slice(-2);
    if (!owner || !repo) {
        throw new Error("Invalid github url");
    }
    const { data } = await octokit.rest.repos.listCommits({
        owner,
        repo
    });
    const sortedCommits = data.sort((a, b)=>new Date(b.commit.author.date).getTime() - new Date(a.commit.author.date).getTime());
    return sortedCommits.slice(0, 15).map((commit)=>({
            commitHash: commit.sha,
            commitAuthorName: commit.commit?.author?.name ?? "",
            commitMessage: commit.commit.message ?? "",
            commitAuthorAvatar: commit?.author?.avatar_url ?? "",
            commitDate: commit.commit?.author?.date ?? ""
        }));
};
const pollCommits = async (projectId)=>{
    const { project, githubUrl } = await fetchProjectGithubUrl(projectId);
    const commitHashes = await getCommitHashes(githubUrl);
    const unprocessedCommits = await filterUnprocessedCommits(projectId, commitHashes);
    const summaryResponses = await Promise.allSettled(unprocessedCommits.map((commit)=>{
        return summarizeCommit(githubUrl, commit.commitHash);
    }));
    const summaries = summaryResponses.map((Responses)=>{
        if (Responses.status === "fulfilled") {
            return Responses.value;
        }
        return "";
    });
    const commit = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].commit.createMany({
        data: summaries.map((summary, index)=>{
            console.log(`processing commit ${index}`);
            return {
                projectId: projectId,
                commitHash: unprocessedCommits[index].commitHash,
                commitMessage: unprocessedCommits[index].commitMessage,
                commitAuthorName: unprocessedCommits[index].commitAuthorName,
                commitAuthorAvatar: unprocessedCommits[index].commitAuthorAvatar,
                commitDate: unprocessedCommits[index].commitDate,
                summary
            };
        })
    });
    return unprocessedCommits;
};
async function fetchProjectGithubUrl(projectId) {
    const project = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].project.findUnique({
        where: {
            id: projectId
        },
        select: {
            githubUrl: true
        }
    });
    if (!project?.githubUrl) {
        throw new Error("Project has no github url");
    }
    return {
        project,
        githubUrl: project.githubUrl
    };
}
async function filterUnprocessedCommits(projectId, commitHashes) {
    const processedCommits = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].commit.findMany({
        where: {
            projectId
        }
    });
    const unprocessedCommits = commitHashes.filter((commit)=>!processedCommits.some((processedCommit)=>processedCommit.commitHash === commit.commitHash));
    return unprocessedCommits;
}
async function summarizeCommit(githubUrl, commitHash) {
    const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].get(`${githubUrl}/commit/${commitHash}.diff`, {
        headers: {
            Accept: 'application/vnd.github.v3.diff'
        }
    });
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gemini$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["aisummarizeCommit"])(data || "");
}
}}),
"[project]/src/lib/github-loader.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "checkCredits": (()=>checkCredits),
    "indexGithubRepo": (()=>indexGithubRepo),
    "loadGithubRepo": (()=>loadGithubRepo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$community$2f$document_loaders$2f$web$2f$github$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@langchain/community/document_loaders/web/github.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$community$2f$dist$2f$document_loaders$2f$web$2f$github$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@langchain/community/dist/document_loaders/web/github.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gemini$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/gemini.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$octokit$2f$dist$2d$bundle$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/octokit/dist-bundle/index.js [app-route] (ecmascript) <locals>");
;
;
;
;
const getFileCount = async (path, octokit, githubOwner, githubRepo, acc = 0)=>{
    const { data } = await octokit.rest.repos.getContent({
        owner: githubOwner,
        repo: githubRepo,
        path
    });
    if (!Array.isArray(data) && data.type === 'file') {
        return acc + 1;
    }
    if (Array.isArray(data)) {
        let fileCount = 0;
        const directories = [];
        for (const item of data){
            if (item.type === 'dir') {
                directories.push(item.path);
            } else {
                fileCount++;
            }
        }
        if (directories.length > 0) {
            const directoryCounts = await Promise.all(directories.map((dirPath)=>getFileCount(dirPath, octokit, githubOwner, githubRepo, 0)));
            fileCount += directoryCounts.reduce((acc, count)=>acc + count, 0);
        }
        return acc + fileCount;
    }
    return acc;
};
const checkCredits = async (githubUrl, githubToken)=>{
    const octokit = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$octokit$2f$dist$2d$bundle$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Octokit"]({
        auth: githubToken
    });
    const githubOwner = githubUrl.split('/')[3];
    const githubRepo = githubUrl.split('/')[4];
    if (!githubOwner || !githubRepo) {
        return 0;
    }
    const fileCount = await getFileCount('', octokit, githubOwner, githubRepo, 0);
    return fileCount;
};
const loadGithubRepo = async (githubUrl, githubToken)=>{
    const loader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$langchain$2f$community$2f$dist$2f$document_loaders$2f$web$2f$github$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GithubRepoLoader"](githubUrl, {
        accessToken: githubToken || '',
        branch: 'main',
        ignoreFiles: [
            // Package manager lock files
            'package-lock.json',
            'yarn.lock',
            'pnpm-lock.yaml',
            'bun.lockb',
            // Node modules folder
            'node_modules/',
            // Build output folders
            'dist/',
            'build/',
            'out/',
            'coverage/',
            // Environment files
            '.env',
            '.env.local',
            '.env.development',
            '.env.test',
            '.env.production',
            // Logs
            'npm-debug.log',
            'yarn-debug.log',
            'yarn-error.log',
            // OS-specific files
            '.DS_Store',
            'Thumbs.db',
            // Editor directories and files
            '.vscode/',
            '.idea/',
            '*.suo',
            '*.ntvs*',
            '*.njsproj',
            '*.sln',
            '*.swp',
            // Temporary files
            '*.tmp',
            '*.temp',
            '*.bak',
            '*.backup',
            // Misc
            '.cache/',
            '.parcel-cache/',
            '.next/',
            '.nuxt/'
        ],
        recursive: true,
        unknown: 'warn',
        maxConcurrency: 5
    });
    const docs = await loader.load();
    return docs;
};
const indexGithubRepo = async (projectId, githubUrl, githubToken)=>{
    const docs = await loadGithubRepo(githubUrl, githubToken);
    console.log(docs);
    const allEmbeddings = await generateEmbeddings(docs);
    await Promise.allSettled(allEmbeddings.map(async (embedding, index)=>{
        console.log(`processing ${index} of ${allEmbeddings.length}`);
        if (!embedding) return;
        const sourceCodeEmbedding = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].sourceCodeEmbedding.create({
            data: {
                summary: embedding.summary,
                sourceCode: embedding.sourceCode,
                fileName: embedding.filename,
                projectId
            }
        });
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].$executeRaw`
    UPDATE "SourceCodeEmbedding"
    SET "summaryEmbedding" = ${embedding.embedding} :: vector
    WHERE "id" = ${sourceCodeEmbedding.id}
    `;
    }));
};
const generateEmbeddings = async (docs)=>{
    return await Promise.all(docs.map(async (doc)=>{
        const summary = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gemini$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["summariseCode"])(doc);
        const embedding = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gemini$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateEmbedding"])(summary);
        return {
            summary,
            embedding,
            sourceCode: JSON.parse(JSON.stringify(doc.pageContent)),
            filename: doc.metadata.source
        };
    }));
};
}}),
"[project]/src/server/api/routers/project.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "projectRouter": (()=>projectRouter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$v3$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/dist/v3/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/api/trpc.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/github.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2d$loader$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/github-loader.ts [app-route] (ecmascript)");
;
;
;
;
const projectRouter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createTRPCRouter"])({
    createProject: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$v3$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$v3$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
        githubUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$v3$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
        githubToken: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$v3$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().optional()
    })).mutation(async ({ ctx, input })=>{
        const project = await ctx.db.project.create({
            data: {
                githubUrl: input.githubUrl,
                name: input.name,
                UserToProjects: {
                    create: {
                        userId: ctx.user.userId
                    }
                }
            }
        });
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2d$loader$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["indexGithubRepo"])(project.id, input.githubUrl, input.githubToken);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pollCommits"])(project.id);
        return project;
    }),
    getProjects: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].query(async ({ ctx })=>{
        return await ctx.db.project.findMany({
            where: {
                UserToProjects: {
                    some: {
                        userId: ctx.user.userId
                    }
                },
                deletedAt: null
            }
        });
    }),
    getCommits: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$v3$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        projectId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$v3$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string()
    })).query(async ({ ctx, input })=>{
        return await ctx.db.commit.findMany({
            where: {
                projectId: input.projectId
            }
        });
    }),
    saveAnswer: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$v3$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        projectId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$v3$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
        question: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$v3$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
        answer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$v3$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
        filesReferences: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$v3$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].any()
    })).mutation(async ({ ctx, input })=>{
        return await ctx.db.question.create({
            data: {
                answer: input.answer,
                filesReferences: input.filesReferences,
                question: input.question,
                userId: ctx.user.userId,
                projectId: input.projectId
            }
        });
    }),
    getQuestions: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$v3$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        projectId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$v3$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string()
    })).query(async ({ ctx, input })=>{
        return await ctx.db.question.findMany({
            where: {
                projectId: input.projectId
            },
            include: {
                user: true
            },
            orderBy: {
                createdAt: 'desc'
            }
        });
    }),
    uploadMeeting: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$v3$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        projectId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$v3$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
        meetingUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$v3$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
        name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$v3$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string()
    })).mutation(async ({ ctx, input })=>{
        const meeting = await ctx.db.meeting.create({
            data: {
                meetingUrl: input.meetingUrl,
                projectId: input.projectId,
                name: input.name,
                status: "PROCESSING"
            }
        });
        return meeting;
    }),
    getMeetings: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$v3$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        projectId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$v3$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string()
    })).query(async ({ ctx, input })=>{
        return await ctx.db.meeting.findMany({
            where: {
                projectId: input.projectId
            },
            include: {
                issues: true
            }
        });
    }),
    deleteMeeting: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$v3$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        meetingId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$v3$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string()
    })).mutation(async ({ ctx, input })=>{
        return await ctx.db.meeting.delete({
            where: {
                id: input.meetingId
            }
        });
    }),
    getMeetingById: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$v3$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        meetingId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$v3$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string()
    })).query(async ({ ctx, input })=>{
        return await ctx.db.meeting.findUnique({
            where: {
                id: input.meetingId
            },
            include: {
                issues: true
            }
        });
    }),
    archiveProject: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$v3$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        projectId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$v3$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string()
    })).mutation(async ({ ctx, input })=>{
        return await ctx.db.project.update({
            where: {
                id: input.projectId
            },
            data: {
                deletedAt: new Date()
            }
        });
    }),
    getTeamMembers: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$v3$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        projectId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$v3$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string()
    })).query(async ({ ctx, input })=>{
        return await ctx.db.userToProject.findMany({
            where: {
                projectId: input.projectId
            },
            include: {
                user: true
            }
        });
    }),
    getMyCredits: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].query(async ({ ctx })=>{
        return await ctx.db.user.findUnique({
            where: {
                id: ctx.user.userId
            },
            select: {
                credits: true
            }
        });
    }),
    check_Credits: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["protectedProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$v3$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        githubUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$v3$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
        githubToken: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$dist$2f$v3$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().optional()
    })).mutation(async ({ ctx, input })=>{
        const fileCount = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$github$2d$loader$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkCredits"])(input.githubUrl, input.githubToken);
        const userCredits = await ctx.db.user.findUnique({
            where: {
                id: ctx.user.userId
            },
            select: {
                credits: true
            }
        });
        return {
            fileCount,
            userCredits: userCredits?.credits || 0
        };
    })
});
}}),
"[project]/src/server/api/root.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "appRouter": (()=>appRouter),
    "createCaller": (()=>createCaller)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/api/trpc.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$api$2f$routers$2f$project$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/api/routers/project.ts [app-route] (ecmascript)");
;
;
const appRouter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createTRPCRouter"])({
    project: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$api$2f$routers$2f$project$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["projectRouter"]
});
const createCaller = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createCallerFactory"])(appRouter);
}}),
"[project]/src/app/api/trpc/[trpc]/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GET": (()=>handler),
    "POST": (()=>handler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$adapters$2f$fetch$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@trpc/server/dist/adapters/fetch/index.mjs [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$adapters$2f$fetch$2f$fetchRequestHandler$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@trpc/server/dist/adapters/fetch/fetchRequestHandler.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$api$2f$root$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/api/root.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/api/trpc.ts [app-route] (ecmascript)");
;
;
;
;
/**
 * This wraps the `createTRPCContext` helper and provides the required context for the tRPC API when
 * handling a HTTP request (e.g. when you make requests from Client Components).
 */ const createContext = async (req)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$api$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createTRPCContext"])({
        headers: req.headers
    });
};
const handler = (req)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$adapters$2f$fetch$2f$fetchRequestHandler$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetchRequestHandler"])({
        endpoint: "/api/trpc",
        req,
        router: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$api$2f$root$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["appRouter"],
        createContext: ()=>createContext(req),
        onError: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NODE_ENV === "development" ? ({ path, error, input })=>{
            console.error(`❌ tRPC failed on ${path ?? "<no-path>"}:`, error);
            if (input) {
                console.error("Input that caused the error:", input);
            }
        } : undefined
    });
;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__bbe299a7._.js.map