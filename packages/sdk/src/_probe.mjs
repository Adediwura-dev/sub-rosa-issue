// probe
import fs from "node:fs";
const p = "packages/sdk/src/conservation.ts";
const text = fs.readFileSync(p, "utf8");
const i = text.indexOf("cursor instanceof Buffer && prevCursor instanceof Buffer");
if (i < 0) { console.log("not found"); process.exit(1); }
const start = Math.max(0, i - 400);
const end = Math.min(text.length, i + 900);
process.stdout.write(text.slice(start, end));
