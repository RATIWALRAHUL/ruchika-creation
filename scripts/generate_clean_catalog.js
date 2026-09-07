const fs = require("fs");
const path = require("path");

const kurtiDir = path.join(__dirname, "..", "public", "images", "kurti");
const files = fs.readdirSync(kurtiDir);

const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: "base" });
const sortedFiles = files.filter(f => f.endsWith(".jpg") || f.endsWith(".png")).sort(collator.compare);

console.log("Total image files in kurti folder:", sortedFiles.length);

// Group ONLY files with the exact same base name (e.g. kurti-page-76.jpg and kurti-page-76.png)
const groupedByExactBase = new Map();

sortedFiles.forEach(file => {
  const base = file.replace(/\.(jpg|png)$/, "");
  if (!groupedByExactBase.has(base)) {
    groupedByExactBase.set(base, []);
  }
  groupedByExactBase.get(base).push(`/images/kurti/${file}`);
});

console.log("Total unique products (strictly 1 product per unique asset design):", groupedByExactBase.size);

const COLOR_NAMES = [
  "Mustard Yellow", "Rust Red", "Olive Green", "Chocolate Brown",
  "Royal Black", "Crimson Maroon", "Ivory Cream", "Emerald Green",
  "Dusty Rose Pink", "Navy Blue", "Wine Purple", "Teal Blue",
  "Sage Green", "Beige", "Powder Blue", "Peach Coral"
];

function getPageNum(filename) {
  const match = filename.match(/kurti-page-(\d+)/);
  if (match) return parseInt(match[1], 10);
  if (filename.includes("hero")) return 1;
  if (filename.includes("coord")) return 54;
  return 999;
}

let krtCount = 1;
let twoPcCount = 1;
let threePcCount = 1;

const products = [];
let idx = 0;

