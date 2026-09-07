const fs = require("fs");
const path = require("path");

const productsPath = path.join(__dirname, "..", "src", "data", "products.ts");
const { products } = require(productsPath);

const COLOR_HEX_MAP = {
  "Black": "#171515",
  "Maroon": "#641C22",
  "Wine": "#4B151A",
  "Burgundy": "#7A2C32",
  "Ruby Red": "#9B111E",
  "Crimson": "#990000",
  "Scarlet": "#FF2400",
  "Rose": "#C21E56",
  "Dusty Rose": "#DCAE96",
  "Blush Pink": "#DE5D83",
  "Baby Pink": "#F4C2C2",
  "Pink": "#E08090",
  "Coral Peach": "#F88379",
  "Peach": "#F5C3A6",
  "Salmon Pink": "#FF91A4",
  "Magenta": "#CA1F7B",
  "Rani Pink": "#C71585",
  "Royal Blue": "#1E3F66",
  "Navy Blue": "#1B2A4A",
  "Navy": "#1B2A4A",
  "Powder Blue": "#B0C4DE",
  "Sky Blue": "#87CEEB",
  "Midnight Blue": "#191970",
  "Indigo Blue": "#2E4A7F",
  "Cerulean Blue": "#2A52BE",
  "Steel Blue": "#4682B4",
  "Teal": "#1D6F7A",
  "Teal Green": "#006D77",
  "Deep Teal": "#004D40",
  "Turquoise": "#30D5C8",
  "Emerald Green": "#1B4D3E",
  "Forest Green": "#22553B",
  "Bottle Green": "#094025",
  "Sage Green": "#8F9E8B",
  "Mint Green": "#98FF98",
  "Olive Green": "#556B2F",
  "Olive": "#556B2F",
  "Pistachio Green": "#93C572",
  "Lime Green": "#32CD32",
  "Sea Green": "#2E8B57",
  "Mustard Yellow": "#D49B2A",
  "Mustard": "#D49B2A",
  "Golden Ochre": "#C68B2C",
  "Lemon Yellow": "#F4EE8A",
  "Haldi Yellow": "#EAA221",
  "Sunshine Yellow": "#FFD700",
  "Amber": "#FFBF00",
  "Tangerine Orange": "#E65A28",
  "Rust Orange": "#B7410E",
  "Rust": "#B7410E",
  "Burnt Orange": "#CC5500",
  "Terracotta": "#C85A32",
  "Plum Purple": "#582233",
  "Aubergine": "#3B1F2B",
  "Lavender": "#B57EDC",
  "Lilac": "#C8A2C8",
  "Mauve": "#915F6D",
  "Violet": "#7F00FF",
  "Ivory Cream": "#FAF7EE",
  "Ivory": "#FDFBF7",
  "Off-White": "#FAF9F6",
  "Cream": "#F5F0E6",
  "Beige": "#E6D7C3",
  "Champagne Gold": "#D7C29E",
  "Camel Brown": "#A16F43",
  "Warm Taupe": "#8B7D77",
  "Mocha Brown": "#664C38",
  "Chocolate Brown": "#4A2E1B",
  "Brown": "#6E473B",
  "Charcoal Grey": "#36454F",
  "Silver Grey": "#C0C0C0",
  "Ash Grey": "#B2BEB5",
  "Graphite": "#41424C",
  "White": "#FFFFFF"
};

const colorsList = Object.keys(COLOR_HEX_MAP);

// 1. Identify design groups
const groups = {};
products.forEach(p => {
  let baseName = p.name;
  for (const c of colorsList) {
    const reg = new RegExp(`^${c}\\s+`, 'i');
    if (reg.test(baseName)) {
      baseName = baseName.replace(reg, '');
      break;
    }
  }
  const key = `${p.productType}__${baseName.toLowerCase().trim()}`;
  if (!groups[key]) {
    groups[key] = [];
  }
  groups[key].push(p);
});

// 2. Build updated products list with variants attached
const updatedProducts = products.map(p => {
  let baseName = p.name;
  for (const c of colorsList) {
    const reg = new RegExp(`^${c}\\s+`, 'i');
    if (reg.test(baseName)) {
      baseName = baseName.replace(reg, '');
      break;
    }
  }
  const key = `${p.productType}__${baseName.toLowerCase().trim()}`;
  const groupMembers = groups[key] || [];

  const copy = { ...p };

  if (groupMembers.length > 1) {
    copy.variants = groupMembers.map(m => ({
      id: m.id,
      productCode: m.productCode,
      color: m.color || "Standard",
      colorHex: COLOR_HEX_MAP[m.color] || "#641C22",
      images: m.images,
      price: m.price,
      available: m.available !== false,
      slug: m.slug
    }));
  } else {
    // Single color product: only 1 variant or undefined
    copy.variants = [
      {
        id: p.id,
        productCode: p.productCode,
        color: p.color || "Standard",
        colorHex: COLOR_HEX_MAP[p.color] || "#641C22",
        images: p.images,
        price: p.price,
        available: p.available !== false,
        slug: p.slug
      }
    ];
  }

  return copy;
});

console.log("Updated products count:", updatedProducts.length);
const multiVariantCount = updatedProducts.filter(p => p.variants && p.variants.length > 1).length;
console.log("Products with genuine color variants (>1):", multiVariantCount);

// Generate TypeScript file
const tsHeader = `export type ProductType =
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

fs.writeFileSync(productsPath, tsHeader, "utf-8");
console.log("Successfully updated products.ts with color variants!");
