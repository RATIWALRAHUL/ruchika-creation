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
  productColor?: string;
  productCategory?: string | string[];
  queryText?: string;
}

/**
 * Builds a clean, highly structured and formal WhatsApp order message
 * sent by the customer directly to the seller with exact product codes.
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

  // Salutation & Header
  lines.push(`*${RUCHIKA_BRAND_NAME} — New Order Request*`);
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
  lines.push(
    customerMobile.startsWith("+") ? customerMobile : `+91 ${customerMobile}`
  );
  lines.push("");
  lines.push("--------------------------------");
  lines.push("");

  // Items List
  items.forEach((item, index) => {
    const itemNum = index + 1;
    const price = item.variantPrice ?? item.product.price;
    const unitPrice = price.toLocaleString("en-IN");
    const lineTotal = (price * item.quantity).toLocaleString("en-IN");
    const code = item.variantCode || item.product.productCode || item.product.id.toUpperCase();
    const color = item.color || item.product.color;
    const typeLabel =
      item.product.productType === "SINGLE_PIECE"
        ? "Single Piece"
        : item.product.productType === "TWO_PIECE"
        ? "Two Piece"
        : item.product.premiumTier
        ? "Premium Three Piece"
        : "Three Piece";

    lines.push(`${itemNum}.`);
    lines.push(`Product: ${item.product.name}`);
    lines.push(`Code: ${code}`);
    lines.push(`Type: ${typeLabel}`);
    if (color) {
      lines.push(`Color: ${color}`);
    }
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
  lines.push("");

  if (customerQuery && customerQuery.trim()) {
    lines.push(`*Special Instructions / Query:*`);
    lines.push(`"${customerQuery.trim()}"`);
    lines.push("");
  }

  lines.push("Please confirm availability and order details.");
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
    productColor,
    productCategory,
    queryText,
  } = payload;

  const lines: string[] = [];

  lines.push(`Hello ${RUCHIKA_BRAND_NAME},`);
  lines.push("");

  if (productName) {
    lines.push("I would like to inquire about the following product:");
    lines.push("");
    lines.push("*PRODUCT DETAILS*");
    lines.push("--------------------------------");
    lines.push(`- Product: *${productName}*`);
    if (productCode) {
      lines.push(`- Product Code: *${productCode}*`);
    }
    if (productColor) {
      lines.push(`- Color: ${productColor}`);
    }
    if (productSize) {
      lines.push(`- Size: ${productSize}`);
    }
    if (productPrice) {
      lines.push(`- Price: ₹${productPrice.toLocaleString("en-IN")}`);
    }
    if (productCategory) {
      const catFormatted = Array.isArray(productCategory)
        ? productCategory.join(", ")
        : productCategory;
      lines.push(`- Category: ${catFormatted}`);
    }
    lines.push("");
  } else {
    lines.push("I have a query regarding your ethnicwear collection:");
    lines.push("");
  }

  if (queryText && queryText.trim()) {
    lines.push("*MY QUERY:*");
    lines.push(`"${queryText.trim()}"`);
    lines.push("");
  }

  if (customerName || customerMobile) {
    lines.push("--------------------------------");
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

  lines.push("--------------------------------");
  lines.push("Please provide the availability and details at your earliest convenience.");
  lines.push("");
  lines.push("Thank you,");
  lines.push(customerName || "Customer");

  const cleanNumber = RUCHIKA_WHATSAPP_NUMBER.replace(/\D/g, "");
  const encodedText = encodeURIComponent(lines.join("\n"));

  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}
