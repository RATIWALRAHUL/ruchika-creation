const fs = require('fs');
const path = require('path');

const dir = 'public/images/kurti';
const allFiles = fs.readdirSync(dir);

function getImageForPage(p) {
  const matching = allFiles.filter(f => f.startsWith('kurti-page-' + p + '.'));
  if (matching.length > 0) return '/images/kurti/' + matching[0];
  return null;
}

const pages = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 27, 28, 29, 30, 31, 32, 33, 34, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 66, 67, 68, 70, 71, 72, 73, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 87, 88, 89, 90, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 238, 239, 241];

const groups = [];
let i = 0;
while (i < pages.length) {
  const p1 = pages[i];
  if (i < pages.length - 1 && pages[i + 1] === p1 + 1) {
    const p2 = pages[i + 1];
    groups.push({
      idSuffix: p1 + '-' + p2,
      pages: [p1, p2],
      images: [getImageForPage(p1), getImageForPage(p2)].filter(Boolean)
    });
    i += 2;
  } else {
    groups.push({
      idSuffix: '' + p1,
      pages: [p1],
      images: [getImageForPage(p1)].filter(Boolean)
    });
    i += 1;
  }
}

// Special items
groups.push({
  idSuffix: 'hero-8678',
  pages: ['hero-8678'],
  images: ['/images/kurti/kurti-hero-8678.jpg']
});
groups.push({
  idSuffix: 'coord-blue',
  pages: ['coord-blue'],
  images: ['/images/kurti/kurti-coord-blue.png']
});

console.log('Generating product data for', groups.length, 'products...');

const colorCycle = [
  'Black', 'Maroon', 'Ivory', 'Olive', 'Pink', 'Blue', 'Yellow', 'Green', 'Red', 'Beige', 'White', 'Brown', 'Multi'
];

const modifiers = [
  'Royal', 'Vintage', 'Artisanal', 'Classic', 'Graceful', 'Timeless', 'Celebration', 'Heritage', 'Boutique', 'Signature', 'Imperial', 'Majestic'
];

// Counters for zero-padded productCode formatting: RC-KRT-001, RC-2PC-001, RC-3PC-001
let krtCount = 0;
let twoPcCount = 0;
let threePcCount = 0;

