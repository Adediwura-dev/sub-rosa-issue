import fs from "node:fs";
const p = "packages/sdk/src/client.ts";
const text = fs.readFileSync(p, "utf8");
const needle = "async preflightCommit(params: CommitParams): Promise<PreflightResult<void>>";
const i = text.indexOf(needle);
if (i < 0) { console.log("needle not found"); process.exit(1); }
const start = Math.max(0, i - 60);
const end = Math.min(text.length, i + 1100);
process.stdout.write(text.slice(start, end));
