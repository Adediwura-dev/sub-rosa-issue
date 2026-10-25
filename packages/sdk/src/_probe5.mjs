import fs from "node:fs";
const p = "packages/sdk/src/client.ts";
const text = fs.readFileSync(p, "utf8");
let idx = 0;
let count = 0;
while (true) {
  const i = text.indexOf("this.#requireSource(\"bidder\");", idx);
  if (i < 0) break;
  count += 1;
  const start = Math.max(0, i - 160);
  const end = Math.min(text.length, i + 220);
  process.stdout.write(`====OCCURRENCE ${count} @${i}====\n`);
  process.stdout.write(text.slice(start, end));
  process.stdout.write("\n====END ${count}====\n\n\n");
  idx = i + 10;
}
console.log("TOTAL_OCCURRENCES", count, "\n");
const block = "return this.#preflight(\"commit\", () => {";
const bi = text.indexOf(block);
if (bi < 0) { console.log("commit block not found"); }
else {
  process.stdout.write("====COMMIT_BLOCK_START====\n");
  process.stdout.write(text.slice(bi, bi + 1200));
  process.stdout.write("\n====COMMIT_BLOCK_END====\n");
}
