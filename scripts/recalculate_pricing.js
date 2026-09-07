const fs = require("fs");
const path = require("path");

const productsPath = path.join(__dirname, "..", "src", "data", "products.ts");
const { products, COLOR_HEX_MAP } = require(productsPath);

console.log("=================================================");
console.log("RECALCULATING FINAL 4-TIER PRODUCT PRICING (EXACT)");
console.log("=================================================");

const updatedProducts = products.map((p) => {
  const copy = { ...p };

  if (copy.productType === "SINGLE_PIECE") {
    copy.price = 499;
    copy.compareAtPrice = 699;
    copy.premiumTier = false;
  } else if (copy.productType === "TWO_PIECE") {
    copy.price = 899;
    copy.compareAtPrice = 1199;
    copy.premiumTier = false;
  } else if (copy.productType === "THREE_PIECE") {
    // Check if specifically designated as Premium Three Piece
    const isPremium =
      copy.productCode === "RC-3PC-001" ||
      copy.productCode === "RC-3PC-002" ||
      /heritage|royal zari/i.test(copy.name);

    if (isPremium) {
      copy.premiumTier = true;
      copy.price = 1299;
      copy.compareAtPrice = 1799;
    } else {
      copy.premiumTier = false;
      copy.price = 1099;
      copy.compareAtPrice = 1499;
    }
  }

  // Synchronize any attached variants
  if (copy.variants && copy.variants.length > 0) {
    copy.variants = copy.variants.map((v) => ({
      ...v,
      price: copy.price,
    }));
  }

  return copy;
});

// Calculate metrics
const metrics = {
  singlePiece499: 0,
  twoPiece899: 0,
  threePieceStandard1099: 0,
  threePiecePremium1299: 0,
  invalid: 0,
};

updatedProducts.forEach((p) => {
  if (p.productType === "SINGLE_PIECE" && p.price === 499) {
    metrics.singlePiece499++;
  } else if (p.productType === "TWO_PIECE" && p.price === 899) {
    metrics.twoPiece899++;
  } else if (p.productType === "THREE_PIECE" && !p.premiumTier && p.price === 1099) {
    metrics.threePieceStandard1099++;
  } else if (p.productType === "THREE_PIECE" && p.premiumTier && p.price === 1299) {
    metrics.threePiecePremium1299++;
  } else {
    metrics.invalid++;
    console.error(`Invalid pricing: [${p.productCode}] ${p.productType}, premiumTier=${p.premiumTier}, price=${p.price}`);
  }
});

console.log("\n--- RECALCULATED PRICING TIERS ---");
console.log(`1. Single Piece (RC-KRT) @ ₹499: ${metrics.singlePiece499}`);
console.log(`2. Two Piece Set (RC-2PC) @ ₹899: ${metrics.twoPiece899}`);
console.log(`3. Three Piece Standard (RC-3PC) @ ₹1,099: ${metrics.threePieceStandard1099}`);
console.log(`4. Three Piece Premium (RC-3PC) @ ₹1,299: ${metrics.threePiecePremium1299}`);
console.log(`Invalid products: ${metrics.invalid}`);

const tsContent = `export type ProductType =
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

export const products: Product[] = ${JSON.stringify(updatedProducts, null, 2)};

export const singlePieceKurtis = products.filter(
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

fs.writeFileSync(productsPath, tsContent, "utf-8");
console.log("Successfully updated products.ts with exact 4 final pricing tiers!");