const products = groups.map((g, idx) => {
  const p1 = g.pages[0];
  const isSpecial = typeof p1 === 'string';
  const pageNum = isSpecial ? 180 : p1;
  
  let color = colorCycle[idx % colorCycle.length];
  let type = 'THREE_PIECE';
  let price = 999;
  let premiumTier = false;
  let style = ['Printed', 'Traditional'];
  let cat = ['Kurti Sets', 'Printed'];
  let name = '';
  
  if (pageNum === 181 || p1 === 'hero-8678') {
    name = 'Black Paisley Embroidered Kurti';
    color = 'Black';
    type = 'SINGLE_PIECE';
    price = 499;
    style = ['Embroidered', 'Traditional'];
    cat = ['Kurtis', 'Embroidered', 'Best Sellers'];
  } else if (p1 === 'coord-blue') {
    name = 'Royal Blue Printed Co-ord Set';
    color = 'Blue';
    type = 'TWO_PIECE';
    price = 899;
    style = ['Printed', 'Contemporary'];
    cat = ['Kurti Sets', 'Printed', 'New Arrivals'];
  } else if (pageNum >= 2 && pageNum <= 30) {
    if (idx % 3 === 0) {
      type = 'THREE_PIECE';
      price = 1299;
      premiumTier = true;
      style = ['Embroidered', 'Festive', 'Traditional'];
      cat = ['Kurti Sets', 'Festive', 'Embroidered', idx < 6 ? 'New Arrivals' : 'Best Sellers'];
      name = modifiers[idx % modifiers.length] + ' ' + color + ' Zari Embroidered Set';
    } else if (idx % 3 === 1) {
      type = 'TWO_PIECE';
      price = 899;
      style = ['Textured', 'Contemporary'];
      cat = ['Kurti Sets', 'Everyday', 'New Arrivals'];
      name = modifiers[(idx + 2) % modifiers.length] + ' ' + color + ' Textured Kurti Set';
    } else {
      type = 'SINGLE_PIECE';
      price = 499;
      style = ['Embroidered', 'Floral'];
      cat = ['Kurtis', 'Embroidered', 'Everyday'];
      name = color + ' Floral Embroidered Kurti';
    }
  } else if (pageNum >= 31 && pageNum <= 70) {
    if (idx % 2 === 0) {
      type = 'THREE_PIECE';
      price = 999;
      style = ['Printed', 'Floral'];
      cat = ['Kurti Sets', 'Printed', 'Everyday'];
      name = color + ' Floral Printed Kurti Set';
    } else {
      type = 'SINGLE_PIECE';
      price = 499;
      style = ['Printed', 'Contemporary'];
      cat = ['Kurtis', 'Printed', 'Everyday'];
      name = color + ' Everyday Printed Kurti';
    }
  } else if (pageNum >= 71 && pageNum <= 120) {
    if (idx % 3 === 0) {
      type = 'THREE_PIECE';
      price = 1299;
      premiumTier = true;
      style = ['Embroidered', 'Traditional', 'Festive'];
      cat = ['Kurti Sets', 'Festive', 'Embroidered'];
      name = modifiers[idx % modifiers.length] + ' ' + color + ' Heritage Kurti Set';
    } else if (idx % 3 === 1) {
      type = 'THREE_PIECE';
      price = 999;
      style = ['Printed', 'Traditional'];
      cat = ['Kurti Sets', 'Printed', 'Festive'];
      name = color + ' Traditional Boota Kurti Set';
    } else {
      type = 'TWO_PIECE';
      price = 899;
      style = ['Printed', 'Contemporary'];
      cat = ['Kurti Sets', 'Printed', 'Everyday'];
      name = color + ' Geometric Co-ord Kurti Set';
    }
  } else if (pageNum >= 121 && pageNum <= 170) {
    if (idx % 2 === 0) {
      type = 'THREE_PIECE';
      price = 1299;
      premiumTier = true;
      style = ['Embroidered', 'Festive'];
      cat = ['Kurti Sets', 'Festive', 'Embroidered', 'Best Sellers'];
      name = modifiers[idx % modifiers.length] + ' ' + color + ' Embroidered Festive Set';
    } else {
      type = 'SINGLE_PIECE';
      price = 499;
      style = ['Embroidered', 'Traditional'];
      cat = ['Kurtis', 'Embroidered'];
      name = color + ' Straight Embroidered Kurti';
    }
  } else if (pageNum >= 171 && pageNum <= 190) {
    if (idx % 2 === 0) {
      type = 'SINGLE_PIECE';
      price = 499;
      style = ['Embroidered', 'Traditional'];
      cat = ['Kurtis', 'Embroidered', 'Best Sellers'];
      name = color + ' Paisley Motif Kurti';
    } else {
      type = 'TWO_PIECE';
      price = 899;
      style = ['Textured', 'Traditional'];
      cat = ['Kurti Sets', 'Everyday'];
      name = color + ' Elegant Neckwork Kurti Set';
    }
  } else {
    if (idx % 3 === 0) {
      type = 'SINGLE_PIECE';
      price = 499;
      style = ['Embroidered', 'Floral'];
      cat = ['Kurtis', 'Embroidered', 'Everyday', 'New Arrivals'];
      name = color + ' Chikankari Tunic Kurti';
    } else if (idx % 3 === 1) {
      type = 'TWO_PIECE';
      price = 899;
      style = ['Printed', 'Contemporary'];
      cat = ['Kurti Sets', 'Printed', 'Everyday'];
      name = color + ' Contemporary Printed Set';
    } else {
      type = 'THREE_PIECE';
      price = 999;
      style = ['Printed', 'Floral', 'Festive'];
      cat = ['Kurti Sets', 'Printed', 'Festive'];
      name = modifiers[idx % modifiers.length] + ' ' + color + ' Printed Dupatta Set';
    }
  }

  // Generate exact permanent productCode: RC-KRT-xxx, RC-2PC-xxx, RC-3PC-xxx
  let productCode = '';
  if (type === 'SINGLE_PIECE') {
    krtCount++;
    productCode = 'RC-KRT-' + String(krtCount).padStart(3, '0');
  } else if (type === 'TWO_PIECE') {
    twoPcCount++;
    productCode = 'RC-2PC-' + String(twoPcCount).padStart(3, '0');
  } else {
    threePcCount++;
    productCode = 'RC-3PC-' + String(threePcCount).padStart(3, '0');
  }

  const id = productCode.toLowerCase();
  
  let baseSlug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const slug = baseSlug + '-' + g.idSuffix;

  let desc = '';
  let shortDesc = '';
  if (type === 'SINGLE_PIECE') {
    shortDesc = 'Single piece straight kurti in ' + color.toLowerCase() + '.';
    desc = 'Graceful ' + color.toLowerCase() + ' straight kurti featuring ' + (style.includes('Embroidered') ? 'detailed thread embroidery' : 'fine artistic print') + ' on the neckline and sleeves. Crafted for everyday elegance and effortless all-day comfort.';
  } else if (type === 'TWO_PIECE') {
    shortDesc = 'Two-piece kurti and coordinated pant set in ' + color.toLowerCase() + '.';
    desc = 'Coordinated ' + color.toLowerCase() + ' two-piece kurti and trouser set tailored for refined comfort, featuring delicate neckline detailing and contemporary straight fit bottoms.';
  } else {
    shortDesc = 'Three-piece kurti, bottom and dupatta ensemble in ' + color.toLowerCase() + '.';
    desc = (premiumTier ? 'Exquisite festive ' : 'Thoughtfully styled ') + color.toLowerCase() + ' three-piece ensemble complete with straight kurti, matching bottom, and coordinating dupatta crafted for festive grace.';
  }

  const isNewArrival = cat.includes('New Arrivals') || idx < 12;
  const isBestSeller = cat.includes('Best Sellers') || (idx % 7 === 0);
  let badge = undefined;
  if (isNewArrival && idx < 8) badge = 'NEW';
  else if (isBestSeller && idx % 14 === 0) badge = 'BESTSELLER';

  return {
    id,
    productCode,
    slug,
    name,
    shortDescription: shortDesc,
    description: desc,
    category: cat,
    productType: type,
    price,
    compareAtPrice: price === 1299 ? 1699 : price === 999 ? 1399 : price === 899 ? 1199 : 699,
    color,
    style,
    images: g.images,
    primaryImage: g.images[0],
    image: g.images[0],
    hoverImage: g.images.length > 1 ? g.images[1] : undefined,
    sizes: ["S", "M", "L", "XL", "XXL"],
    badge,
    available: true,
    isFeatured: idx < 8,
    isNewArrival,
    isBestSeller,
    isBestseller: isBestSeller, // alias for legacy
    premiumTier,
    createdAt: "2026-08-15T10:00:00.000Z"
  };
});

const content = `export type ProductType =
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

export const newArrivals = products.filter((p) => p.isNewArrival);
export const bestsellers = products.filter((p) => p.isBestSeller);

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductByCode(code: string): Product | undefined {
  const clean = code.trim().toUpperCase();
  return products.find((p) => p.productCode.toUpperCase() === clean);
}

export function getRelatedProducts(product: Product, limit: number = 4): Product[] {
  return products
    .filter((p) => p.id !== product.id && (p.productType === product.productType || p.color === product.color))
    .slice(0, limit);
}
`;

fs.writeFileSync('src/data/products.ts', content, 'utf8');
console.log('Successfully wrote src/data/products.ts with', products.length, 'products!');
console.log('KRT count:', krtCount, '2PC count:', twoPcCount, '3PC count:', threePcCount);
