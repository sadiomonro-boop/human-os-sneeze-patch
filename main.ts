import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "v3.7.2: fixed a bug where sneezing shut both eyes for 0.4 seconds, even while driving at 70 mph.";

// The gate allows 1-160 characters; refuse to ship an over-long line.
if (LINE.length > 160) {
  throw new Error(`patch note is ${LINE.length} characters, over the 160 limit`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
