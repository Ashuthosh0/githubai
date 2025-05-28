module.exports = {

"[externals]/node:fs [external] (node:fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:fs", () => require("node:fs"));

module.exports = mod;
}}),
"[externals]/node:path [external] (node:path, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}}),
"[project]/node_modules/@clerk/nextjs/dist/esm/chunk-BUSYA2B4.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "__commonJS": (()=>__commonJS)
});
var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod)=>function __require() {
        return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
            exports: {}
        }).exports, mod), mod.exports;
    };
;
 //# sourceMappingURL=chunk-BUSYA2B4.js.map
}}),
"[project]/node_modules/@clerk/nextjs/dist/esm/runtime/node/safe-node-apis.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$chunk$2d$BUSYA2B4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/chunk-BUSYA2B4.js [app-rsc] (ecmascript)");
;
var require_safe_node_apis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$chunk$2d$BUSYA2B4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["__commonJS"])({
    "src/runtime/node/safe-node-apis.js" (exports, module) {
        const { existsSync, writeFileSync, readFileSync, appendFileSync, mkdirSync, rmSync } = __turbopack_context__.r("[externals]/node:fs [external] (node:fs, cjs)");
        const path = __turbopack_context__.r("[externals]/node:path [external] (node:path, cjs)");
        const fs = {
            existsSync,
            writeFileSync,
            readFileSync,
            appendFileSync,
            mkdirSync,
            rmSync
        };
        const cwd = ()=>process.cwd();
        module.exports = {
            fs,
            path,
            cwd
        };
    }
});
const __TURBOPACK__default__export__ = require_safe_node_apis();
 //# sourceMappingURL=safe-node-apis.js.map
}}),
"[project]/node_modules/@clerk/nextjs/dist/esm/server/fs/utils.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "nodeCwdOrThrow": (()=>nodeCwdOrThrow),
    "nodeFsOrThrow": (()=>nodeFsOrThrow),
    "nodePathOrThrow": (()=>nodePathOrThrow)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$runtime$2f$node$2f$safe$2d$node$2d$apis$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/runtime/node/safe-node-apis.js [app-rsc] (ecmascript)");
;
;
const throwMissingFsModule = (module)=>{
    throw new Error(`Clerk: ${module} is missing. This is an internal error. Please contact Clerk's support.`);
};
const nodeFsOrThrow = ()=>{
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$runtime$2f$node$2f$safe$2d$node$2d$apis$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].fs) {
        throwMissingFsModule("fs");
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$runtime$2f$node$2f$safe$2d$node$2d$apis$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].fs;
};
const nodePathOrThrow = ()=>{
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$runtime$2f$node$2f$safe$2d$node$2d$apis$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].path) {
        throwMissingFsModule("path");
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$runtime$2f$node$2f$safe$2d$node$2d$apis$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].path;
};
const nodeCwdOrThrow = ()=>{
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$runtime$2f$node$2f$safe$2d$node$2d$apis$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].cwd) {
        throwMissingFsModule("cwd");
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$runtime$2f$node$2f$safe$2d$node$2d$apis$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].cwd;
};
;
 //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/@clerk/nextjs/dist/esm/server/keyless-node.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createOrReadKeyless": (()=>createOrReadKeyless),
    "removeKeyless": (()=>removeKeyless),
    "safeParseClerkFile": (()=>safeParseClerkFile)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$createClerkClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/server/createClerkClient.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$fs$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/server/fs/utils.js [app-rsc] (ecmascript)");
