// The Vacuum's Alibi — u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7
//
// Writes one line (the excuse a robot vacuum gives for missing a spot)
// to /output/entry.txt. Deterministic: the same bytes on every run.
// No network, no reads outside this repository.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My cliff sensor classified that spot as a small canyon. I am not paid to die for dust.";

const MAX_CHARS = 200;

// Validate the entry the way the sealed gate does: 1-200 characters,
// single line, not only whitespace. Length counts code points, not UTF-16
// units, so non-ASCII characters are measured the way the gate measures.
const chars = Array.from(LINE);
if (chars.length === 0 || LINE.trim().length === 0) {
  throw new Error("entry line is empty");
}
if (chars.length > MAX_CHARS) {
  throw new Error(`entry line is ${chars.length} characters, over the 200 limit`);
}
if (LINE.includes("\n")) {
  throw new Error("entry line must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
