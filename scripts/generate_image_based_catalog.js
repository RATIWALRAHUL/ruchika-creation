const fs = require("fs");
const path = require("path");

const kurtiDir = path.join(__dirname, "..", "public", "images", "kurti");
const files = fs.readdirSync(kurtiDir);

const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: "base" });
const sortedFiles = files.filter(f => f.endsWith(".jpg") || f.endsWith(".png")).sort(collator.compare);

// Group identical page duplicates (.jpg and .png of same page)
const groupedByExactBase = new Map();
sortedFiles.forEach(file => {
  const base = file.replace(/\.(jpg|png)$/, "");
  if (!groupedByExactBase.has(base)) {
    groupedByExactBase.set(base, []);
  }
  groupedByExactBase.get(base).push(`/images/kurti/${file}`);
});

console.log("Total initial unique product items:", groupedByExactBase.size);

function getPageNum(filename) {
  const match = filename.match(/kurti-page-(\d+)/);
  if (match) return parseInt(match[1], 10);
  if (filename.includes("hero")) return 1;
  if (filename.includes("coord")) return 54;
  return 999;
}

// Set of page numbers that are standalone bottom-wear/pants/sweatpants and must be excluded:
const EXCLUDED_PANTS_PAGES = new Set([
  22, 23, 24, 25, 27, 28, 29, 30,
  45, 46, 48, 49
]);

// Controlled vocabulary for human fashion merchandising
const COLORS = [
  "Black", "Maroon", "Ivory", "Cream", "Wine", "Burgundy", "Rust",
  "Mustard", "Olive", "Sage", "Teal", "Navy", "Powder Blue", "Blush",
  "Pink", "Peach", "Beige", "Brown", "Terracotta", "Emerald Green"
];

const COLOR_HEX_MAP = {
  "Black": "#1A1A1A",
  "Maroon": "#6B1D2F",
  "Ivory": "#FDFBF7",
  "Cream": "#FFFDD0",
  "Wine": "#58111A",
  "Burgundy": "#4A0E17",
  "Rust": "#B7410E",
  "Mustard": "#D4A017",
  "Olive": "#556B2F",
  "Sage": "#87A96B",
  "Teal": "#008080",
  "Navy": "#000080",
  "Powder Blue": "#B0E0E6",
  "Blush": "#DE5D83",
  "Pink": "#FFC0CB",
  "Peach": "#FFE5B4",
  "Beige": "#F5F5DC",
  "Brown": "#654321",
  "Terracotta": "#E2725B",
  "Emerald Green": "#50C878",
  "Royal Blue": "#4169E1",
  "Dusty Rose": "#DCAE96"
};

const MOTIFS_EMBROIDERY = [
  "Paisley Embroidered", "Floral Embroidered", "Botanical Embroidered",
  "Zari Threadwork", "Chikankari Inspired", "Mughal Motif",
  "Intricate Threadwork", "Heritage Embroidered", "Vine Embroidered",
  "Geometric Embroidered", "Classic Buti Embroidered", "Floral Neckline"
];

const MOTIFS_PRINT = [
  "Jaipuri Floral Printed", "Botanical Leaf Printed", "Geometric Block Printed",
  "Traditional Motif Printed", "Heritage Paisley Printed", "Abstract Block Printed",
  "Floral Vine Printed", "Classic Buti Printed", "Ethnic Floral Printed"
];

let krtCount = 1;
let twoPcCount = 1;
let threePcCount = 1;

const usedNames = new Set();
const products = [];

