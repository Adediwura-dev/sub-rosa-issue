import fs from "node:fs";
const p = "packages/sdk/src/conservation.ts";
const text = fs.readFileSync(p, "utf8");
const startTag = "    if (cursor instanceof Buffer && prevCursor instanceof Buffer && cursor.equals(prevCursor))";
let i = text.indexOf(startTag, 0);
if (i < 0) { console.log("tag1 not found"); process.exit(1); }
process.stdout.write("====WINDOW1 START====\n");
process.stdout.write(text.slice(Math.max(0, i - 120), i + 700));
process.stdout.write("\n====WINDOW1 END====\n\n\n");
i = text.indexOf(startTag, i + startTag.length);
if (i < 0) { console.log("tag2 not found"); process.exit(1); }
process.stdout.write("====WINDOW2 START====\n");
process.stdout.write(text.slice(Math.max(0, i - 120), i + 700));
process.stdout.write("\n====WINDOW2 END====\n\n\n");
i = text.indexOf(startTag, i + startTag.length);
if (i < 0) { console.log("tag3 not found"); process.exit(1); }
process.stdout.write("====WINDOW3 START====\n");
process.stdout.write(text.slice(Math.max(0, i - 120), i + 700));
process.stdout.write("\n====WINDOW3 END====\n");
