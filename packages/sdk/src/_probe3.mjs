import fs from "node:fs";
const p = "packages/sdk/src/client.ts";
const text = fs.readFileSync(p, "utf8");
const needle = "this.#requireSource(\"bidder\");";
let i = text.indexOf(needle);
if (i < 0) { console.log("bidder require not found"); process.exit(1); }
const start = Math.max(0, i - 10);
const end = Math.min(text.length, i + 60);
process.stdout.write(text.slice(start, end));
console.log("\n----\n");
i = text.indexOf("this.#requireSource(\"bidder\");", i + 10);
if (i < 0) { console.log("second bidder require not found"); process.exit(1); }
const start2 = Math.max(0, i - 10);
const end2 = Math.min(text.length, i + 60);
process.stdout.write(text.slice(start2, end2));
