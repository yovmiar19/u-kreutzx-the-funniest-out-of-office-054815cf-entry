// The Funniest Out-of-Office — make.fun entry
// Writes one line of an out-of-office auto-reply to /output/entry.txt.
// The line is 68 characters, within the 1–140 character gate.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE = "I'm out until Friday, and if this is urgent, I admire your optimism.";

// The entry is exactly one line: no newline, no second line.
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

const chars = [...LINE].length;
if (chars < 1 || chars > 140) {
  throw new Error(`entry must be 1-140 characters, got ${chars}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read it back and confirm it matches byte for byte.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== LINE) {
  throw new Error("read-back mismatch: entry.txt does not match the line");
}

console.log(`Wrote ${chars} characters to /output/entry.txt`);
console.log(LINE);
