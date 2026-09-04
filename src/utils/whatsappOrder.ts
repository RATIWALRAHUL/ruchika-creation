import { RUCHIKA_WHATSAPP_NUMBER, RUCHIKA_BRAND_NAME } from "@/config/whatsapp";
import { CartItem } from "@/context/ShopContext";

export interface WhatsAppOrderPayload {
  orderId?: string;
  customerName: string;
  customerMobile: string;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
  customerQuery?: string;
}

export interface WhatsAppQueryPayload {
  customerName?: string;
  customerMobile?: string;
  productName?: string;
  productCode?: string;
  productPrice?: number;
  productSize?: string;
  productCategory?: string;
  queryText?: string;
}

/**
 * Builds a clean, highly structured and formal WhatsApp order message
 * sent by the customer directly to the seller.
 */
export function buildWhatsAppOrderMessage(payload: WhatsAppOrderPayload): string {
  const {
    orderId,
    customerName,
    customerMobile,
    items,
    subtotal,
    shipping,
    total,
    customerQuery,
  } = payload;

  const lines: string[] = [];

  // Salutation to Seller
  lines.push(`Hello ${RUCHIKA_BRAND_NAME},`);
  lines.push("");
  lines.push("I would like to place an order for the following items:");
  lines.push("");

  // Order Header & Ref
  lines.push("*ORDER DETAILS*");
  lines.push("----------------------------------------");
  if (orderId) {
    lines.push(`*Order Reference:* #${orderId}`);
  }
  lines.push(`*Customer Name:* ${customerName || "Customer"}`);
  lines.push(
    `*Contact Mobile:* ${
      customerMobile.startsWith("+") ? customerMobile : `+91 ${customerMobile}`
    }`
  );
  lines.push("");

  // Items List
  lines.push(`*SELECTED ITEMS (${items.length}):*`);
  lines.push("----------------------------------------");

  items.forEach((item, index) => {
    const itemNum = index + 1;
    const unitPrice = item.product.price.toLocaleString("en-IN");
    const lineTotal = (item.product.price * item.quantity).toLocaleString("en-IN");
    const itemCode = (item.product.id || "").toUpperCase();

    lines.push(`${itemNum}. *${item.product.name}*`);
    if (itemCode) {
      lines.push(`   - Item Code: ${itemCode}`);
    }
    lines.push(`   - Size: ${item.size}`);
    lines.push(`   - Quantity: ${item.quantity}`);
    lines.push(`   - Price: Rs. ${lineTotal}${item.quantity > 1 ? ` (Rs. ${unitPrice} each)` : ""}`);
    lines.push("");
  });

  // Financial Breakdown
  lines.push("----------------------------------------");
  lines.push("*BILLING SUMMARY:*");
  lines.push(`- Subtotal: Rs. ${subtotal.toLocaleString("en-IN")}`);
  lines.push(
    `- Shipping: ${
      shipping === 0 ? "Free (Above Rs. 999)" : `Rs. ${shipping.toLocaleString("en-IN")}`
    }`
  );
  lines.push(`- *Total Payable: Rs. ${total.toLocaleString("en-IN")}*`);
  lines.push("");

  // Special Note or Custom Query
  if (customerQuery && customerQuery.trim()) {
    lines.push("*SPECIAL INSTRUCTIONS / QUERY:*");
    lines.push(`"${customerQuery.trim()}"`);
    lines.push("");
  }

  // Actionable Closing
  lines.push("----------------------------------------");
  lines.push(
    "Please confirm item availability, estimated dispatch time, and payment details (UPI / Bank Transfer / COD)."
  );
  lines.push("");
  lines.push("Thank you,");
  lines.push(customerName || "Customer");

  return lines.join("\n");
}

/**
 * Generates the clean, safely URL-encoded WhatsApp link for orders.
 */
export function createWhatsAppOrderUrl(payload: WhatsAppOrderPayload): string {
  const message = buildWhatsAppOrderMessage(payload);
  const encodedText = encodeURIComponent(message);
  const cleanNumber = RUCHIKA_WHATSAPP_NUMBER.replace(/\D/g, "");

  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}

/**
 * Generates a formal, clean WhatsApp inquiry message and URL.
 */
export function createWhatsAppQueryUrl(payload: WhatsAppQueryPayload): string {
  const {
    customerName,
    customerMobile,
    productName,
    productCode,
    productPrice,
    productSize,
    productCategory,
    queryText,
  } = payload;

  const lines: string[] = [];

  // Salutation
  lines.push(`Hello ${RUCHIKA_BRAND_NAME},`);
  lines.push("");

  if (productName) {
    lines.push("I would like to inquire about the following product:");
    lines.push("");
    lines.push("*PRODUCT DETAILS*");
    lines.push("----------------------------------------");
    lines.push(`- Product: *${productName}*`);
    if (productCode) {
      lines.push(`- Item Code: ${productCode.toUpperCase()}`);
    }
    if (productSize) {
      lines.push(`- Size: ${productSize}`);
    }
    if (productPrice) {
      lines.push(`- Price: Rs. ${productPrice.toLocaleString("en-IN")}`);
    }
    if (productCategory) {
      lines.push(`- Category: ${productCategory}`);
    }
    lines.push("");
  } else {
    lines.push("I have a query regarding your ethnicwear collection:");
    lines.push("");
  }

  // Customer Query
  if (queryText && queryText.trim()) {
    lines.push("*MY QUERY:*");
    lines.push(`"${queryText.trim()}"`);
    lines.push("");
  }

  // Customer Info
  if (customerName || customerMobile) {
    lines.push("----------------------------------------");
    lines.push("*CUSTOMER DETAILS:*");
    if (customerName) lines.push(`- Name: ${customerName}`);
    if (customerMobile) {
      lines.push(
        `- Mobile: ${
          customerMobile.startsWith("+")
            ? customerMobile
            : `+91 ${customerMobile}`
        }`
      );
    }
    lines.push("");
  }

  // Closing
  lines.push("----------------------------------------");
  lines.push("Please provide the availability and details at your earliest convenience.");
  lines.push("");
  lines.push("Thank you,");
  lines.push(customerName || "Customer");

  const cleanNumber = RUCHIKA_WHATSAPP_NUMBER.replace(/\D/g, "");
  const encodedText = encodeURIComponent(lines.join("\n"));

  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}
