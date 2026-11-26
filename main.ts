import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const line =
  "My sources are three tabs I half-read and one I invented. The invented one has the best formatting.";

// Gate: entry must be UTF-8 text of 1 to 200 characters.
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry length ${line.length} is outside 1-200 characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