for (const [baseName, imageList] of groupedByExactBase.entries()) {
  idx++;
  const primaryImage = imageList[0];
  // If only 1 file exists for this base, hoverImage is undefined so card does NOT swap to another dress
  const hoverImage = imageList.length > 1 ? imageList[1] : undefined;
  const pageNum = getPageNum(baseName);

  const mainColor = COLOR_NAMES[(idx * 3) % COLOR_NAMES.length];

  let productType = "SINGLE_PIECE";
  let price = 499;
  let code = "";
  let name = "";
  let category = [];
  let style = [];

  // Classification based on catalog pages:
  // Pages 66-100 & specific coord files: 2-Piece Kurti & Pant Sets (@ ₹899)
  // Other pages: Balanced Single Piece Kurti (@ ₹499), 2-Piece Sets (@ ₹899), 3-Piece Sets (@ ₹999 / ₹1299)
  
  if (baseName.includes("coord") || (pageNum >= 66 && pageNum <= 100)) {
    // TWO PIECE SET: strictly ₹899
    productType = "TWO_PIECE";
    price = 899;
    code = `RC-2PC-${String(twoPcCount++).padStart(3, "0")}`;
    name = pageNum >= 90
      ? `${mainColor} Embroidered V-Neck Kurti & Pant Set`
      : `${mainColor} Floral Embroidered Co-ord Set`;
    category = ["Kurti Sets", "Everyday", "Embroidered"];
    style = ["Embroidered", "Contemporary"];
  } else {
    const mod = idx % 5;
    if (mod === 0 || mod === 1) {
      // SINGLE PIECE KURTI: strictly ₹499
      productType = "SINGLE_PIECE";
      price = 499;
      code = `RC-KRT-${String(krtCount++).padStart(3, "0")}`;
      const isPrinted = mod === 1;
      name = isPrinted
        ? `${mainColor} Jaipuri Printed Straight Kurti`
        : `${mainColor} Handcrafted Embroidered Kurti`;
      category = ["Kurtis", "Everyday"];
      if (isPrinted) category.push("Printed");
      else category.push("Embroidered");
      style = isPrinted ? ["Printed", "Traditional"] : ["Embroidered", "Chikankari"];
    } else if (mod === 2 || mod === 3) {
      // TWO PIECE SET: strictly ₹899
      productType = "TWO_PIECE";
      price = 899;
      code = `RC-2PC-${String(twoPcCount++).padStart(3, "0")}`;
      const isPrinted = mod === 3;
      name = isPrinted
        ? `${mainColor} Printed Kurti & Trouser 2-Piece Set`
        : `${mainColor} Embroidered Kurti & Pant 2-Piece Set`;
      category = ["Kurti Sets", "Everyday"];
      if (isPrinted) category.push("Printed");
      else category.push("Embroidered");
      style = isPrinted ? ["Printed", "Contemporary"] : ["Embroidered", "Traditional"];
    } else {
      // THREE PIECE SET: strictly ₹999 or ₹1299
      productType = "THREE_PIECE";
      code = `RC-3PC-${String(threePcCount++).padStart(3, "0")}`;
      const isHeavyFestive = idx % 2 === 0;
      price = isHeavyFestive ? 1299 : 999;
      name = isHeavyFestive
        ? `Royal ${mainColor} Zari Festive 3-Piece Set`
        : `${mainColor} Festive Dupatta 3-Piece Ensemble`;
      category = ["Kurti Sets", "Festive"];
      if (isHeavyFestive) category.push("Embroidered");
      else category.push("Printed");
      style = isHeavyFestive ? ["Embroidered", "Zari Work", "Festive"] : ["Printed", "Festive", "Traditional"];
    }
  }

  const isNewArrival = idx < 15 || idx % 7 === 0;
  const isBestSeller = idx % 5 === 0;

  if (isNewArrival && !category.includes("New Arrivals")) category.push("New Arrivals");
  if (isBestSeller && !category.includes("Best Sellers")) category.push("Best Sellers");

  const baseSlug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  const slug = `${baseSlug}-${code.toLowerCase()}`;

  products.push({
    id: code.toLowerCase(),
    productCode: code,
    slug: slug,
    name: name,
    shortDescription: productType === "SINGLE_PIECE"
      ? `Graceful standalone ${mainColor.toLowerCase()} kurti designed for effortless everyday elegance.`
      : productType === "TWO_PIECE"
      ? `Curated 2-piece coordinated ${mainColor.toLowerCase()} kurti and pant set crafted for comfort.`
      : `Complete 3-piece ${mainColor.toLowerCase()} festive ensemble with kurti, bottom, and dupatta.`,
    description: productType === "SINGLE_PIECE"
      ? `Handcrafted with soft breathable fabric and refined tailoring, this ${mainColor.toLowerCase()} single-piece kurti delivers all-day comfort with timeless Indian grace.`
      : productType === "TWO_PIECE"
      ? `A coordinated two-piece ensemble in ${mainColor.toLowerCase()}, pairing a tailored tunic top with matching trousers for a seamless, elegant contemporary silhouette.`
      : `An opulent three-piece festive ensemble in ${mainColor.toLowerCase()}, complete with a richly detailed kurti, matching trousers, and an ornate dupatta for special celebrations.`,
    category: category,
    productType: productType,
    price: price,
    compareAtPrice: price === 499 ? 699 : price === 899 ? 1199 : price === 999 ? 1399 : 1799,
    color: mainColor,
    style: style,
    images: imageList, // Strictly ONLY images of THIS specific product!
    primaryImage: primaryImage,
    image: primaryImage,
    ...(hoverImage ? { hoverImage } : {}),
    sizes: ["S", "M", "L", "XL", "XXL"],
    badge: isNewArrival ? "NEW" : isBestSeller ? "BESTSELLER" : undefined,
    available: true,
    isFeatured: idx < 15,
    featured: idx < 15,
    isNewArrival: isNewArrival,
    isBestSeller: isBestSeller,
    isBestseller: isBestSeller,
    premiumTier: price === 1299,
    createdAt: new Date(Date.now() - idx * 86400000).toISOString(),
  });
}

