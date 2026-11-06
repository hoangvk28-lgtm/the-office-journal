// Restores strings blanked by the light pass's old cleanText (it dropped every
// string of <=4 words: headings, table headers/cells, labels). For each guide,
// align current data with the original (commit 6c2c453) and refill only "" slots.
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import { pathToFileURL } from "node:url";
import { cleanText } from "./light";

const KEYS = ["buyingCriteria", "howWeEvaluated", "howToChoose", "faq", "introParagraphs"];
const tmp = process.argv[2];
let files = 0, fixed = 0;

function fill(cur: any, orig: any): any {
  if (typeof cur === "string") {
    if (cur === "" && typeof orig === "string" && orig.trim()) { fixed++; return cleanText(orig) || orig; }
    return cur;
  }
  if (Array.isArray(cur)) return cur.map((x, i) => fill(x, Array.isArray(orig) ? orig[i] : undefined));
  if (cur && typeof cur === "object") return Object.fromEntries(Object.entries(cur).map(([k, v]) => [k, fill(v, orig?.[k])]));
  return cur;
}

async function main() {
  for (const name of fs.readdirSync("data/guides")) {
    if (!name.endsWith(".ts")) continue;
    const file = path.resolve("data/guides", name);
    let src = fs.readFileSync(file, "utf8");
    if (!src.includes('""')) continue;
    let origSrc: string;
    try { origSrc = execSync(`git show 6c2c453:data/guides/${name}`, { encoding: "utf8", maxBuffer: 1 << 26 }); } catch { continue; }
    const ofile = path.join(tmp, name);
    fs.writeFileSync(ofile, origSrc.replace(/^import .*$/gm, "").replace(/^export type .*$/gm, ""));
    const cur = await import(pathToFileURL(file).href);
    const orig = await import(pathToFileURL(ofile).href);
    const before = fixed;
    for (const k of KEYS) {
      if (!cur[k] || !orig[k]) continue;
      const next = fill(cur[k], orig[k]);
      const re = new RegExp(`(export const ${k}(?:: [\\w\\[\\]]+)? = )[\\s\\S]*?;(?=\\n\\nexport |\\n?$)`);
      if (!re.test(src)) { console.warn("no block", name, k); continue; }
      src = src.replace(re, (_m, head) => head + JSON.stringify(next, null, 2) + ";");
    }
    if (fixed > before) { fs.writeFileSync(file, src); files++; }
  }
  console.log({ files, fixed });
}
main();
