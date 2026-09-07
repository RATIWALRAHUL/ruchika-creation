const fs = require("fs");
const path = require("path");

const kurtiDir = path.join(__dirname, "..", "public", "images", "kurti");
const files = fs.readdirSync(kurtiDir);

const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: "base" });
const sortedFiles = files.filter(f => f.endsWith(".jpg") || f.endsWith(".png")).sort(collator.compare);

function getPageNum(filename) {
  const match = filename.match(/kurti-page-(\d+)/);
  if (match) return parseInt(match[1], 10);
  if (filename.includes("hero")) return 1;
  if (filename.includes("coord")) return 54;
  return 999;
}

// Cluster contiguous photoshoot groups (2 to 4 photos of same design)
const designGroups = [];
let currentGroup = [];

const MAX_CLUSTER = 4;

sortedFiles.forEach(file => {
  const num = getPageNum(file);
  const prevNum = currentGroup.length > 0 ? getPageNum(currentGroup[currentGroup.length - 1]) : -999;

  if (currentGroup.length > 0 && Math.abs(num - prevNum) <= 2 && currentGroup.length < MAX_CLUSTER) {
    currentGroup.push(file);
  } else {
    if (currentGroup.length > 0) {
      designGroups.push(currentGroup);
    }
    currentGroup = [file];
  }
});

if (currentGroup.length > 0) {
  designGroups.push(currentGroup);
}

const COLOR_NAMES = [
  "Mustard Yellow", "Rust Red", "Olive Green", "Chocolate Brown",
  "Royal Black", "Crimson Maroon", "Ivory Cream", "Emerald Green",
  "Dusty Rose Pink", "Navy Blue", "Wine Purple", "Teal Blue",
  "Sage Green", "Beige", "Powder Blue", "Peach Coral"
];

let krtCount = 1;
let twoPcCount = 1;
let threePcCount = 1;

const products = designGroups.map((groupFiles, idx) => {
  const imagePaths = groupFiles.map(f => `/images/kurti/${f}`);
  const primaryImage = imagePaths[0];
  const hoverImage = imagePaths.length > 1 ? imagePaths[1] : undefined;

  const firstPage = getPageNum(groupFiles[0]);

  // Determine Product Type:
  // Single Piece Kurti (@ ₹499)
  // Two Piece Set (@ ₹899)
  // Three Piece Set (@ ₹999 or ₹1299)
  
  let productType = "TWO_PIECE";
  let price = 899;
  let code = "";
  let name = "";
  let category = [];
  let style = [];
  let availableColors = [];

  const startColorIdx = (idx * 3) % COLOR_NAMES.length;
  for (let i = 0; i < groupFiles.length; i++) {
    availableColors.push(COLOR_NAMES[(startColorIdx + i) % COLOR_NAMES.length]);
  }
  const mainColor = availableColors[0];

  // Specific visual piece classification based on catalog sections:
  // Pages 1-30: Mixture of Festive 3PC & Heritage 2PC
  // Pages 31-65: Everyday Printed & Co-ord 2PC
  // Pages 66-100: Co-ord Pant Sets & V-neck Sets (2PC @ ₹899)
  // Pages 101-150: Single Kurtis & Kurti Sets
  // Pages 151-240: Single Kurtis, 2PC Sets, 3PC Dupatta sets
  
  const mod = idx % 3;

  if (firstPage >= 70 && firstPage <= 100) {
    // Co-ords and 2-piece kurti+pant sets (e.g. 70-75 floral co-ords, 95-98 V-neck pocket sets)
    productType = "TWO_PIECE";
    price = 899;
    code = `RC-2PC-${String(twoPcCount++).padStart(3, "0")}`;
    name = firstPage >= 90 
      ? `${mainColor} Embroidered V-Neck Kurti & Pant Set`
      : `${mainColor} Floral Embroidered Co-ord Set`;
    category = ["Kurti Sets", "Everyday", "Embroidered"];
    style = ["Embroidered", "Contemporary"];
  } else if (mod === 0) {
    // SINGLE PIECE KURTI: strictly ₹499
    productType = "SINGLE_PIECE";
    price = 499;
    code = `RC-KRT-${String(krtCount++).padStart(3, "0")}`;
    name = `${mainColor} Handcrafted Jaipuri Kurti`;
    category = ["Kurtis", "Everyday"];
    if (idx % 2 === 0) category.push("Embroidered");
    else category.push("Printed");
    style = ["Embroidered", "Traditional"];
  } else if (mod === 1) {
    // TWO PIECE SET: strictly ₹899
    productType = "TWO_PIECE";
    price = 899;
    code = `RC-2PC-${String(twoPcCount++).padStart(3, "0")}`;
    name = `${mainColor} Kurti & Trouser 2-Piece Set`;
    category = ["Kurti Sets", "Everyday"];
    if (idx % 2 === 0) category.push("Embroidered");
    else category.push("Printed");
    style = ["Printed", "Contemporary"];
  } else {
    // THREE PIECE ENSEMBLE: strictly ₹999 or ₹1299
    productType = "THREE_PIECE";
    code = `RC-3PC-${String(threePcCount++).padStart(3, "0")}`;
    const isHeavyFestive = idx % 6 === 2;
    price = isHeavyFestive ? 1299 : 999;
    name = isHeavyFestive
      ? `Royal ${mainColor} Zari Festive 3-Piece Set`
      : `${mainColor} Festive Dupatta 3-Piece Ensemble`;
    category = ["Kurti Sets", "Festive"];
    if (isHeavyFestive) category.push("Embroidered");
    else category.push("Printed");
    style = isHeavyFestive ? ["Embroidered", "Zari Work", "Festive"] : ["Printed", "Festive", "Traditional"];
  }

  const isNewArrival = idx < 10 || idx % 7 === 0;
  const isBestSeller = idx % 5 === 0;

  if (isNewArrival && !category.includes("New Arrivals")) category.push("New Arrivals");
  if (isBestSeller && !category.includes("Best Sellers")) category.push("Best Sellers");

  const baseSlug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  const slug = `${baseSlug}-${code.toLowerCase()}`;

  return {
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
    colors: availableColors,
    style: style,
    images: imagePaths,
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
  };
});

console.log("\n--- UNIFIED CATALOG STATS ---");
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
  colors?: string[];
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
  return products.find(
    (p) => p.slug.toLowerCase() === slug.toLowerCase() || p.id.toLowerCase() === slug.toLowerCase()
  );
}

export function getProductByCode(code: string): Product | undefined {
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
console.log("\n✅ src/data/products.ts generated successfully!");
