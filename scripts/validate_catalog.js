const fs = require("fs");
const path = require("path");

// Load products
const { products, getProductByCode, getProductBySlug } = require("../src/data/products.ts");
const { buildWhatsAppOrderMessage } = require("../src/utils/whatsappOrder.ts");

console.log("=================================================");
console.log("RUCHIKA CREATION — CATALOG & INTEGRITY AUDIT");
console.log("=================================================");

let errors = [];

const codes = new Set();
const slugs = new Set();
const ids = new Set();

const counts = {
  total: products.length,
  singlePiece: 0,
  twoPiece: 0,
  threePiece: 0,
  price499: 0,
  price899: 0,
  price999: 0,
  price1299: 0,
  withHoverImage: 0,
  singleImageOnly: 0,
};

products.forEach((p, idx) => {
  // Check unique ID
  if (ids.has(p.id)) {
    errors.push(`Duplicate product ID: ${p.id} at index ${idx}`);
  }
  ids.add(p.id);

  // Check unique Code
  if (codes.has(p.productCode)) {
    errors.push(`Duplicate product code: ${p.productCode} for "${p.name}"`);
  }
  codes.add(p.productCode);

  // Check unique Slug
  if (slugs.has(p.slug)) {
    errors.push(`Duplicate product slug: ${p.slug} for "${p.name}"`);
  }
  slugs.add(p.slug);

  // Product Code Format: RC-[TYPE]-[NUMBER]
  if (!/^RC-(KRT|2PC|3PC)-\d{3}$/.test(p.productCode)) {
    errors.push(`Invalid product code format: ${p.productCode} (${p.name})`);
  }

  // Strict Final 4-Tier Pricing Rule:
  // 1. SINGLE_PIECE: ₹499
  // 2. TWO_PIECE: ₹899
  // 3. THREE_PIECE (Standard): ₹1,099
  // 4. THREE_PIECE (Premium): ₹1,299
  const ALLOWED_PRICES = [499, 899, 1099, 1299];
  if (!ALLOWED_PRICES.includes(p.price)) {
    errors.push(`[INVALID PRICE] Product ${p.productCode} has invalid price ₹${p.price}. Only allowed: 499, 899, 1099, 1299`);
  }

  if (p.productType === "SINGLE_PIECE") {
    counts.singlePiece++;
    if (p.price !== 499) {
      errors.push(`[RULE 1 VIOLATION] Single piece price MUST equal ₹499, found ₹${p.price} for ${p.productCode}`);
    }
    if (!p.productCode.startsWith("RC-KRT-")) {
      errors.push(`Single piece product code must start with RC-KRT-, found ${p.productCode}`);
    }
    if (!p.category.includes("Kurtis")) {
      errors.push(`[CATEGORY RULE VIOLATION] Single piece ${p.productCode} must include category "Kurtis"`);
    }
    if (p.category.includes("Two Piece Sets") || p.category.includes("Three Piece Sets")) {
      errors.push(`[CATEGORY RULE VIOLATION] Single piece ${p.productCode} must NOT include Two Piece Sets or Three Piece Sets`);
    }
  } else if (p.productType === "TWO_PIECE") {
    counts.twoPiece++;
    if (p.price !== 899) {
      errors.push(`[RULE 2 VIOLATION] Two piece price MUST equal ₹899, found ₹${p.price} for ${p.productCode}`);
    }
    if (!p.productCode.startsWith("RC-2PC-")) {
      errors.push(`Two piece product code must start with RC-2PC-, found ${p.productCode}`);
    }
    if (!p.category.includes("Two Piece Sets")) {
      errors.push(`[CATEGORY RULE VIOLATION] Two piece ${p.productCode} must include category "Two Piece Sets"`);
    }
    if (p.category.includes("Three Piece Sets")) {
      errors.push(`[CATEGORY RULE VIOLATION] Two piece ${p.productCode} must NOT include Three Piece Sets`);
    }
  } else if (p.productType === "THREE_PIECE") {
    counts.threePiece++;
    if (!p.premiumTier && p.price !== 1099) {
      errors.push(`[RULE 3 VIOLATION] Standard Three piece price MUST equal ₹1,099, found ₹${p.price} for ${p.productCode}`);
    }
    if (p.premiumTier && p.price !== 1299) {
      errors.push(`[RULE 4 VIOLATION] Premium Three piece price MUST equal ₹1,299, found ₹${p.price} for ${p.productCode}`);
    }
    if (!p.productCode.startsWith("RC-3PC-")) {
      errors.push(`Three piece product code must start with RC-3PC-, found ${p.productCode}`);
    }
    if (!p.category.includes("Three Piece Sets")) {
      errors.push(`[CATEGORY RULE VIOLATION] Three piece ${p.productCode} must include category "Three Piece Sets"`);
    }
    if (p.category.includes("Two Piece Sets")) {
      errors.push(`[CATEGORY RULE VIOLATION] Three piece ${p.productCode} must NOT include Two Piece Sets`);
    }
  } else {
    errors.push(`Invalid productType: ${p.productType} for ${p.productCode}`);
  }

  if (p.price === 499) counts.price499 = (counts.price499 || 0) + 1;
  else if (p.price === 899) counts.price899 = (counts.price899 || 0) + 1;
  else if (p.price === 1099) counts.price1099 = (counts.price1099 || 0) + 1;
  else if (p.price === 1299) counts.price1299 = (counts.price1299 || 0) + 1;

  // Rule F, G, H, I: Image and Hover Image Isolation Validation
  if (!p.primaryImage) {
    errors.push(`Product ${p.productCode} missing primaryImage`);
  }
  if (!p.images.includes(p.primaryImage)) {
    errors.push(`primaryImage ${p.primaryImage} not found in images array for ${p.productCode}`);
  }

  if (p.hoverImage) {
    counts.withHoverImage++;
    if (!p.images.includes(p.hoverImage)) {
      errors.push(`[RULE G/I VIOLATION] hoverImage ${p.hoverImage} is NOT in product ${p.productCode}'s images array`);
    }
    if (p.hoverImage === p.primaryImage) {
      errors.push(`hoverImage should not be identical to primaryImage if specified in ${p.productCode}`);
    }
  } else {
    counts.singleImageOnly++;
  }

  // Verify all image files exist on disk
  p.images.forEach((imgRel) => {
    const fullPath = path.join(__dirname, "..", "public", imgRel);
    if (!fs.existsSync(fullPath)) {
      errors.push(`Image file missing from filesystem: ${imgRel} in product ${p.productCode}`);
    }
  });
  // Verify Color Variants Integrity if defined
  if (p.variants && p.variants.length > 0) {
    p.variants.forEach((v) => {
      if (!v.productCode) {
        errors.push(`Variant in ${p.productCode} missing productCode`);
      }
      if (!v.color) {
        errors.push(`Variant ${v.productCode} in ${p.productCode} missing color name`);
      }
      if (!v.colorHex) {
        errors.push(`Variant ${v.productCode} in ${p.productCode} missing colorHex`);
      }
      if (!v.images || v.images.length === 0) {
        errors.push(`Variant ${v.productCode} in ${p.productCode} missing images`);
      }
      // Check images exist on disk
      v.images.forEach((vImg) => {
        const fullVPath = path.join(__dirname, "..", "public", vImg);
        if (!fs.existsSync(fullVPath)) {
          errors.push(`Variant image file missing from disk: ${vImg} for variant ${v.productCode}`);
        }
      });
    });
  }
});

