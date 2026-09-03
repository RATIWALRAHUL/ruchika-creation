# Ruchika Creation — Luxury Indian Ethnicwear & Kurtis E-Commerce

[![Next.js](https://img.shields.io/badge/Next.js-16.3.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

An editorial, luxury Indian ethnicwear e-commerce storefront for **Ruchika Creation**, celebrating Rajasthani craftsmanship, contemporary silhouettes, and authentic artisanal kurtis.

---

## ✨ Key Features

- 🏛️ **Editorial Hero Section**: Full-bleed authentic photography, traditional Jaipur mandala watermarks, italicized Cormorant Garamond typography, and integrated trust features.
- 🛍️ **Interactive Shopping Bag & Wishlist**: Slide-out cart with free shipping progress bar (threshold: ₹999), size selectors, quantity controls, and persistent local storage.
- 🔍 **Real-Time Instant Search**: Live fuzzy search modal filtering kurtis by category, fabric, color, and price.
- 👁️ **Product Quick View Modal**: Fast product inspection with image galleries, size picker, craft details, and direct add-to-bag actions.
- 🔐 **Luxury Login & Sign Up Modal**:
  - Member access modal with tabbed Sign In and Create Account screens.
  - Password and Mobile SMS OTP login alternatives.
  - Quick Demo test login (`Pooja Sharma`).
  - Forgot password / reset instructions flow.
  - Header user status with dropdown menu (My Orders, Saved Kurtis, Sign Out).
- 🏰 **Heritage Rajasthani Footer**:
  - Double gold concentric crest vector logo with centered diamond underline (`──◇──`).
  - Luminous gold Jaipur City Palace architectural skyline background.
  - Dedicated 6-column editorial layout with zero text wrapping.
  - 3-part bottom service bar (Free Shipping Above ₹999 & Easy 7-Day Returns).
- 📱 **100% Responsive Design**: Fluid typography and layout engineered for mobile (320px+), tablet, desktop, and ultra-wide displays.

---

## 🎨 Design System & Palette

| Token | Hex | Role |
| :--- | :--- | :--- |
| **Deep Burgundy** | `#4B151A` | Royal footer background, accent elements |
| **Primary Maroon** | `#641C22` | Primary buttons, active tabs, brand accents |
| **Antique Gold** | `#D8BF96` | Headings, icons, skyline architectural line art |
| **Muted Gold** | `#B18A52` | Star accents, dividers, subtle borders |
| **Warm Ivory** | `#FCFAF7` | Page background, cards, light containers |
| **Editorial Cream** | `#F5EDE5` | Footer typography, secondary text on dark |
| **Rich Charcoal** | `#241D1B` | Primary headings, dark body text |

### Typography
- **Headings & Accents**: `Cormorant Garamond` (Serif)
- **Body & Navigation**: `DM Sans` (Sans-Serif)

---

## 📁 Project Structure

```text
ruchika-creation/
├── public/
│   └── images/                 # Optimized product photos, logos & skyline assets
├── src/
│   ├── app/
│   │   ├── globals.css         # Design system tokens & utility classes
│   │   ├── layout.tsx          # Root layout with font definitions & global modals
│   │   └── page.tsx            # Ruchika Creation homepage assembly
│   ├── components/
│   │   ├── home/               # Hero, New Arrivals, Bestsellers, Craftsmanship, etc.
│   │   ├── layout/             # AnnouncementBar, Header, Footer
│   │   └── ui/                 # BrandLogo, ProductCard, CartDrawer, AuthModal, etc.
│   ├── context/
│   │   └── ShopContext.tsx     # Cart, Wishlist, Search, and Auth state management
│   └── data/
│       ├── products.ts         # Catalog of handcrafted kurtis & metadata
│       └── collections.ts      # Curated ethnicwear collections
├── .gitignore
├── package.json
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.18.0 or higher
- **npm**, **yarn**, or **pnpm**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/RATIWALRAHUL/ruchika-creation.git
   cd ruchika-creation
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Production Build
```bash
npm run build
npm run start
```

---

## 📄 License

This project is proprietary and confidential to **Ruchika Creation**. All rights reserved.
