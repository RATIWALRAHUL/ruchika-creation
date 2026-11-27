// Usage: node scripts/optimize-images.mjs [--dry]
// Re-encodes /public/images files over 1 MB. Originals are copied to .image-backup/ first (gitignored).
// Never upscales; downsizes only when width > MAX_W; keeps format (JPEG stays JPEG, PNG stays PNG w/ alpha); keeps a file only if it got smaller. Idempotent.
import fs from "fs";
import path from "path";
import sharp from "sharp";

const ROOT = "public/images", BACKUP = ".image-backup", MIN_BYTES = 1_000_000, MAX_W = 1600;
const dry = process.argv.includes("--dry");
const files = fs.readdirSync(ROOT, { recursive: true }).map((f) => path.join(ROOT, f)).filter((f) => /\.(jpe?g|png)$/i.test(f));
let before = 0, after = 0, n = 0;
for (const f of files) {
  const size = fs.statSync(f).size;
  if (size <= MIN_BYTES) continue;
  const input = fs.readFileSync(f);
  const meta = await sharp(input).metadata();
  // alpha counts as real only if some pixel is not fully opaque; libvips may drop an all-opaque channel on save
  const realAlpha = meta.hasAlpha && (await sharp(input).stats()).channels[3].min < 255;
  let p = sharp(input).rotate();
  if (meta.width > MAX_W) p = p.resize({ width: MAX_W, withoutEnlargement: true });
  if (meta.hasAlpha) p = p.ensureAlpha();
  const out = await (meta.format === "png"
    ? p.png({ compressionLevel: 9, adaptiveFiltering: true, effort: 10 })
    : p.jpeg({ quality: 85, mozjpeg: true })).toBuffer();
  if (out.length >= size * 0.95) { console.log("skip", f, size, "->", out.length); continue; }
  const o = await sharp(out).metadata();
  if (meta.width > MAX_W ? Math.abs(o.width / o.height - meta.width / meta.height) > 0.005 : o.width !== meta.width || (realAlpha && !o.hasAlpha)) throw new Error("integrity " + f);
  console.log(dry ? "would" : "opt", f, size, "->", out.length);
  before += size; after += out.length; n++;
  if (dry) continue;
  const b = path.join(BACKUP, f);
  if (!fs.existsSync(b)) { fs.mkdirSync(path.dirname(b), { recursive: true }); fs.copyFileSync(f, b); }
  fs.writeFileSync(f, out);
}
console.log({ files: n, before, after, saved: before - after });