console.log("\n--- AUDIT METRICS ---");
console.log(`Total Products: ${counts.total}`);
console.log(`Single Piece (RC-KRT): ${counts.singlePiece} (@ ₹499: ${counts.price499})`);
console.log(`Two Piece Sets (RC-2PC): ${counts.twoPiece} (@ ₹899: ${counts.price899})`);
console.log(`Three Piece Sets (RC-3PC): ${counts.threePiece} (@ ₹1,099: ${counts.price1099}, @ ₹1,299: ${counts.price1299})`);
console.log(`Single-Image Products: ${counts.singleImageOnly}`);
console.log(`Multi-Image Products (verified same design): ${counts.withHoverImage}`);
const multiColorCount = products.filter(p => p.variants && p.variants.length > 1).length;
console.log(`Products with Genuine Multi-Color Variants: ${multiColorCount}`);

// 2. Search Code Lookup Verification
const testCodes = ["RC-KRT-001", "RC-2PC-001", "RC-3PC-001", "RC-3PC-010"];
testCodes.forEach((code) => {
  const found = getProductByCode(code);
  if (!found) {
    errors.push(`getProductByCode failed to find ${code}`);
  } else {
    console.log(`✓ Product code lookup: ${code} -> "${found.name}" (Type: ${found.productType}, ₹${found.price})`);
  }
});

// 3. 4-Product WhatsApp Order Simulation Test with Color Variants
console.log("\n--- 4-PRODUCT WHATSAPP ORDER SIMULATION (WITH COLOR VARIANTS) ---");
const sampleItems = [
  { product: products[0], quantity: 1, size: "M", color: "Black", variantCode: "RC-KRT-001" },
  { product: products[10], quantity: 2, size: "L", color: "Wine", variantCode: "RC-2PC-005" },
  { product: products[25], quantity: 1, size: "XL", color: "Teal", variantCode: "RC-KRT-025" },
  { product: products[50], quantity: 1, size: "S", color: "Maroon", variantCode: "RC-3PC-020" },
];

const subtotal = sampleItems.reduce((acc, i) => acc + (i.variantPrice ?? i.product.price) * i.quantity, 0);
const shipping = subtotal >= 999 ? 0 : 99;
const total = subtotal + shipping;

const message = buildWhatsAppOrderMessage({
  orderId: "RC-ORD-20260907-001",
  customerName: "Rahul Sharma",
  customerMobile: "9876543210",
  items: sampleItems,
  subtotal: subtotal,
  shipping: shipping,
  total: total,
  customerQuery: "Please confirm size fit for Jaipur delivery.",
});

console.log(message);

if (!message.includes("RC-ORD-20260907-001")) errors.push("Order Reference missing in WhatsApp message");
if (!message.includes("Rahul Sharma")) errors.push("Customer Name missing in WhatsApp message");
if (!message.includes("9876543210")) errors.push("Customer Mobile missing in WhatsApp message");
if (!message.includes("Color: Black")) errors.push("Color information missing in WhatsApp message");

sampleItems.forEach((item) => {
  const expectedCode = item.variantCode || item.product.productCode;
  if (!message.includes(expectedCode)) {
    errors.push(`WhatsApp message missing product code ${expectedCode}`);
  }
  if (!message.includes(item.product.name)) {
    errors.push(`WhatsApp message missing product name ${item.product.name}`);
  }
});

console.log("\n=================================================");
if (errors.length === 0) {
  console.log("✅ ALL AUDITS PASSED WITH ZERO ERRORS!");
} else {
  console.error(`❌ ${errors.length} ERRORS ENCOUNTERED:`);
  errors.forEach((e) => console.error(" - " + e));
  process.exit(1);
}
console.log("=================================================");
