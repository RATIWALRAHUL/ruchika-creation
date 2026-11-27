// Smoke test: every image referenced in src/data exists, is decodable, and is <= MAX bytes. Usage: node scripts/check-images.mjs
import fs from "fs";
import sharp from "sharp";
const MAX = 1_500_000;
const src = ["src/data/products.ts", "src/data/collections.ts"].map((f) => fs.readFileSync(f, "utf8")).join("\n");
const urls = [...new Set([...src.matchAll(/"(\/images\/[^"]+)"/g)].map((m) => m[1]))];
let bad = 0;
for (const u of urls) {
  const f = "public" + u;
  try {
    const { size } = fs.statSync(f);
    await sharp(f).metadata();
    if (size > MAX) throw new Error("over " + MAX + " bytes: " + size);
  } catch (e) { bad++; console.error("BAD", u, e.message); }
}
const ids = [...src.matchAll(/"id":\s*"([^"]+)"/g)].map((m) => m[1]);
console.log({ products: ids.length, uniqueIds: new Set(ids).size, imagesChecked: urls.length, bad });
process.exit(bad ? 1 : 0);
