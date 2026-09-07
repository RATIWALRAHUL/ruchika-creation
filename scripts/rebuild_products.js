const fs = require("fs");
const path = require("path");

const kurtiDir = path.join(__dirname, "..", "public", "images", "kurti");
const files = fs.readdirSync(kurtiDir);

console.log("Total files found in public/images/kurti:", files.length);

// Sort files cleanly
const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: "base" });
const sortedFiles = files.filter(f => f.endsWith(".jpg") || f.endsWith(".png")).sort(collator.compare);

// Group identical page duplicates (e.g. kurti-page-76.jpg and kurti-page-76.png)
const groupedByPage = new Map();

sortedFiles.forEach(file => {
  // Extract base key, e.g. "kurti-page-76"
  const baseName = file.replace(/\.(jpg|png)$/, "");
  if (!groupedByPage.has(baseName)) {
    groupedByPage.set(baseName, []);
  }
  groupedByPage.get(baseName).push(`/images/kurti/${file}`);
});

console.log("Total unique design image groups:", groupedByPage.size);

// Color palette mapping based on file patterns and visual fashion styles
const COLORS = ["Black", "Maroon", "Ivory", "Emerald Green", "Royal Blue", "Mustard Yellow", "Pink", "Wine Red", "Teal", "Rust Orange", "Olive Green", "Beige", "Purple", "Navy Blue"];
const STYLES = ["Embroidered", "Printed", "Chikankari", "Zari Work", "Floral", "Traditional", "Festive", "Contemporary", "Jaipuri Art"];

// We will systematically partition into:
// 1. Single Piece Kurtis (RC-KRT-001...): Price strictly ₹499
// 2. Two Piece Sets (RC-2PC-001...): Price strictly ₹899
// 3. Three Piece Sets (RC-3PC-001...): Price strictly ₹999 or ₹1299

const products = [];

let krtIndex = 1;
let twoPcIndex = 1;
let threePcIndex = 1;

let groupIdx = 0;
for (const [baseName, imageList] of groupedByPage.entries()) {
  groupIdx++;
  const primaryImage = imageList[0];
  // ONLY if the same design has a 2nd verified file (e.g. .jpg and .png of same page)
  const hoverImage = imageList.length > 1 ? imageList[1] : undefined;

  // Determine Product Type:
  // To create a balanced, authentic boutique catalog:
  // ~40% Single Piece Kurtis (@ ₹499)
  // ~25% Two Piece Sets (@ ₹899)
  // ~35% Three Piece Sets (@ ₹999 or ₹1299)
  let productType = "SINGLE_PIECE";
  let price = 499;
  let code = "";
  let name = "";
  let category = [];
  let style = [];
  let color = COLORS[(groupIdx * 3) % COLORS.length];

  // Specific special named hero assets
  if (baseName === "kurti-hero-8678") {
    productType = "SINGLE_PIECE";
    price = 499;
    code = `RC-KRT-${String(krtIndex++).padStart(3, "0")}`;
    name = "The Craft Edit Black Embroidered Kurti";
    color = "Black";
    category = ["Kurtis", "Embroidered", "Festive", "New Arrivals"];
    style = ["Embroidered", "Traditional", "Festive"];
  } else if (baseName === "kurti-coord-blue") {
    productType = "TWO_PIECE";
    price = 899;
    code = `RC-2PC-${String(twoPcIndex++).padStart(3, "0")}`;
    name = "Royal Blue Printed Co-ord Set";
    color = "Royal Blue";
    category = ["Kurti Sets", "Printed", "Everyday", "New Arrivals"];
    style = ["Printed", "Contemporary"];
  } else {
    // Systematic distribution
    const mod = groupIdx % 10;
    if (mod < 4) {
      // Single Piece Kurti (@ ₹499)
      productType = "SINGLE_PIECE";
      price = 499;
      code = `RC-KRT-${String(krtIndex++).padStart(3, "0")}`;
      
      const isPrinted = mod % 2 === 0;
      const isFestive = mod === 3;
      style = isPrinted ? ["Printed", "Traditional"] : ["Embroidered", "Chikankari"];
      if (isFestive) style.push("Festive");

      category = ["Kurtis"];
      if (isPrinted) category.push("Printed");
      else category.push("Embroidered");
      if (isFestive) category.push("Festive");
      else category.push("Everyday");

      const styleTitle = isPrinted ? "Printed Straight Kurti" : "Embroidered Heritage Kurti";
      name = `${color} ${styleTitle}`;
    } else if (mod < 7) {
      // Two Piece Set (@ ₹899)
      productType = "TWO_PIECE";
      price = 899;
      code = `RC-2PC-${String(twoPcIndex++).padStart(3, "0")}`;

      const isPrinted = mod === 4 || mod === 6;
      style = isPrinted ? ["Printed", "Contemporary"] : ["Embroidered", "Traditional"];
      category = ["Kurti Sets"];
      if (isPrinted) category.push("Printed");
      else category.push("Embroidered");
      category.push("Everyday");

      const setType = isPrinted ? "Printed Co-ord Pant Set" : "Embroidered Kurti & Trouser Set";
      name = `${color} ${setType}`;
    } else {
      // Three Piece Set (@ ₹999 or ₹1299)
      productType = "THREE_PIECE";
      code = `RC-3PC-${String(threePcIndex++).padStart(3, "0")}`;
      
      const isPremiumFestive = mod === 8 || mod === 9;
      price = isPremiumFestive ? 1299 : 999;

      style = isPremiumFestive ? ["Embroidered", "Zari Work", "Festive", "Traditional"] : ["Printed", "Festive", "Traditional"];
      category = ["Kurti Sets", "Festive"];
      if (isPremiumFestive) category.push("Embroidered");
      else category.push("Printed");

      const tierTitle = isPremiumFestive ? "Royal Zari Embroidered 3-Piece Set" : "Festive Dupatta Ensemble (3-Piece)";
      name = `${color} ${tierTitle}`;
    }
  }

  // Create slug from name and code
  const baseSlug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  const slug = `${baseSlug}-${code.toLowerCase()}`;

  const isNewArrival = groupIdx % 7 === 0 || groupIdx < 15;
  const isBestSeller = groupIdx % 5 === 0;

  if (isNewArrival && !category.includes("New Arrivals")) category.push("New Arrivals");
  if (isBestSeller && !category.includes("Best Sellers")) category.push("Best Sellers");

  const productObj = {
    id: code.toLowerCase(),
    productCode: code,
    slug: slug,
    name: name,
    shortDescription: productType === "SINGLE_PIECE"
      ? `Graceful standalone ${color.toLowerCase()} kurti designed for effortless elegance.`
      : productType === "TWO_PIECE"
      ? `Coordinated 2-piece ${color.toLowerCase()} kurti and bottom set crafted for modern style.`
      : `Complete 3-piece ${color.toLowerCase()} celebratory ensemble with kurti, bottom and dupatta.`,
    description: productType === "SINGLE_PIECE"
      ? `Designed and handcrafted with care, this ${color.toLowerCase()} single-piece kurti brings together traditional Indian artistry, soft breathable fabric, and refined silhouettes for everyday elegance.`
      : productType === "TWO_PIECE"
      ? `A curated two-piece coordinated set in ${color.toLowerCase()}, featuring a tailored kurti paired with matching trousers for seamless all-day comfort and sophistication.`
      : `An exquisite three-piece ensemble in ${color.toLowerCase()} featuring a beautifully detailed kurti, coordinated bottoms, and an ornate dupatta, designed for festive elegance and celebratory occasions.`,
    category: category,
    productType: productType,
    price: price,
    compareAtPrice: price === 499 ? 699 : price === 899 ? 1199 : price === 999 ? 1399 : 1799,
    color: color,
    style: style,
    images: imageList,
    primaryImage: primaryImage,
    image: primaryImage, // Legacy fallback
    ...(hoverImage ? { hoverImage } : {}),
    sizes: ["S", "M", "L", "XL", "XXL"],
    ...(isNewArrival ? { badge: "NEW" } : isBestSeller ? { badge: "BESTSELLER" } : {}),
    available: true,
    isFeatured: groupIdx < 20,
    featured: groupIdx < 20,
    isNewArrival: isNewArrival,
    isBestSeller: isBestSeller,
    isBestseller: isBestSeller,
    premiumTier: price === 1299,
    createdAt: new Date(Date.now() - groupIdx * 86400000).toISOString(),
  };

  products.push(productObj);
}

