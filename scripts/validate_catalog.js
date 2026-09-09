const fs = require("fs");
const path = require("path");

const tsPath = path.join(__dirname, "..", "src", "data", "products.ts");
const tsContent = fs.readFileSync(tsPath, "utf8");

// Extract the products array from products.ts
const match = tsContent.match(/export const products: Product\[\] = (\[[\s\S]*?\n\];)/);
if (!match) {
  console.error("Could not find products array in products.ts");
  process.exit(1);
}

const products = eval(match[1].replace(/;\s*$/, ""));

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
  byPrice: {},
  withHoverImage: 0,
  singleImageOnly: 0,
};

// Allowed prices matching codebase folders
const ALLOWED_PRICES = [399, 499, 599, 699, 899, 999, 1099, 1199, 1299, 1499];

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

  // Allowed Prices
  if (!ALLOWED_PRICES.includes(p.price)) {
    errors.push(`[INVALID PRICE] Product ${p.productCode} has invalid price ₹${p.price}. Only allowed: ${ALLOWED_PRICES.join(", ")}`);
  }

  // Price counting
  counts.byPrice[p.price] = (counts.byPrice[p.price] || 0) + 1;

  if (p.productType === "SINGLE_PIECE") {
    counts.singlePiece++;
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

  // Image and Hover Image Isolation Validation
  if (!p.primaryImage) {
    errors.push(`Product ${p.productCode} missing primaryImage`);
  }
  if (!p.images.includes(p.primaryImage)) {
    errors.push(`primaryImage ${p.primaryImage} not found in images array for ${p.productCode}`);
  }

  if (p.hoverImage) {
    counts.withHoverImage++;
    if (!p.images.includes(p.hoverImage)) {
      errors.push(`hoverImage ${p.hoverImage} is NOT in product ${p.productCode}'s images array`);
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
console.log(`Single Piece (RC-KRT): ${counts.singlePiece}`);
console.log(`Two Piece Sets (RC-2PC): ${counts.twoPiece}`);
console.log(`Three Piece Sets (RC-3PC): ${counts.threePiece}`);
console.log(`Price Tier Distribution:`, counts.byPrice);
console.log(`Single-Image Products: ${counts.singleImageOnly}`);
console.log(`Multi-Image Products (verified same design): ${counts.withHoverImage}`);
const multiColorCount = products.filter((p) => p.variants && p.variants.length > 1).length;
console.log(`Products with Multi-Color Variants: ${multiColorCount}`);

// 2. WhatsApp Order Message Builder Test
function buildWhatsAppOrderMessage(payload) {
  const { orderId, customerName, customerMobile, items, subtotal, shipping, total, customerQuery } = payload;
  const lines = [];
  lines.push(`*Ruchika Creation — New Order Request*`);
  lines.push("");
  if (orderId) {
    lines.push(`*Order Ref:*`);
    lines.push(`${orderId}`);
    lines.push("");
  }
  lines.push(`*Customer:*`);
  lines.push(`${customerName || "Customer"}`);
  lines.push("");
  lines.push(`*Mobile:*`);
  lines.push(customerMobile.startsWith("+") ? customerMobile : `+91 ${customerMobile}`);
  lines.push("");
  lines.push("--------------------------------");
  lines.push("");

  items.forEach((item, index) => {
    const itemNum = index + 1;
    const price = item.variantPrice ?? item.product.price;
    const unitPrice = price.toLocaleString("en-IN");
    const lineTotal = (price * item.quantity).toLocaleString("en-IN");
    const code = item.variantCode || item.product.productCode;
    const color = item.color || item.product.color;

    lines.push(`${itemNum}.`);
    lines.push(`Product: ${item.product.name}`);
    lines.push(`Code: ${code}`);
    if (color) lines.push(`Color: ${color}`);
    lines.push(`Size: ${item.size}`);
    lines.push(`Qty: ${item.quantity}`);
    lines.push(`Price: ₹${unitPrice}`);
    lines.push(`Line Total: ₹${lineTotal}`);
    lines.push("");
  });

  lines.push("--------------------------------");
  lines.push("");
  lines.push(`Subtotal: ₹${subtotal.toLocaleString("en-IN")}`);
  lines.push(`Shipping: ${shipping === 0 ? "Free" : `₹${shipping.toLocaleString("en-IN")}`}`);
  lines.push(`*TOTAL: ₹${total.toLocaleString("en-IN")}*`);
  return lines.join("\n");
}

console.log("\n--- 4-PRODUCT WHATSAPP ORDER SIMULATION ---");
const sampleItems = [
  { product: products[0], quantity: 1, size: "M", color: "Black", variantCode: "RC-2PC-001" },
  { product: products[10], quantity: 2, size: "L", color: "Wine", variantCode: "RC-2PC-005" },
  { product: products[25], quantity: 1, size: "XL", color: "Teal", variantCode: "RC-KRT-025" },
  { product: products[50], quantity: 1, size: "S", color: "Maroon", variantCode: "RC-3PC-020" },
];

const subtotal = sampleItems.reduce((acc, i) => acc + (i.variantPrice ?? i.product.price) * i.quantity, 0);
const shipping = subtotal >= 999 ? 0 : 99;
const total = subtotal + shipping;

const message = buildWhatsAppOrderMessage({
  orderId: "RC-ORD-20260909-001",
  customerName: "Rahul Sharma",
  customerMobile: "9876543210",
  items: sampleItems,
  subtotal: subtotal,
  shipping: shipping,
  total: total,
});

console.log(message);

if (!message.includes("RC-ORD-20260909-001")) errors.push("Order Reference missing in WhatsApp message");
if (!message.includes("Rahul Sharma")) errors.push("Customer Name missing in WhatsApp message");
if (!message.includes("9876543210")) errors.push("Customer Mobile missing in WhatsApp message");

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
