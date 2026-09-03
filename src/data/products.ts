export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  price: number;
  compareAtPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  hoverImage?: string;
  badge?: string;
  description: string;
  details?: string[];
  fabric?: string;
  available: boolean;
  isNewArrival?: boolean;
  isBestseller?: boolean;
}

export const products: Product[] = [
  {
    id: "rc-001",
    name: "Black Embroidered Kurti",
    slug: "black-embroidered-kurti",
    category: "Embroidered Collection",
    price: 1499,
    compareAtPrice: 1999,
    rating: 5,
    reviewCount: 32,
    image: "/images/kurti-black-back.jpg",
    hoverImage: "/images/kurti-black-front.jpg",
    badge: "NEW",
    description: "Elegant black kurti with intricate back embroidery",
    details: [
      "Crafted from premium breathable rayon-cotton blend",
      "Hand-guided silver-thread paisley medallion on back yoke",
      "Mandarin collar with delicate button placket",
      "Calf-length straight silhouette with side slits",
    ],
    fabric: "Premium Cotton Rayon",
    available: true,
    isNewArrival: true,
    isBestseller: true,
  },
  {
    id: "rc-002",
    name: "Maroon Embroidered Kurti",
    slug: "maroon-embroidered-kurti",
    category: "Festive Edit",
    price: 1299,
    compareAtPrice: 1799,
    rating: 5,
    reviewCount: 24,
    image: "/images/kurti-maroon-festive.jpg",
    hoverImage: "/images/kurti-maroon-festive.jpg",
    badge: "NEW",
    description: "Festive maroon kurti with thread embroidery",
    details: [
      "Rich deep maroon shade in royal modal silk blend",
      "Intricate floral neck embroidery inspired by Mughal motifs",
      "Three-quarter sleeves with golden border detailing",
      "Includes matching dupatta with gold zari accents",
    ],
    fabric: "Modal Silk Blend",
    available: true,
    isNewArrival: true,
    isBestseller: true,
  },
  {
    id: "rc-003",
    name: "Ivory Chikankari Kurti",
    slug: "ivory-chikankari-kurti",
    category: "Everyday Kurtis",
    price: 1399,
    compareAtPrice: 1899,
    rating: 5,
    reviewCount: 18,
    image: "/images/kurti-ivory-chikankari.jpg",
    hoverImage: "/images/kurti-ivory-chikankari.jpg",
    badge: "NEW",
    description: "Chikankari embroidered ivory kurti for a refined look",
    details: [
      "Handcrafted shadow-work Chikankari on pure mulmul cotton",
      "Featherlight, ultra-breathable for all-day royal comfort",
      "Subtle botanical bootas woven across the bodice",
      "Hand-finished lace hemline and button loops",
    ],
    fabric: "100% Pure Mulmul Cotton",
    available: true,
    isNewArrival: true,
    isBestseller: true,
  },
  {
    id: "rc-004",
    name: "Olive Printed Kurti",
    slug: "olive-printed-kurti",
    category: "Everyday Kurtis",
    price: 999,
    compareAtPrice: 1499,
    rating: 5,
    reviewCount: 15,
    image: "/images/kurti-olive-printed.jpg",
    hoverImage: "/images/kurti-olive-printed.jpg",
    badge: "NEW",
    description: "Subtle printed kurti for everyday elegance",
    details: [
      "Jaipuri handblock-inspired geometric motifs on olive moss",
      "Neat pintuck yoke with wooden decorative buttons",
      "Naturally dyed organic cotton weave",
      "Ideal for workwear, casual meetings, and festive lunches",
    ],
    fabric: "Organic Slub Cotton",
    available: true,
    isNewArrival: true,
    isBestseller: true,
  },
  {
    id: "rc-005",
    name: "Black Straight Kurti",
    slug: "black-straight-kurti",
    category: "Embroidered Collection",
    price: 1199,
    compareAtPrice: 1699,
    rating: 5,
    reviewCount: 21,
    image: "/images/kurti-black-front.jpg",
    hoverImage: "/images/kurti-black-back.jpg",
    badge: "NEW",
    description: "Comfortable straight kurti with elegant embroidery",
    details: [
      "Sophisticated front yoke embroidery with micro-sequins",
      "Straight classic fit flattering all body silhouettes",
      "Comfortable breathable all-weather drape",
      "Pair with cigarette pants or palazzo bottoms",
    ],
    fabric: "Comfort Viscose Cotton",
    available: true,
    isNewArrival: true,
    isBestseller: true,
  },
  {
    id: "rc-006",
    name: "Heritage Zari Thread Kurti",
    slug: "heritage-zari-thread-kurti",
    category: "Festive Edit",
    price: 1599,
    compareAtPrice: 2199,
    rating: 5,
    reviewCount: 42,
    image: "/images/kurti-maroon-festive.jpg",
    hoverImage: "/images/kurti-black-back.jpg",
    badge: "HOT",
    description: "Luxe festive kurti with authentic antique zari hand embroidery",
    details: [
      "Royal Rajasthan palace collection highlight",
      "Antique gold metallic zari thread craft",
      "Subtle side slit accents with gota patti borders",
    ],
    fabric: "Chanderi Silk Blend",
    available: true,
    isNewArrival: false,
    isBestseller: true,
  },
  {
    id: "rc-007",
    name: "Royal Palace Chikankari Tunic",
    slug: "royal-palace-chikankari-tunic",
    category: "Everyday Kurtis",
    price: 1249,
    compareAtPrice: 1650,
    rating: 5,
    reviewCount: 29,
    image: "/images/kurti-ivory-chikankari.jpg",
    hoverImage: "/images/kurti-olive-printed.jpg",
    badge: "TOP",
    description: "Timeless ivory silhouette with handcrafted floral motifs",
    details: [
      "Artisan woven Lucknowi chikan work",
      "Ultra-soft breathable feel for summer warmth",
      "Refined neckline with pearl buttons",
    ],
    fabric: "Cotton Mulmul",
    available: true,
    isNewArrival: false,
    isBestseller: true,
  },
];

export const newArrivals = products.filter((p) => p.isNewArrival);
export const bestsellers = products.filter((p) => p.isBestseller);
