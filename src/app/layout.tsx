import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "./globals.css";
import { ShopProvider } from "@/context/ShopContext";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/ui/CartDrawer";
import WishlistDrawer from "@/components/ui/WishlistDrawer";
import SearchModal from "@/components/ui/SearchModal";
import QuickViewModal from "@/components/ui/QuickViewModal";
import ProfileModal from "@/components/ui/ProfileModal";
import FloatingWhatsAppButton from "@/components/ui/FloatingWhatsAppButton";

// Prevent FontAwesome from adding its CSS automatically since we imported it above
config.autoAddCss = false;

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ruchika Creation | Premium Indian Ethnicwear & Kurtis",
  description:
    "Discover beautifully crafted kurtis that bring together Indian tradition, exquisite craftsmanship, comfort and contemporary style. Designed and crafted in India.",
  keywords: [
    "Ruchika Creation",
    "Indian Ethnicwear",
    "Kurtis",
    "Embroidered Kurti",
    "Chikankari Kurti",
    "Festive Ethnicwear",
    "Women Fashion India",
  ],
  authors: [{ name: "Ruchika Creation" }],
  icons: {
    icon: [
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#FCFAF7] text-[#514744] selection:bg-[#641C22] selection:text-white">
        <ShopProvider>
          {/* Global Announcement Strip */}
          <AnnouncementBar />

          {/* Global Navigation Header */}
          <Header />

          {/* Page Content */}
          <main className="flex-1">
            {children}
          </main>

          {/* Global Heritage Footer */}
          <Footer />

          {/* Global Drawers & Modals */}
          <CartDrawer />
          <WishlistDrawer />
          <SearchModal />
          <QuickViewModal />
          <ProfileModal />
          <FloatingWhatsAppButton />
        </ShopProvider>
      </body>
    </html>
  );
}

