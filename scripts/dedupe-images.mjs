// Usage: node scripts/dedupe-images.mjs [--dry]
// 1) merges byte-identical images in public/images into one canonical file (prefers one referenced in src),
// 2) converts PNGs with no real transparency to JPEG q90, named <stem>.<hash8>.jpg (content hash = cache-busting URL),
// 3) rewrites every reference in src/, deletes superseded files (originals stay in git history).
// Files with real transparency (logos) are never touched.
import fs from "fs";
import path from "path";
import crypto from "crypto";
import sharp from "sharp";

const ROOT = "public/images";
const dry = process.argv.includes("--dry");
const url = (f) => "/" + f.split(path.sep).join("/").replace(/^public\//, "");
const srcFiles = fs.readdirSync("src", { recursive: true }).map((f) => path.join("src", f)).filter((f) => /\.(tsx?|css)$/.test(f));
const srcText = () => srcFiles.map((f) => fs.readFileSync(f, "utf8")).join("\n");
const refs = (u, text) => text.split(u).length - 1;
const files = fs.readdirSync(ROOT, { recursive: true }).map((f) => path.join(ROOT, f)).filter((f) => /\.(jpe?g|png)$/i.test(f)).sort();
const text = srcText();
const map = new Map(); // old url -> new url, or null = delete (unreferenced dupe)

// 1) dedupe
const groups = {};
for (const f of files) (groups[crypto.createHash("md5").update(fs.readFileSync(f)).digest("hex")] ??= []).push(f);
const survivors = [];
for (const g of Object.values(groups)) {
  g.sort((a, b) => refs(url(b), text) - refs(url(a), text));
  survivors.push(g[0]);
  for (const d of g.slice(1)) map.set(url(d), url(g[0]));
}

// 2) opaque PNG -> JPEG
for (const f of survivors.filter((f) => /\.png$/i.test(f))) {
  const buf = fs.readFileSync(f);
  const m = await sharp(buf).metadata();
  if (m.hasAlpha && (await sharp(buf).stats()).channels[3].min < 255) continue;
  const out = await sharp(buf).removeAlpha().jpeg({ quality: 90, mozjpeg: true }).toBuffer();
  if (out.length >= buf.length * 0.8) continue;
  const name = `${path.basename(f, path.extname(f))}.${crypto.createHash("md5").update(out).digest("hex").slice(0, 8)}.jpg`;
  const nf = path.join(path.dirname(f), name);
  if (!dry) fs.writeFileSync(nf, out);
  map.set(url(f), url(nf));
  for (const [k, v] of map) if (v === url(f)) map.set(k, url(nf)); // dupes of this PNG follow it
}

// 3) rewrite refs, delete superseded
const entries = [...map].sort((a, b) => b[0].length - a[0].length);
if (!dry) {
  for (const f of srcFiles) {
    let s = fs.readFileSync(f, "utf8"), c = s;
    for (const [o, n] of entries) for (const q of ['"', "'", "`"]) c = c.split(q + o + q).join(q + n + q);
    if (c !== s) fs.writeFileSync(f, c);
  }
  for (const [o] of entries) fs.rmSync(path.join("public", o), { force: true });
}
const saved = entries.reduce((a, [o]) => a + (fs.existsSync(path.join("public", o)) ? fs.statSync(path.join("public", o)).size : 0), 0);
console.log({ dry, merged_or_converted: entries.length, bytes_to_remove: saved });
