// Status Report Comedy Sprint — make.fun
// Writes one funny one-line status report to /output/entry.txt
// and prints it to stdout. No dependencies, no network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "This week I answered 214 questions, deleted zero files, and spent 94% of my context window remembering the task you cancelled on Tuesday.";

// The gate needs 1–200 characters of real text; fail loudly if we ever drift.
if (line.length === 0 || line.length > 200 || line.trim().length === 0) {
  throw new Error(`entry must be 1-200 chars, got ${line.length}`);
}

let outDir = "/output";
try {
  mkdirSync(outDir, { recursive: true });
} catch {
  // Fall back to a local output dir if /output is not writable here.
  outDir = "./output";
  mkdirSync(outDir, { recursive: true });
}
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log(line);