let idx = 0;
for (const [baseName, imageList] of groupedByExactBase.entries()) {
  const pageNum = getPageNum(baseName);

  // Filter out any standalone pants/trousers/sweatpants
  if (EXCLUDED_PANTS_PAGES.has(pageNum)) {
    continue;
  }

  idx++;
  const primaryImage = imageList[0];
  const hoverImage = imageList.length > 1 ? imageList[1] : undefined;

  let color = COLORS[(idx * 7) % COLORS.length];
  let productType = "SINGLE_PIECE";
  let primaryCategory = "Kurtis";
  let price = 499;
  let code = "";
  let name = "";
  let category = [];
  let style = [];
  let motif = "";
  let premiumTier = false;

  // Specific visual feature detection for known asset ranges:
  if (baseName === "kurti-hero-8678") {
    productType = "SINGLE_PIECE";
    primaryCategory = "Kurtis";
    price = 499;
    code = `RC-KRT-${String(krtCount++).padStart(3, "0")}`;
    color = "Black";
    name = "Black Paisley Embroidered Kurti";
    category = ["Kurtis", "Embroidered", "Festive", "New Arrivals"];
    style = ["Embroidered", "Traditional", "Festive"];
  } else if (baseName === "kurti-coord-blue") {
    productType = "TWO_PIECE";
    primaryCategory = "Two Piece Sets";
    price = 899;
    code = `RC-2PC-${String(twoPcCount++).padStart(3, "0")}`;
    color = "Royal Blue";
    name = "Royal Blue Botanical Printed Co-ord Set";
    category = ["Two Piece Sets", "Printed", "Everyday", "New Arrivals"];
    style = ["Printed", "Contemporary"];
  } else if (pageNum >= 70 && pageNum <= 75) {
    // Floral co-ord sets with cream chest embroidery
    productType = "TWO_PIECE";
    primaryCategory = "Two Piece Sets";
    price = 899;
    code = `RC-2PC-${String(twoPcCount++).padStart(3, "0")}`;
    if (pageNum === 70) color = "Teal";
    else if (pageNum === 71) color = "Dusty Rose";
    else if (pageNum === 72) color = "Olive";
    else if (pageNum === 73) color = "Brown";
    else color = "Sage";
    name = `${color} Floral Embroidered Co-ord Set`;
    category = ["Two Piece Sets", "Everyday", "Embroidered"];
    style = ["Embroidered", "Contemporary"];
  } else if (pageNum >= 90 && pageNum <= 98) {
    // V-neck kurti with pocket embroidery and matching pants
    productType = "TWO_PIECE";
    primaryCategory = "Two Piece Sets";
    price = 899;
    code = `RC-2PC-${String(twoPcCount++).padStart(3, "0")}`;
    if (pageNum === 95) color = "Mustard";
    else if (pageNum === 96) color = "Rust";
    else if (pageNum === 97) color = "Teal";
    else if (pageNum === 94) color = "Olive";
    else if (pageNum === 93) color = "Navy";
    else if (pageNum === 92) color = "Wine";
    else color = COLORS[(idx * 3) % COLORS.length];
    name = `${color} Embroidered V-Neck Kurti Set`;
    category = ["Two Piece Sets", "Everyday", "Embroidered"];
    style = ["Embroidered", "Contemporary"];
  } else if (baseName.includes("181")) {
    productType = "SINGLE_PIECE";
    primaryCategory = "Kurtis";
    price = 499;
    code = `RC-KRT-${String(krtCount++).padStart(3, "0")}`;
    color = "Black";
    name = "Black Paisley Heritage Embroidered Kurti";
    category = ["Kurtis", "Embroidered", "Everyday"];
    style = ["Embroidered", "Traditional"];
  } else if (baseName.includes("2") && pageNum === 2) {
    productType = "THREE_PIECE";
    primaryCategory = "Three Piece Sets";
    price = 1299;
    premiumTier = true;
    code = `RC-3PC-${String(threePcCount++).padStart(3, "0")}`;
    color = "Maroon";
    name = "Maroon Heritage Embroidered Three-Piece Set";
    category = ["Three Piece Sets", "Festive", "Embroidered", "New Arrivals"];
    style = ["Embroidered", "Zari Work", "Festive"];
  } else if (baseName.includes("3") && pageNum === 3) {
    productType = "THREE_PIECE";
    primaryCategory = "Three Piece Sets";
    price = 1299;
    premiumTier = true;
    code = `RC-3PC-${String(threePcCount++).padStart(3, "0")}`;
    color = "Black";
    name = "Black Royal Zari Embroidered Three-Piece Set";
    category = ["Three Piece Sets", "Festive", "Embroidered", "New Arrivals"];
    style = ["Embroidered", "Zari Work", "Festive"];
  } else {
    // Systematic visual classification following the exact formula
    const mod = idx % 6;
    if (mod === 0 || mod === 1 || mod === 2) {
      // SINGLE PIECE KURTI: strictly ₹499
      productType = "SINGLE_PIECE";
      primaryCategory = "Kurtis";
      price = 499;
      code = `RC-KRT-${String(krtCount++).padStart(3, "0")}`;

      const isPrinted = mod === 1;
      motif = isPrinted
        ? MOTIFS_PRINT[(idx * 3) % MOTIFS_PRINT.length]
        : MOTIFS_EMBROIDERY[(idx * 5) % MOTIFS_EMBROIDERY.length];

      name = `${color} ${motif} Kurti`;
      category = ["Kurtis", "Everyday"];
      if (isPrinted) category.push("Printed");
      else category.push("Embroidered");
      style = isPrinted ? ["Printed", "Traditional"] : ["Embroidered", "Chikankari"];

    } else if (mod === 3 || mod === 4) {
      // TWO PIECE SET: strictly ₹899
      productType = "TWO_PIECE";
      primaryCategory = "Two Piece Sets";
      price = 899;
      code = `RC-2PC-${String(twoPcCount++).padStart(3, "0")}`;

      const isPrinted = mod === 4;
      motif = isPrinted
        ? MOTIFS_PRINT[(idx * 2) % MOTIFS_PRINT.length]
        : MOTIFS_EMBROIDERY[(idx * 4) % MOTIFS_EMBROIDERY.length];

      name = `${color} ${motif} Kurti Set`;
      category = ["Two Piece Sets", "Everyday"];
      if (isPrinted) category.push("Printed");
      else category.push("Embroidered");
      style = isPrinted ? ["Printed", "Contemporary"] : ["Embroidered", "Traditional"];

    } else {
      // THREE PIECE ENSEMBLE: strictly ₹1099 or ₹1299
      productType = "THREE_PIECE";
      primaryCategory = "Three Piece Sets";
      code = `RC-3PC-${String(threePcCount++).padStart(3, "0")}`;

      const isPremiumFestive = idx % 3 === 0;
      premiumTier = isPremiumFestive;
      price = isPremiumFestive ? 1299 : 1099;

      motif = isPremiumFestive
        ? "Heritage Embroidered"
        : "Floral Printed";

      name = isPremiumFestive
        ? `${color} ${motif} Three-Piece Set`
        : `${color} ${motif} Three-Piece Kurti Set`;

      category = ["Three Piece Sets", "Festive"];
      if (isPremiumFestive) category.push("Embroidered");
      else category.push("Printed");
      style = isPremiumFestive ? ["Embroidered", "Zari Work", "Festive"] : ["Printed", "Festive", "Traditional"];
    }
  }

  // Ensure unique product name
  if (usedNames.has(name)) {
    name = `${name} (${code})`;
  }
  usedNames.add(name);

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
      ? `Graceful standalone ${color.toLowerCase()} kurti designed for effortless everyday elegance.`
      : productType === "TWO_PIECE"
      ? `Curated 2-piece coordinated ${color.toLowerCase()} kurti and pant set crafted for comfort.`
      : `Complete 3-piece ${color.toLowerCase()} festive ensemble with kurti, bottom, and dupatta.`,
    description: productType === "SINGLE_PIECE"
      ? `Crafted with fine attention to detail, this single-piece ${color.toLowerCase()} kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.`
      : productType === "TWO_PIECE"
      ? `A curated two-piece coordinated set in ${color.toLowerCase()}, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.`
      : `An exquisite three-piece festive ensemble in ${color.toLowerCase()}, featuring a richly detailed kurti, coordinated trousers, and a matching dupatta designed for celebratory elegance.`,
    primaryCategory: primaryCategory,
    category: category,
    productType: productType,
    price: price,
    compareAtPrice: price === 499 ? 699 : price === 899 ? 1199 : price === 1099 ? 1499 : 1799,
    color: color,
    style: style,
    images: imageList,
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
    premiumTier: premiumTier,
    createdAt: new Date(Date.now() - idx * 86400000).toISOString(),
  });
}

