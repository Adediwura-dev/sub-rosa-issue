import fs from "node:fs";
const p = "packages/sdk/src/client.ts";
const text = fs.readFileSync(p, "utf8");
let idx = 0;
let count = 0;
const cand = "this.#requireSource(\"bidder\");";
while (true) {
  const i = text.indexOf(cand, idx);
  if (i < 0) break;
  count += 1;
  const start = Math.max(0, i - 80);
  const end = Math.min(text.length, i + 160);
  process.stdout.write(`OCC${count}@${i}:\n`);
  process.stdout.write(text.slice(start, end));
  process.stdout.write("\n\n");
  idx = i + cand.length;
}
console.log("TOTAL", count);