;
;
;
const CLERK_HIDDEN = ".clerk";
const CLERK_LOCK = "clerk.lock";
function updateGitignore() {
    const { existsSync, writeFileSync, readFileSync, appendFileSync } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$fs$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nodeFsOrThrow"])();
    const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$fs$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nodePathOrThrow"])();
    const cwd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$fs$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nodeCwdOrThrow"])();
    const gitignorePath = path.join(cwd(), ".gitignore");
    if (!existsSync(gitignorePath)) {
        writeFileSync(gitignorePath, "");
    }
    const gitignoreContent = readFileSync(gitignorePath, "utf-8");
    const COMMENT = `# clerk configuration (can include secrets)`;
    if (!gitignoreContent.includes(CLERK_HIDDEN + "/")) {
        appendFileSync(gitignorePath, `
${COMMENT}
/${CLERK_HIDDEN}/
`);
    }
}
const generatePath = (...slugs)=>{
    const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$fs$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nodePathOrThrow"])();
    const cwd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$fs$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nodeCwdOrThrow"])();
    return path.join(cwd(), CLERK_HIDDEN, ...slugs);
};
const _TEMP_DIR_NAME = ".tmp";
const getKeylessConfigurationPath = ()=>generatePath(_TEMP_DIR_NAME, "keyless.json");
const getKeylessReadMePath = ()=>generatePath(_TEMP_DIR_NAME, "README.md");
let isCreatingFile = false;
function safeParseClerkFile() {
    const { readFileSync } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$fs$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nodeFsOrThrow"])();
    try {
        const CONFIG_PATH = getKeylessConfigurationPath();
        let fileAsString;
        try {
            fileAsString = readFileSync(CONFIG_PATH, {
                encoding: "utf-8"
            }) || "{}";
        } catch  {
            fileAsString = "{}";
        }
        return JSON.parse(fileAsString);
    } catch  {
        return void 0;
    }
}
const lockFileWriting = ()=>{
    const { writeFileSync } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$fs$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nodeFsOrThrow"])();
    isCreatingFile = true;
    writeFileSync(CLERK_LOCK, // In the rare case, the file persists give the developer enough context.
    "This file can be deleted. Please delete this file and refresh your application", {
        encoding: "utf8",
        mode: "0777",
        flag: "w"
    });
};
const unlockFileWriting = ()=>{
    const { rmSync } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$fs$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nodeFsOrThrow"])();
    try {
        rmSync(CLERK_LOCK, {
            force: true,
            recursive: true
        });
    } catch  {}
    isCreatingFile = false;
};
const isFileWritingLocked = ()=>{
    const { existsSync } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$fs$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nodeFsOrThrow"])();
    return isCreatingFile || existsSync(CLERK_LOCK);
};
async function createOrReadKeyless() {
    const { writeFileSync, mkdirSync } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$fs$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nodeFsOrThrow"])();
    if (isFileWritingLocked()) {
        return null;
    }
    lockFileWriting();
    const CONFIG_PATH = getKeylessConfigurationPath();
    const README_PATH = getKeylessReadMePath();
    mkdirSync(generatePath(_TEMP_DIR_NAME), {
        recursive: true
    });
    updateGitignore();
    const envVarsMap = safeParseClerkFile();
    if ((envVarsMap == null ? void 0 : envVarsMap.publishableKey) && (envVarsMap == null ? void 0 : envVarsMap.secretKey)) {
        unlockFileWriting();
        return envVarsMap;
    }
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$createClerkClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClerkClientWithOptions"])({});
    const accountlessApplication = await client.__experimental_accountlessApplications.createAccountlessApplication().catch(()=>null);
    if (accountlessApplication) {
        writeFileSync(CONFIG_PATH, JSON.stringify(accountlessApplication), {
            encoding: "utf8",
            mode: "0777",
            flag: "w"
        });
        const README_NOTIFICATION = `
## DO NOT COMMIT
This directory is auto-generated from \`@clerk/nextjs\` because you are running in Keyless mode. Avoid committing the \`.clerk/\` directory as it includes the secret key of the unclaimed instance.
  `;
        writeFileSync(README_PATH, README_NOTIFICATION, {
            encoding: "utf8",
            mode: "0777",
            flag: "w"
        });
    }
    unlockFileWriting();
    return accountlessApplication;
}
function removeKeyless() {
    const { rmSync } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$fs$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nodeFsOrThrow"])();
    if (isFileWritingLocked()) {
        return void 0;
    }
    lockFileWriting();
    try {
        rmSync(generatePath(), {
            force: true,
            recursive: true
        });
    } catch  {}
    unlockFileWriting();
}
;
 //# sourceMappingURL=keyless-node.js.map
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__a66dbf48._.js.map