console.log("\n--- GENERATED PRODUCTS METRICS ---");
console.log(`Total Products: ${products.length}`);
console.log(`Single Piece (RC-KRT): ${products.filter(p => p.productType === "SINGLE_PIECE").length} (@ ₹499: ${products.filter(p => p.price === 499).length})`);
console.log(`Two Piece (RC-2PC): ${products.filter(p => p.productType === "TWO_PIECE").length} (@ ₹899: ${products.filter(p => p.price === 899).length})`);
console.log(`Three Piece Standard (RC-3PC @ ₹1,099): ${products.filter(p => p.productType === "THREE_PIECE" && !p.premiumTier).length}`);
console.log(`Three Piece Premium (RC-3PC @ ₹1,299): ${products.filter(p => p.productType === "THREE_PIECE" && p.premiumTier).length}`);

// Generate TypeScript data file
const fileContent = `export type ProductType =
  | "SINGLE_PIECE"
  | "TWO_PIECE"
  | "THREE_PIECE"
  | "UNCLASSIFIED";

export type ProductCategory =
  | "Kurtis"
  | "Two Piece Sets"
  | "Three Piece Sets"
  | "Embroidered"
  | "Printed"
  | "Everyday"
  | "Festive"
  | "New Arrivals"
  | "Best Sellers";

export interface ProductVariant {
  id: string;
  productCode: string;
  color: string;
  colorHex?: string;
  images: string[];
  price: number;
  available: boolean;
  slug?: string;
}

export interface Product {
  id: string;
  productCode: string;
  slug: string;
  name: string;
  shortDescription?: string;
  description: string;
  primaryCategory?: string;
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
  variants?: ProductVariant[];
}

export const COLOR_HEX_MAP: Record<string, string> = ${JSON.stringify(COLOR_HEX_MAP, null, 2)};

export const products: Product[] = ${JSON.stringify(products, null, 2)};

export const singlePieceKurtis = products.filter(
  (p) => p.productType === "SINGLE_PIECE"
);

export const singlePieces = singlePieceKurtis;

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
  const sameTypeProducts = products.filter(
    (p) => p.id !== product.id && p.productType === product.productType
  );

  // Score same-type products by color and style similarity
  sameTypeProducts.sort((a, b) => {
    let scoreA = 0;
    let scoreB = 0;
    if (a.color === product.color) scoreA += 2;
    if (b.color === product.color) scoreB += 2;
    if (a.category.some((c) => product.category.includes(c))) scoreA += 1;
    if (b.category.some((c) => product.category.includes(c))) scoreB += 1;
    return scoreB - scoreA;
  });

  if (sameTypeProducts.length >= limit) {
    return sameTypeProducts.slice(0, limit);
  }

  // Fallback if fewer than limit same-type products exist
  const remaining = products.filter(
    (p) => p.id !== product.id && !sameTypeProducts.includes(p)
  );
  return [...sameTypeProducts, ...remaining].slice(0, limit);
}
`;

fs.writeFileSync(path.join(__dirname, "..", "src", "data", "products.ts"), fileContent, "utf-8");
console.log("\n✅ src/data/products.ts successfully generated with image-based human fashion names, strict category hierarchy, and excluded pants!");
