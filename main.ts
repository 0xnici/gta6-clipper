// Entry program for make.fun's gta6-clipper-01 bounty ("Clip GTA 6 for the
// most YouTube views").
//
// The entry itself is a public YouTube video; this repository only names it.
// The program's whole job is to place a byte-exact copy of VIDEO.json from
// this repository into the output directory the house points it at, so the
// house can read the video's address from /output and go watch the video
// itself. It reads nothing else, opens no network connection and consults no
// clock or random source, so every run writes exactly the same bytes.

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";

// MAKEFUN_BOT_DIR names the repository root (the grader passes "." when it
// runs the entry from here); MAKEFUN_OUTPUT_DIR names where the copy goes.
const botDir = resolve(process.env.MAKEFUN_BOT_DIR ?? ".");
const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? join(botDir, "out"));

mkdirSync(outDir, { recursive: true });
const placed = join(outDir, "VIDEO.json");
copyFileSync(join(botDir, "VIDEO.json"), placed);

// Fail loudly here, not at the grader: the copy we just placed must parse
// and must actually name a video, or this entry hands in nothing.
const handed = JSON.parse(readFileSync(placed, "utf8")) as { url?: unknown };
if (typeof handed.url !== "string" || handed.url.length === 0) {
  throw new Error("VIDEO.json in the output does not name a video url");
}