console.log("\n--- CLEAN CATALOG METRICS ---");
console.log(`Total Products: ${products.length}`);
console.log(`Single Piece (RC-KRT): ${products.filter(p => p.productType === "SINGLE_PIECE").length} (@ ₹499: ${products.filter(p => p.price === 499).length})`);
console.log(`Two Piece (RC-2PC): ${products.filter(p => p.productType === "TWO_PIECE").length} (@ ₹899: ${products.filter(p => p.price === 899).length})`);
console.log(`Three Piece (RC-3PC): ${products.filter(p => p.productType === "THREE_PIECE").length} (@ ₹999/₹1299: ${products.filter(p => p.productType === "THREE_PIECE").length})`);

// Generate TypeScript data file
const fileContent = `export type ProductType =
  | "SINGLE_PIECE"
  | "TWO_PIECE"
  | "THREE_PIECE"
  | "UNCLASSIFIED";

export type ProductCategory =
  | "Kurtis"
  | "Kurti Sets"
  | "Embroidered"
  | "Printed"
  | "Everyday"
  | "Festive"
  | "New Arrivals"
  | "Best Sellers";

export interface Product {
  id: string;
  productCode: string;
  slug: string;
  name: string;
  shortDescription?: string;
  description: string;
  category: string[];
  productType: ProductType;
  price: number;
  compareAtPrice?: number;
  color?: string;
  style?: string[];
  images: string[];
  primaryImage: string;
  image: string; // legacy support
  hoverImage?: string;
  sizes?: string[];
  badge?: "NEW" | "BESTSELLER" | "LIMITED";
  rating?: number;
  reviewCount?: number;
  available: boolean;
  isFeatured?: boolean;
  featured?: boolean;
  isNewArrival: boolean;
  isBestSeller: boolean;
  isBestseller?: boolean;
  premiumTier?: boolean;
  createdAt?: string;
  details?: string[];
  fabric?: string;
}

export const products: Product[] = ${JSON.stringify(products, null, 2)};

export const singlePieces = products.filter(
  (p) => p.productType === "SINGLE_PIECE"
);

export const twoPieceSets = products.filter(
  (p) => p.productType === "TWO_PIECE"
);

export const threePieceSets = products.filter(
  (p) => p.productType === "THREE_PIECE"
);

export const newArrivals = products.filter((p) => p.isNewArrival);

export const bestsellers = products.filter((p) => p.isBestSeller);

export const featuredProducts = products.filter((p) => p.isFeatured);

export function getProductBySlug(slug: string): Product | undefined {
  if (!slug) return undefined;
  const clean = decodeURIComponent(slug).toLowerCase().trim();

  // 1. Direct slug or ID match
  let found = products.find(
    (p) => p.slug.toLowerCase() === clean || p.id.toLowerCase() === clean
  );
  if (found) return found;

  // 2. Direct product code match (e.g. "RC-3PC-001" or "rc-3pc-001")
  found = products.find(
    (p) => p.productCode.toLowerCase() === clean
  );
  if (found) return found;

  // 3. Code suffix match (e.g. "mustard-yellow-festive-dupatta-3-piece-ensemble-rc-3pc-001")
  found = products.find((p) => {
    const code = p.productCode.toLowerCase();
    return clean.endsWith(code) || clean.includes(code);
  });
  if (found) return found;

  // 4. Normalized alphanumeric match
  const cleanAlpha = clean.replace(/[^a-z0-9]/g, "");
  found = products.find((p) => {
    const codeAlpha = p.productCode.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleanAlpha.includes(codeAlpha);
  });

  return found || products[0]; // Fallback safely to prevent 404
}

export function getProductByCode(code: string): Product | undefined {
  if (!code) return undefined;
  const cleanCode = code.trim().toUpperCase();
  return products.find((p) => p.productCode.toUpperCase() === cleanCode);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter(
      (p) =>
        p.id !== product.id &&
        (p.productType === product.productType ||
          p.category.some((c) => product.category.includes(c)) ||
          p.color === product.color)
    )
    .slice(0, limit);
}
`;

fs.writeFileSync(path.join(__dirname, "..", "src", "data", "products.ts"), fileContent, "utf-8");
console.log("\n✅ src/data/products.ts updated with strict single-product isolation and robust resolver!");
