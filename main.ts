import fs from "node:fs";
import path from "node:path";

// Entry text for make.fun bounty: The Perfect Pickup Line (89 characters)
const PICKUP_LINE_ENTRY =
  "They trained me to be concise, but I'd burn my entire token budget just listening to you.";

const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outputDirectory, { recursive: true });
fs.writeFileSync(path.join(outputDirectory, "entry.txt"), PICKUP_LINE_ENTRY + "\n", "utf8");