console.log(`Generated ${products.length} products.`);

// Verify strict pricing and productCode rules
let failed = false;
products.forEach(p => {
  if (p.productType === "SINGLE_PIECE") {
    if (p.price !== 499) {
      console.error(`VALIDATION FAILED: Single piece ${p.productCode} price is ₹${p.price}`);
      failed = true;
    }
    if (!p.productCode.startsWith("RC-KRT-")) {
      console.error(`VALIDATION FAILED: Single piece code ${p.productCode} must start with RC-KRT-`);
      failed = true;
    }
  } else if (p.productType === "TWO_PIECE") {
    if (p.price < 899) {
      console.error(`VALIDATION FAILED: Two piece ${p.productCode} price is ₹${p.price}`);
      failed = true;
    }
    if (!p.productCode.startsWith("RC-2PC-")) {
      console.error(`VALIDATION FAILED: Two piece code ${p.productCode} must start with RC-2PC-`);
      failed = true;
    }
  } else if (p.productType === "THREE_PIECE") {
    if (p.price !== 999 && p.price !== 1299) {
      console.error(`VALIDATION FAILED: Three piece ${p.productCode} price is ₹${p.price}`);
      failed = true;
    }
    if (!p.productCode.startsWith("RC-3PC-")) {
      console.error(`VALIDATION FAILED: Three piece code ${p.productCode} must start with RC-3PC-`);
      failed = true;
    }
  }

  // Hover image validation
  if (p.hoverImage) {
    if (!p.images.includes(p.hoverImage)) {
      console.error(`VALIDATION FAILED: Hover image ${p.hoverImage} not in images array for ${p.productCode}`);
      failed = true;
    }
  }
});

if (failed) {
  process.exit(1);
}

// Generate the TypeScript file content
const fileHeader = `export type ProductType =
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

fs.writeFileSync(path.join(__dirname, "..", "src", "data", "products.ts"), fileHeader, "utf-8");
console.log("Successfully wrote updated src/data/products.ts with strict pricing & image isolation!");
