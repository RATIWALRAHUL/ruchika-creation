import { RUCHIKA_WHATSAPP_NUMBER } from "@/config/whatsapp";
import { CartItem } from "@/context/ShopContext";

export interface WhatsAppOrderPayload {
  customerName: string;
  customerMobile: string;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
}

/**
 * Builds the structured WhatsApp order message matching Section 10 & 11 of the specification.
 */
export function buildWhatsAppOrderMessage(payload: WhatsAppOrderPayload): string {
  const { customerName, customerMobile, items, subtotal, shipping, total } =
    payload;

  const lines: string[] = [];

  lines.push("Hello Ruchika Creation,");
  lines.push("");
  lines.push("I would like to place an order.");
  lines.push("");
  lines.push("Customer:");
  lines.push(customerName || "Customer");
  lines.push("");
  lines.push("Mobile:");
  lines.push(customerMobile.startsWith("+") ? customerMobile : `+91 ${customerMobile}`);
  lines.push("");
  lines.push("ORDER DETAILS");
  lines.push("");

  items.forEach((item, index) => {
    lines.push(`${index + 1}. ${item.product.name}`);
    lines.push(`   Size: ${item.size}`);
    lines.push(`   Qty: ${item.quantity}`);
    lines.push(`   Price: ₹${item.product.price.toLocaleString("en-IN")}`);
    lines.push("");
  });

  lines.push("--------------------------------");
  lines.push("");
  lines.push(`Subtotal: ₹${subtotal.toLocaleString("en-IN")}`);
  lines.push(`Shipping: ${shipping === 0 ? "Free" : `₹${shipping.toLocaleString("en-IN")}`}`);
  lines.push(`TOTAL: ₹${total.toLocaleString("en-IN")}`);
  lines.push("");
  lines.push("Please confirm availability and order details.");
  lines.push("");
  lines.push("Thank you,");
  lines.push("Ruchika Creation");

  return lines.join("\n");
}

/**
 * Generates the clean, safely URL-encoded WhatsApp link.
 */
export function createWhatsAppOrderUrl(payload: WhatsAppOrderPayload): string {
  const message = buildWhatsAppOrderMessage(payload);
  const encodedText = encodeURIComponent(message);
  const cleanNumber = RUCHIKA_WHATSAPP_NUMBER.replace(/\D/g, "");

  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}
