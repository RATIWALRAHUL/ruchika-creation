export type ProductType =
  | "SINGLE_PIECE"
  | "TWO_PIECE"
  | "THREE_PIECE"
  | "UNCLASSIFIED";

export type ProductCategory =
  | "Kurtis"
  | "Two Piece Sets"
  | "Three Piece Sets"
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
  primaryCategory?: string;
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

export const COLOR_HEX_MAP: Record<string, string> = {
  "Black": "#1A1A1A",
  "Maroon": "#6B1D2F",
  "Ivory": "#FDFBF7",
  "Cream": "#FFFDD0",
  "Wine": "#58111A",
  "Burgundy": "#4A0E17",
  "Rust": "#B7410E",
  "Mustard": "#D4A017",
  "Olive": "#556B2F",
  "Sage": "#87A96B",
  "Teal": "#008080",
  "Navy": "#000080",
  "Powder Blue": "#B0E0E6",
  "Blush": "#DE5D83",
  "Pink": "#FFC0CB",
  "Peach": "#FFE5B4",
  "Beige": "#F5F5DC",
  "Brown": "#654321",
  "Terracotta": "#E2725B",
  "Emerald Green": "#50C878",
  "Royal Blue": "#4169E1",
  "Dusty Rose": "#DCAE96"
};

export const products: Product[] = [
  {
    "id": "rc-2pc-001",
    "productCode": "RC-2PC-001",
    "slug": "royal-blue-botanical-printed-co-ord-set-rc-2pc-001",
    "name": "Royal Blue Botanical Printed Co-ord Set",
    "shortDescription": "Curated 2-piece coordinated royal blue kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in royal blue, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Printed",
      "Everyday",
      "New Arrivals"
    ],
    "productType": "TWO_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Royal Blue",
    "style": [
      "Printed",
      "Contemporary"
    ],
    "images": [
      "/images/kurti/kurti-coord-blue.png"
    ],
    "primaryImage": "/images/kurti/kurti-coord-blue.png",
    "image": "/images/kurti/kurti-coord-blue.png",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "NEW",
    "available": true,
    "isFeatured": true,
    "featured": true,
    "isNewArrival": true,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-09-06T06:17:12.716Z"
  },
  {
    "id": "rc-krt-001",
    "productCode": "RC-KRT-001",
    "slug": "black-paisley-embroidered-kurti-rc-krt-001",
    "name": "Black Paisley Embroidered Kurti",
    "shortDescription": "Graceful standalone black kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece black kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Embroidered",
      "Festive",
      "New Arrivals"
    ],
    "productType": "SINGLE_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Black",
    "style": [
      "Embroidered",
      "Traditional",
      "Festive"
    ],
    "images": [
      "/images/kurti/kurti-hero-8678.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-hero-8678.jpg",
    "image": "/images/kurti/kurti-hero-8678.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "NEW",
    "available": true,
    "isFeatured": true,
    "featured": true,
    "isNewArrival": true,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-09-05T06:17:12.721Z"
  },
  {
    "id": "rc-3pc-001",
    "productCode": "RC-3PC-001",
    "slug": "maroon-heritage-embroidered-three-piece-set-rc-3pc-001",
    "name": "Maroon Heritage Embroidered Three-Piece Set",
    "shortDescription": "Complete 3-piece maroon festive ensemble with kurti, bottom, and dupatta.",
    "description": "An exquisite three-piece festive ensemble in maroon, featuring a richly detailed kurti, coordinated trousers, and a matching dupatta designed for celebratory elegance.",
    "primaryCategory": "Three Piece Sets",
    "category": [
      "Three Piece Sets",
      "Festive",
      "Embroidered",
      "New Arrivals"
    ],
    "productType": "THREE_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Maroon",
    "style": [
      "Embroidered",
      "Zari Work",
      "Festive"
    ],
    "images": [
      "/images/kurti/kurti-page-2.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-2.jpg",
    "image": "/images/kurti/kurti-page-2.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "NEW",
    "available": true,
    "isFeatured": true,
    "featured": true,
    "isNewArrival": true,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": true,
    "createdAt": "2026-09-04T06:17:12.721Z"
  },
  {
    "id": "rc-3pc-002",
    "productCode": "RC-3PC-002",
    "slug": "black-royal-zari-embroidered-three-piece-set-rc-3pc-002",
    "name": "Black Royal Zari Embroidered Three-Piece Set",
    "shortDescription": "Complete 3-piece black festive ensemble with kurti, bottom, and dupatta.",
    "description": "An exquisite three-piece festive ensemble in black, featuring a richly detailed kurti, coordinated trousers, and a matching dupatta designed for celebratory elegance.",
    "primaryCategory": "Three Piece Sets",
    "category": [
      "Three Piece Sets",
      "Festive",
      "Embroidered",
      "New Arrivals"
    ],
    "productType": "THREE_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Black",
    "style": [
      "Embroidered",
      "Zari Work",
      "Festive"
    ],
    "images": [
      "/images/kurti/kurti-page-3.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-3.jpg",
    "image": "/images/kurti/kurti-page-3.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "NEW",
    "available": true,
    "isFeatured": true,
    "featured": true,
    "isNewArrival": true,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": true,
    "createdAt": "2026-09-03T06:17:12.721Z"
  },
  {
    "id": "rc-3pc-003",
    "productCode": "RC-3PC-003",
    "slug": "peach-floral-printed-three-piece-kurti-set-rc-3pc-003",
    "name": "Peach Floral Printed Three-Piece Kurti Set",
    "shortDescription": "Complete 3-piece peach festive ensemble with kurti, bottom, and dupatta.",
    "description": "An exquisite three-piece festive ensemble in peach, featuring a richly detailed kurti, coordinated trousers, and a matching dupatta designed for celebratory elegance.",
    "primaryCategory": "Three Piece Sets",
    "category": [
      "Three Piece Sets",
      "Festive",
      "Printed",
      "New Arrivals",
      "Best Sellers"
    ],
    "productType": "THREE_PIECE",
    "price": 599,
    "compareAtPrice": 1199,
    "color": "Peach",
    "style": [
      "Printed",
      "Festive",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-4.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-4.jpg",
    "image": "/images/kurti/kurti-page-4.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "NEW",
    "available": true,
    "isFeatured": true,
    "featured": true,
    "isNewArrival": true,
    "isBestSeller": true,
    "isBestseller": true,
    "premiumTier": false,
    "createdAt": "2026-09-02T06:17:12.721Z"
  },
  {
    "id": "rc-krt-002",
    "productCode": "RC-KRT-002",
    "slug": "ivory-intricate-threadwork-kurti-rc-krt-002",
    "name": "Ivory Intricate Threadwork Kurti",
    "shortDescription": "Graceful standalone ivory kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece ivory kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered",
      "New Arrivals"
    ],
    "productType": "SINGLE_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Ivory",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-5.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-5.jpg",
    "image": "/images/kurti/kurti-page-5.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "NEW",
    "available": true,
    "isFeatured": true,
    "featured": true,
    "isNewArrival": true,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-09-01T06:17:12.721Z"
  },
  {
    "id": "rc-krt-003",
    "productCode": "RC-KRT-003",
    "slug": "sage-traditional-motif-printed-kurti-rc-krt-003",
    "name": "Sage Traditional Motif Printed Kurti",
    "shortDescription": "Graceful standalone sage kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece sage kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Printed",
      "New Arrivals"
    ],
    "productType": "SINGLE_PIECE",
    "price": 699,
    "compareAtPrice": 1399,
    "color": "Sage",
    "style": [
      "Printed",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-6.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-6.jpg",
    "image": "/images/kurti/kurti-page-6.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "NEW",
    "available": true,
    "isFeatured": true,
    "featured": true,
    "isNewArrival": true,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-08-31T06:17:12.721Z"
  },
  {
    "id": "rc-krt-004",
    "productCode": "RC-KRT-004",
    "slug": "beige-chikankari-inspired-kurti-rc-krt-004",
    "name": "Beige Chikankari Inspired Kurti",
    "shortDescription": "Graceful standalone beige kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece beige kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered",
      "New Arrivals"
    ],
    "productType": "SINGLE_PIECE",
    "price": 699,
    "compareAtPrice": 1399,
    "color": "Beige",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-7.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-7.jpg",
    "image": "/images/kurti/kurti-page-7.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "NEW",
    "available": true,
    "isFeatured": true,
    "featured": true,
    "isNewArrival": true,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-08-30T06:17:12.721Z"
  },
  {
    "id": "rc-2pc-002",
    "productCode": "RC-2PC-002",
    "slug": "cream-paisley-embroidered-kurti-set-rc-2pc-002",
    "name": "Cream Paisley Embroidered Kurti Set",
    "shortDescription": "Curated 2-piece coordinated cream kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in cream, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Embroidered",
      "New Arrivals"
    ],
    "productType": "TWO_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Cream",
    "style": [
      "Embroidered",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-8.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-8.jpg",
    "image": "/images/kurti/kurti-page-8.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "NEW",
    "available": true,
    "isFeatured": true,
    "featured": true,
    "isNewArrival": true,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-08-29T06:17:12.721Z"
  },
  {
    "id": "rc-2pc-003",
    "productCode": "RC-2PC-003",
    "slug": "teal-geometric-block-printed-kurti-set-rc-2pc-003",
    "name": "Teal Geometric Block Printed Kurti Set",
    "shortDescription": "Curated 2-piece coordinated teal kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in teal, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Printed",
      "New Arrivals",
      "Best Sellers"
    ],
    "productType": "TWO_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Teal",
    "style": [
      "Printed",
      "Contemporary"
    ],
    "images": [
      "/images/kurti/kurti-page-9.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-9.jpg",
    "image": "/images/kurti/kurti-page-9.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "NEW",
    "available": true,
    "isFeatured": true,
    "featured": true,
    "isNewArrival": true,
    "isBestSeller": true,
    "isBestseller": true,
    "premiumTier": false,
    "createdAt": "2026-08-28T06:17:12.721Z"
  },
  {
    "id": "rc-3pc-004",
    "productCode": "RC-3PC-004",
    "slug": "brown-floral-printed-three-piece-kurti-set-rc-3pc-004",
    "name": "Brown Floral Printed Three-Piece Kurti Set",
    "shortDescription": "Complete 3-piece brown festive ensemble with kurti, bottom, and dupatta.",
    "description": "An exquisite three-piece festive ensemble in brown, featuring a richly detailed kurti, coordinated trousers, and a matching dupatta designed for celebratory elegance.",
    "primaryCategory": "Three Piece Sets",
    "category": [
      "Three Piece Sets",
      "Festive",
      "Printed",
      "New Arrivals"
    ],
    "productType": "THREE_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Brown",
    "style": [
      "Printed",
      "Festive",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-10.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-10.jpg",
    "image": "/images/kurti/kurti-page-10.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "NEW",
    "available": true,
    "isFeatured": true,
    "featured": true,
    "isNewArrival": true,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-08-27T06:17:12.721Z"
  },
  {
    "id": "rc-krt-005",
    "productCode": "RC-KRT-005",
    "slug": "wine-paisley-embroidered-kurti-rc-krt-005",
    "name": "Wine Paisley Embroidered Kurti",
    "shortDescription": "Graceful standalone wine kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece wine kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered",
      "New Arrivals"
    ],
    "productType": "SINGLE_PIECE",
    "price": 499,
    "compareAtPrice": 999,
    "color": "Wine",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-11.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-11.jpg",
    "image": "/images/kurti/kurti-page-11.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "NEW",
    "available": true,
    "isFeatured": true,
    "featured": true,
    "isNewArrival": true,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-08-26T06:17:12.721Z"
  },
  {
    "id": "rc-krt-006",
    "productCode": "RC-KRT-006",
    "slug": "navy-traditional-motif-printed-kurti-rc-krt-006",
    "name": "Navy Traditional Motif Printed Kurti",
    "shortDescription": "Graceful standalone navy kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece navy kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Printed",
      "New Arrivals"
    ],
    "productType": "SINGLE_PIECE",
    "price": 499,
    "compareAtPrice": 999,
    "color": "Navy",
    "style": [
      "Printed",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-12.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-12.jpg",
    "image": "/images/kurti/kurti-page-12.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "NEW",
    "available": true,
    "isFeatured": true,
    "featured": true,
    "isNewArrival": true,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-08-25T06:17:12.721Z"
  },
  {
    "id": "rc-krt-007",
    "productCode": "RC-KRT-007",
    "slug": "terracotta-classic-buti-embroidered-kurti-rc-krt-007",
    "name": "Terracotta Classic Buti Embroidered Kurti",
    "shortDescription": "Graceful standalone terracotta kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece terracotta kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered",
      "New Arrivals"
    ],
    "productType": "SINGLE_PIECE",
    "price": 699,
    "compareAtPrice": 1399,
    "color": "Terracotta",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-13.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-13.jpg",
    "image": "/images/kurti/kurti-page-13.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "NEW",
    "available": true,
    "isFeatured": true,
    "featured": true,
    "isNewArrival": true,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-08-24T06:17:12.721Z"
  },
  {
    "id": "rc-2pc-004",
    "productCode": "RC-2PC-004",
    "slug": "burgundy-paisley-embroidered-kurti-set-rc-2pc-004",
    "name": "Burgundy Paisley Embroidered Kurti Set",
    "shortDescription": "Curated 2-piece coordinated burgundy kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in burgundy, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Embroidered",
      "Best Sellers"
    ],
    "productType": "TWO_PIECE",
    "price": 499,
    "compareAtPrice": 999,
    "color": "Burgundy",
    "style": [
      "Embroidered",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-14.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-14.jpg",
    "image": "/images/kurti/kurti-page-14.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "BESTSELLER",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": true,
    "isBestseller": true,
    "premiumTier": false,
    "createdAt": "2026-08-23T06:17:12.721Z"
  },
  {
    "id": "rc-2pc-005",
    "productCode": "RC-2PC-005",
    "slug": "powder-blue-abstract-block-printed-kurti-set-rc-2pc-005",
    "name": "Powder Blue Abstract Block Printed Kurti Set",
    "shortDescription": "Curated 2-piece coordinated powder blue kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in powder blue, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Printed"
    ],
    "productType": "TWO_PIECE",
    "price": 499,
    "compareAtPrice": 999,
    "color": "Powder Blue",
    "style": [
      "Printed",
      "Contemporary"
    ],
    "images": [
      "/images/kurti/kurti-page-15.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-15.jpg",
    "image": "/images/kurti/kurti-page-15.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-08-22T06:17:12.721Z"
  },
  {
    "id": "rc-3pc-005",
    "productCode": "RC-3PC-005",
    "slug": "emerald-green-floral-printed-three-piece-kurti-set-rc-3pc-005",
    "name": "Emerald Green Floral Printed Three-Piece Kurti Set",
    "shortDescription": "Complete 3-piece emerald green festive ensemble with kurti, bottom, and dupatta.",
    "description": "An exquisite three-piece festive ensemble in emerald green, featuring a richly detailed kurti, coordinated trousers, and a matching dupatta designed for celebratory elegance.",
    "primaryCategory": "Three Piece Sets",
    "category": [
      "Three Piece Sets",
      "Festive",
      "Printed"
    ],
    "productType": "THREE_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Emerald Green",
    "style": [
      "Printed",
      "Festive",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-16.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-16.jpg",
    "image": "/images/kurti/kurti-page-16.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-08-21T06:17:12.721Z"
  },
  {
    "id": "rc-krt-008",
    "productCode": "RC-KRT-008",
    "slug": "rust-intricate-threadwork-kurti-rc-krt-008",
    "name": "Rust Intricate Threadwork Kurti",
    "shortDescription": "Graceful standalone rust kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece rust kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered"
    ],
    "productType": "SINGLE_PIECE",
    "price": 499,
    "compareAtPrice": 999,
    "color": "Rust",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-17.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-17.jpg",
    "image": "/images/kurti/kurti-page-17.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-08-20T06:17:12.721Z"
  },
  {
    "id": "rc-krt-009",
    "productCode": "RC-KRT-009",
    "slug": "blush-traditional-motif-printed-kurti-rc-krt-009",
    "name": "Blush Traditional Motif Printed Kurti",
    "shortDescription": "Graceful standalone blush kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece blush kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Printed"
    ],
    "productType": "SINGLE_PIECE",
    "price": 699,
    "compareAtPrice": 1399,
    "color": "Blush",
    "style": [
      "Printed",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-18.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-18.jpg",
    "image": "/images/kurti/kurti-page-18.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-08-19T06:17:12.721Z"
  },
  {
    "id": "rc-krt-010",
    "productCode": "RC-KRT-010",
    "slug": "black-chikankari-inspired-kurti-rc-krt-010",
    "name": "Black Chikankari Inspired Kurti",
    "shortDescription": "Graceful standalone black kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece black kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered",
      "Best Sellers"
    ],
    "productType": "SINGLE_PIECE",
    "price": 499,
    "compareAtPrice": 999,
    "color": "Black",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-19.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-19.jpg",
    "image": "/images/kurti/kurti-page-19.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "BESTSELLER",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": true,
    "isBestseller": true,
    "premiumTier": false,
    "createdAt": "2026-08-18T06:17:12.721Z"
  },
  {
    "id": "rc-2pc-006",
    "productCode": "RC-2PC-006",
    "slug": "mustard-paisley-embroidered-kurti-set-rc-2pc-006",
    "name": "Mustard Paisley Embroidered Kurti Set",
    "shortDescription": "Curated 2-piece coordinated mustard kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in mustard, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Embroidered",
      "New Arrivals"
    ],
    "productType": "TWO_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Mustard",
    "style": [
      "Embroidered",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-20.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-20.jpg",
    "image": "/images/kurti/kurti-page-20.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "NEW",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": true,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-08-17T06:17:12.721Z"
  },
  {
    "id": "rc-2pc-007",
    "productCode": "RC-2PC-007",
    "slug": "pink-ethnic-floral-printed-kurti-set-rc-2pc-007",
    "name": "Pink Ethnic Floral Printed Kurti Set",
    "shortDescription": "Curated 2-piece coordinated pink kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in pink, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Printed"
    ],
    "productType": "TWO_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Pink",
    "style": [
      "Printed",
      "Contemporary"
    ],
    "images": [
      "/images/kurti/kurti-page-21.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-21.jpg",
    "image": "/images/kurti/kurti-page-21.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-08-16T06:17:12.721Z"
  },
  {
    "id": "rc-3pc-006",
    "productCode": "RC-3PC-006",
    "slug": "maroon-floral-printed-three-piece-kurti-set-rc-3pc-006",
    "name": "Maroon Floral Printed Three-Piece Kurti Set",
    "shortDescription": "Complete 3-piece maroon festive ensemble with kurti, bottom, and dupatta.",
    "description": "An exquisite three-piece festive ensemble in maroon, featuring a richly detailed kurti, coordinated trousers, and a matching dupatta designed for celebratory elegance.",
    "primaryCategory": "Three Piece Sets",
    "category": [
      "Three Piece Sets",
      "Festive",
      "Printed"
    ],
    "productType": "THREE_PIECE",
    "price": 899,
    "compareAtPrice": 1699,
    "color": "Maroon",
    "style": [
      "Printed",
      "Festive",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-31.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-31.jpg",
    "image": "/images/kurti/kurti-page-31.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-08-15T06:17:12.721Z"
  },
  {
    "id": "rc-krt-011",
    "productCode": "RC-KRT-011",
    "slug": "olive-paisley-embroidered-kurti-rc-krt-011",
    "name": "Olive Paisley Embroidered Kurti",
    "shortDescription": "Graceful standalone olive kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece olive kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered"
    ],
    "productType": "SINGLE_PIECE",
    "price": 899,
    "compareAtPrice": 1699,
    "color": "Olive",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-32.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-32.jpg",
    "image": "/images/kurti/kurti-page-32.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-08-14T06:17:12.721Z"
  },
  {
    "id": "rc-krt-012",
    "productCode": "RC-KRT-012",
    "slug": "peach-traditional-motif-printed-kurti-rc-krt-012",
    "name": "Peach Traditional Motif Printed Kurti",
    "shortDescription": "Graceful standalone peach kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece peach kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Printed",
      "Best Sellers"
    ],
    "productType": "SINGLE_PIECE",
    "price": 699,
    "compareAtPrice": 1399,
    "color": "Peach",
    "style": [
      "Printed",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-33.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-33.jpg",
    "image": "/images/kurti/kurti-page-33.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "BESTSELLER",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": true,
    "isBestseller": true,
    "premiumTier": false,
    "createdAt": "2026-08-13T06:17:12.721Z"
  },
  {
    "id": "rc-krt-013",
    "productCode": "RC-KRT-013",
    "slug": "ivory-classic-buti-embroidered-kurti-rc-krt-013",
    "name": "Ivory Classic Buti Embroidered Kurti",
    "shortDescription": "Graceful standalone ivory kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece ivory kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered"
    ],
    "productType": "SINGLE_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Ivory",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-34.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-34.jpg",
    "image": "/images/kurti/kurti-page-34.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-08-12T06:17:12.721Z"
  },
  {
    "id": "rc-2pc-008",
    "productCode": "RC-2PC-008",
    "slug": "sage-paisley-embroidered-kurti-set-rc-2pc-008",
    "name": "Sage Paisley Embroidered Kurti Set",
    "shortDescription": "Curated 2-piece coordinated sage kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in sage, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Embroidered"
    ],
    "productType": "TWO_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Sage",
    "style": [
      "Embroidered",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-36.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-36.jpg",
    "image": "/images/kurti/kurti-page-36.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-08-11T06:17:12.721Z"
  },
  {
    "id": "rc-2pc-009",
    "productCode": "RC-2PC-009",
    "slug": "beige-geometric-block-printed-kurti-set-rc-2pc-009",
    "name": "Beige Geometric Block Printed Kurti Set",
    "shortDescription": "Curated 2-piece coordinated beige kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in beige, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Printed",
      "New Arrivals"
    ],
    "productType": "TWO_PIECE",
    "price": 599,
    "compareAtPrice": 1199,
    "color": "Beige",
    "style": [
      "Printed",
      "Contemporary"
    ],
    "images": [
      "/images/kurti/kurti-page-37.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-37.jpg",
    "image": "/images/kurti/kurti-page-37.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "NEW",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": true,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-08-10T06:17:12.721Z"
  },
  {
    "id": "rc-3pc-007",
    "productCode": "RC-3PC-007",
    "slug": "cream-floral-printed-three-piece-kurti-set-rc-3pc-007",
    "name": "Cream Floral Printed Three-Piece Kurti Set",
    "shortDescription": "Complete 3-piece cream festive ensemble with kurti, bottom, and dupatta.",
    "description": "An exquisite three-piece festive ensemble in cream, featuring a richly detailed kurti, coordinated trousers, and a matching dupatta designed for celebratory elegance.",
    "primaryCategory": "Three Piece Sets",
    "category": [
      "Three Piece Sets",
      "Festive",
      "Printed"
    ],
    "productType": "THREE_PIECE",
    "price": 599,
    "compareAtPrice": 1199,
    "color": "Cream",
    "style": [
      "Printed",
      "Festive",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-38.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-38.jpg",
    "image": "/images/kurti/kurti-page-38.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-08-09T06:17:12.721Z"
  },
  {
    "id": "rc-krt-014",
    "productCode": "RC-KRT-014",
    "slug": "teal-intricate-threadwork-kurti-rc-krt-014",
    "name": "Teal Intricate Threadwork Kurti",
    "shortDescription": "Graceful standalone teal kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece teal kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered",
      "Best Sellers"
    ],
    "productType": "SINGLE_PIECE",
    "price": 599,
    "compareAtPrice": 1199,
    "color": "Teal",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-39.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-39.jpg",
    "image": "/images/kurti/kurti-page-39.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "BESTSELLER",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": true,
    "isBestseller": true,
    "premiumTier": false,
    "createdAt": "2026-08-08T06:17:12.721Z"
  },
  {
    "id": "rc-krt-015",
    "productCode": "RC-KRT-015",
    "slug": "brown-traditional-motif-printed-kurti-rc-krt-015",
    "name": "Brown Traditional Motif Printed Kurti",
    "shortDescription": "Graceful standalone brown kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece brown kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Printed"
    ],
    "productType": "SINGLE_PIECE",
    "price": 599,
    "compareAtPrice": 1199,
    "color": "Brown",
    "style": [
      "Printed",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-40.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-40.jpg",
    "image": "/images/kurti/kurti-page-40.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-08-07T06:17:12.721Z"
  },
  {
    "id": "rc-krt-016",
    "productCode": "RC-KRT-016",
    "slug": "wine-chikankari-inspired-kurti-rc-krt-016",
    "name": "Wine Chikankari Inspired Kurti",
    "shortDescription": "Graceful standalone wine kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece wine kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered"
    ],
    "productType": "SINGLE_PIECE",
    "price": 599,
    "compareAtPrice": 1199,
    "color": "Wine",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-41.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-41.jpg",
    "image": "/images/kurti/kurti-page-41.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-08-06T06:17:12.721Z"
  },
  {
    "id": "rc-2pc-010",
    "productCode": "RC-2PC-010",
    "slug": "navy-paisley-embroidered-kurti-set-rc-2pc-010",
    "name": "Navy Paisley Embroidered Kurti Set",
    "shortDescription": "Curated 2-piece coordinated navy kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in navy, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Embroidered"
    ],
    "productType": "TWO_PIECE",
    "price": 599,
    "compareAtPrice": 1199,
    "color": "Navy",
    "style": [
      "Embroidered",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-42.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-42.jpg",
    "image": "/images/kurti/kurti-page-42.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-08-05T06:17:12.721Z"
  },
  {
    "id": "rc-2pc-011",
    "productCode": "RC-2PC-011",
    "slug": "terracotta-abstract-block-printed-kurti-set-rc-2pc-011",
    "name": "Terracotta Abstract Block Printed Kurti Set",
    "shortDescription": "Curated 2-piece coordinated terracotta kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in terracotta, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Printed"
    ],
    "productType": "TWO_PIECE",
    "price": 599,
    "compareAtPrice": 1199,
    "color": "Terracotta",
    "style": [
      "Printed",
      "Contemporary"
    ],
    "images": [
      "/images/kurti/kurti-page-43.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-43.jpg",
    "image": "/images/kurti/kurti-page-43.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-08-04T06:17:12.721Z"
  },
  {
    "id": "rc-3pc-008",
    "productCode": "RC-3PC-008",
    "slug": "burgundy-floral-printed-three-piece-kurti-set-rc-3pc-008",
    "name": "Burgundy Floral Printed Three-Piece Kurti Set",
    "shortDescription": "Complete 3-piece burgundy festive ensemble with kurti, bottom, and dupatta.",
    "description": "An exquisite three-piece festive ensemble in burgundy, featuring a richly detailed kurti, coordinated trousers, and a matching dupatta designed for celebratory elegance.",
    "primaryCategory": "Three Piece Sets",
    "category": [
      "Three Piece Sets",
      "Festive",
      "Printed",
      "New Arrivals",
      "Best Sellers"
    ],
    "productType": "THREE_PIECE",
    "price": 599,
    "compareAtPrice": 1199,
    "color": "Burgundy",
    "style": [
      "Printed",
      "Festive",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-44.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-44.jpg",
    "image": "/images/kurti/kurti-page-44.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "NEW",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": true,
    "isBestSeller": true,
    "isBestseller": true,
    "premiumTier": false,
    "createdAt": "2026-08-03T06:17:12.721Z"
  },
  {
    "id": "rc-krt-017",
    "productCode": "RC-KRT-017",
    "slug": "powder-blue-paisley-embroidered-kurti-rc-krt-017",
    "name": "Powder Blue Paisley Embroidered Kurti",
    "shortDescription": "Graceful standalone powder blue kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece powder blue kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered"
    ],
    "productType": "SINGLE_PIECE",
    "price": 699,
    "compareAtPrice": 1399,
    "color": "Powder Blue",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-50.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-50.jpg",
    "image": "/images/kurti/kurti-page-50.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-08-02T06:17:12.721Z"
  },
  {
    "id": "rc-krt-018",
    "productCode": "RC-KRT-018",
    "slug": "emerald-green-traditional-motif-printed-kurti-rc-krt-018",
    "name": "Emerald Green Traditional Motif Printed Kurti",
    "shortDescription": "Graceful standalone emerald green kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece emerald green kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Printed"
    ],
    "productType": "SINGLE_PIECE",
    "price": 699,
    "compareAtPrice": 1399,
    "color": "Emerald Green",
    "style": [
      "Printed",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-51.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-51.jpg",
    "image": "/images/kurti/kurti-page-51.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-08-01T06:17:12.721Z"
  },
  {
    "id": "rc-krt-019",
    "productCode": "RC-KRT-019",
    "slug": "rust-classic-buti-embroidered-kurti-rc-krt-019",
    "name": "Rust Classic Buti Embroidered Kurti",
    "shortDescription": "Graceful standalone rust kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece rust kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered"
    ],
    "productType": "SINGLE_PIECE",
    "price": 699,
    "compareAtPrice": 1399,
    "color": "Rust",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-52.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-52.jpg",
    "image": "/images/kurti/kurti-page-52.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-07-31T06:17:12.721Z"
  },
  {
    "id": "rc-2pc-012",
    "productCode": "RC-2PC-012",
    "slug": "blush-paisley-embroidered-kurti-set-rc-2pc-012",
    "name": "Blush Paisley Embroidered Kurti Set",
    "shortDescription": "Curated 2-piece coordinated blush kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in blush, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Embroidered"
    ],
    "productType": "TWO_PIECE",
    "price": 699,
    "compareAtPrice": 1399,
    "color": "Blush",
    "style": [
      "Embroidered",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-53.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-53.jpg",
    "image": "/images/kurti/kurti-page-53.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-07-30T06:17:12.721Z"
  },
  {
    "id": "rc-2pc-013",
    "productCode": "RC-2PC-013",
    "slug": "black-ethnic-floral-printed-kurti-set-rc-2pc-013",
    "name": "Black Ethnic Floral Printed Kurti Set",
    "shortDescription": "Curated 2-piece coordinated black kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in black, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Printed",
      "Best Sellers"
    ],
    "productType": "TWO_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Black",
    "style": [
      "Printed",
      "Contemporary"
    ],
    "images": [
      "/images/kurti/kurti-page-54.png"
    ],
    "primaryImage": "/images/kurti/kurti-page-54.png",
    "image": "/images/kurti/kurti-page-54.png",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "BESTSELLER",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": true,
    "isBestseller": true,
    "premiumTier": false,
    "createdAt": "2026-07-29T06:17:12.721Z"
  },
  {
    "id": "rc-3pc-009",
    "productCode": "RC-3PC-009",
    "slug": "mustard-floral-printed-three-piece-kurti-set-rc-3pc-009",
    "name": "Mustard Floral Printed Three-Piece Kurti Set",
    "shortDescription": "Complete 3-piece mustard festive ensemble with kurti, bottom, and dupatta.",
    "description": "An exquisite three-piece festive ensemble in mustard, featuring a richly detailed kurti, coordinated trousers, and a matching dupatta designed for celebratory elegance.",
    "primaryCategory": "Three Piece Sets",
    "category": [
      "Three Piece Sets",
      "Festive",
      "Printed"
    ],
    "productType": "THREE_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Mustard",
    "style": [
      "Printed",
      "Festive",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-55.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-55.jpg",
    "image": "/images/kurti/kurti-page-55.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-07-28T06:17:12.721Z"
  },
  {
    "id": "rc-krt-020",
    "productCode": "RC-KRT-020",
    "slug": "pink-intricate-threadwork-kurti-rc-krt-020",
    "name": "Pink Intricate Threadwork Kurti",
    "shortDescription": "Graceful standalone pink kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece pink kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered",
      "New Arrivals"
    ],
    "productType": "SINGLE_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Pink",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-56.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-56.jpg",
    "image": "/images/kurti/kurti-page-56.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "NEW",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": true,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-07-27T06:17:12.721Z"
  },
  {
    "id": "rc-krt-021",
    "productCode": "RC-KRT-021",
    "slug": "maroon-traditional-motif-printed-kurti-rc-krt-021",
    "name": "Maroon Traditional Motif Printed Kurti",
    "shortDescription": "Graceful standalone maroon kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece maroon kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Printed"
    ],
    "productType": "SINGLE_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Maroon",
    "style": [
      "Printed",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-57.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-57.jpg",
    "image": "/images/kurti/kurti-page-57.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-07-26T06:17:12.721Z"
  },
  {
    "id": "rc-krt-022",
    "productCode": "RC-KRT-022",
    "slug": "olive-chikankari-inspired-kurti-rc-krt-022",
    "name": "Olive Chikankari Inspired Kurti",
    "shortDescription": "Graceful standalone olive kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece olive kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered"
    ],
    "productType": "SINGLE_PIECE",
    "price": 699,
    "compareAtPrice": 1399,
    "color": "Olive",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-58.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-58.jpg",
    "image": "/images/kurti/kurti-page-58.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-07-25T06:17:12.721Z"
  },
  {
    "id": "rc-2pc-014",
    "productCode": "RC-2PC-014",
    "slug": "peach-paisley-embroidered-kurti-set-rc-2pc-014",
    "name": "Peach Paisley Embroidered Kurti Set",
    "shortDescription": "Curated 2-piece coordinated peach kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in peach, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Embroidered",
      "Best Sellers"
    ],
    "productType": "TWO_PIECE",
    "price": 699,
    "compareAtPrice": 1399,
    "color": "Peach",
    "style": [
      "Embroidered",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-59.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-59.jpg",
    "image": "/images/kurti/kurti-page-59.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "BESTSELLER",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": true,
    "isBestseller": true,
    "premiumTier": false,
    "createdAt": "2026-07-24T06:17:12.721Z"
  },
  {
    "id": "rc-2pc-015",
    "productCode": "RC-2PC-015",
    "slug": "ivory-geometric-block-printed-kurti-set-rc-2pc-015",
    "name": "Ivory Geometric Block Printed Kurti Set",
    "shortDescription": "Curated 2-piece coordinated ivory kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in ivory, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Printed"
    ],
    "productType": "TWO_PIECE",
    "price": 699,
    "compareAtPrice": 1399,
    "color": "Ivory",
    "style": [
      "Printed",
      "Contemporary"
    ],
    "images": [
      "/images/kurti/kurti-page-60.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-60.jpg",
    "image": "/images/kurti/kurti-page-60.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-07-23T06:17:12.721Z"
  },
  {
    "id": "rc-3pc-010",
    "productCode": "RC-3PC-010",
    "slug": "sage-floral-printed-three-piece-kurti-set-rc-3pc-010",
    "name": "Sage Floral Printed Three-Piece Kurti Set",
    "shortDescription": "Complete 3-piece sage festive ensemble with kurti, bottom, and dupatta.",
    "description": "An exquisite three-piece festive ensemble in sage, featuring a richly detailed kurti, coordinated trousers, and a matching dupatta designed for celebratory elegance.",
    "primaryCategory": "Three Piece Sets",
    "category": [
      "Three Piece Sets",
      "Festive",
      "Printed"
    ],
    "productType": "THREE_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Sage",
    "style": [
      "Printed",
      "Festive",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-61.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-61.jpg",
    "image": "/images/kurti/kurti-page-61.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-07-22T06:17:12.721Z"
  },
  {
    "id": "rc-krt-023",
    "productCode": "RC-KRT-023",
    "slug": "beige-paisley-embroidered-kurti-rc-krt-023",
    "name": "Beige Paisley Embroidered Kurti",
    "shortDescription": "Graceful standalone beige kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece beige kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered"
    ],
    "productType": "SINGLE_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Beige",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-62.png"
    ],
    "primaryImage": "/images/kurti/kurti-page-62.png",
    "image": "/images/kurti/kurti-page-62.png",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-07-21T06:17:12.721Z"
  },
  {
    "id": "rc-krt-024",
    "productCode": "RC-KRT-024",
    "slug": "cream-traditional-motif-printed-kurti-rc-krt-024",
    "name": "Cream Traditional Motif Printed Kurti",
    "shortDescription": "Graceful standalone cream kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece cream kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Printed",
      "New Arrivals"
    ],
    "productType": "SINGLE_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Cream",
    "style": [
      "Printed",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-63.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-63.jpg",
    "image": "/images/kurti/kurti-page-63.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "NEW",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": true,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-07-20T06:17:12.721Z"
  },
  {
    "id": "rc-krt-025",
    "productCode": "RC-KRT-025",
    "slug": "teal-classic-buti-embroidered-kurti-rc-krt-025",
    "name": "Teal Classic Buti Embroidered Kurti",
    "shortDescription": "Graceful standalone teal kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece teal kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered",
      "Best Sellers"
    ],
    "productType": "SINGLE_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Teal",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-66.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-66.jpg",
    "image": "/images/kurti/kurti-page-66.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "BESTSELLER",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": true,
    "isBestseller": true,
    "premiumTier": false,
    "createdAt": "2026-07-19T06:17:12.721Z"
  },
  {
    "id": "rc-2pc-016",
    "productCode": "RC-2PC-016",
    "slug": "brown-paisley-embroidered-kurti-set-rc-2pc-016",
    "name": "Brown Paisley Embroidered Kurti Set",
    "shortDescription": "Curated 2-piece coordinated brown kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in brown, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Embroidered"
    ],
    "productType": "TWO_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Brown",
    "style": [
      "Embroidered",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-67.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-67.jpg",
    "image": "/images/kurti/kurti-page-67.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-07-18T06:17:12.721Z"
  },
  {
    "id": "rc-2pc-017",
    "productCode": "RC-2PC-017",
    "slug": "wine-abstract-block-printed-kurti-set-rc-2pc-017",
    "name": "Wine Abstract Block Printed Kurti Set",
    "shortDescription": "Curated 2-piece coordinated wine kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in wine, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Printed"
    ],
    "productType": "TWO_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Wine",
    "style": [
      "Printed",
      "Contemporary"
    ],
    "images": [
      "/images/kurti/kurti-page-68.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-68.jpg",
    "image": "/images/kurti/kurti-page-68.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-07-17T06:17:12.721Z"
  },
  {
    "id": "rc-2pc-018",
    "productCode": "RC-2PC-018",
    "slug": "teal-floral-embroidered-co-ord-set-rc-2pc-018",
    "name": "Teal Floral Embroidered Co-ord Set",
    "shortDescription": "Curated 2-piece coordinated teal kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in teal, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Embroidered"
    ],
    "productType": "TWO_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Teal",
    "style": [
      "Embroidered",
      "Contemporary"
    ],
    "images": [
      "/images/kurti/kurti-page-70.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-70.jpg",
    "image": "/images/kurti/kurti-page-70.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-07-16T06:17:12.721Z"
  },
  {
    "id": "rc-2pc-019",
    "productCode": "RC-2PC-019",
    "slug": "dusty-rose-floral-embroidered-co-ord-set-rc-2pc-019",
    "name": "Dusty Rose Floral Embroidered Co-ord Set",
    "shortDescription": "Curated 2-piece coordinated dusty rose kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in dusty rose, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Embroidered"
    ],
    "productType": "TWO_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Dusty Rose",
    "style": [
      "Embroidered",
      "Contemporary"
    ],
    "images": [
      "/images/kurti/kurti-page-71.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-71.jpg",
    "image": "/images/kurti/kurti-page-71.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-07-15T06:17:12.721Z"
  },
  {
    "id": "rc-2pc-020",
    "productCode": "RC-2PC-020",
    "slug": "olive-floral-embroidered-co-ord-set-rc-2pc-020",
    "name": "Olive Floral Embroidered Co-ord Set",
    "shortDescription": "Curated 2-piece coordinated olive kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in olive, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Embroidered",
      "Best Sellers"
    ],
    "productType": "TWO_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Olive",
    "style": [
      "Embroidered",
      "Contemporary"
    ],
    "images": [
      "/images/kurti/kurti-page-72.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-72.jpg",
    "image": "/images/kurti/kurti-page-72.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "BESTSELLER",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": true,
    "isBestseller": true,
    "premiumTier": false,
    "createdAt": "2026-07-14T06:17:12.721Z"
  },
  {
    "id": "rc-2pc-021",
    "productCode": "RC-2PC-021",
    "slug": "brown-floral-embroidered-co-ord-set-rc-2pc-021",
    "name": "Brown Floral Embroidered Co-ord Set",
    "shortDescription": "Curated 2-piece coordinated brown kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in brown, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Embroidered",
      "New Arrivals"
    ],
    "productType": "TWO_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Brown",
    "style": [
      "Embroidered",
      "Contemporary"
    ],
    "images": [
      "/images/kurti/kurti-page-73.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-73.jpg",
    "image": "/images/kurti/kurti-page-73.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "NEW",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": true,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-07-13T06:17:12.721Z"
  },
  {
    "id": "rc-2pc-022",
    "productCode": "RC-2PC-022",
    "slug": "sage-floral-embroidered-co-ord-set-rc-2pc-022",
    "name": "Sage Floral Embroidered Co-ord Set",
    "shortDescription": "Curated 2-piece coordinated sage kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in sage, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Embroidered"
    ],
    "productType": "TWO_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Sage",
    "style": [
      "Embroidered",
      "Contemporary"
    ],
    "images": [
      "/images/kurti/kurti-page-75.png"
    ],
    "primaryImage": "/images/kurti/kurti-page-75.png",
    "image": "/images/kurti/kurti-page-75.png",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-07-12T06:17:12.721Z"
  },
  {
    "id": "rc-2pc-023",
    "productCode": "RC-2PC-023",
    "slug": "rust-ethnic-floral-printed-kurti-set-rc-2pc-023",
    "name": "Rust Ethnic Floral Printed Kurti Set",
    "shortDescription": "Curated 2-piece coordinated rust kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in rust, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Printed"
    ],
    "productType": "TWO_PIECE",
    "price": 699,
    "compareAtPrice": 1399,
    "color": "Rust",
    "style": [
      "Printed",
      "Contemporary"
    ],
    "images": [
      "/images/kurti/kurti-page-76.jpg",
      "/images/kurti/kurti-page-76.png"
    ],
    "primaryImage": "/images/kurti/kurti-page-76.jpg",
    "image": "/images/kurti/kurti-page-76.jpg",
    "hoverImage": "/images/kurti/kurti-page-76.png",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-07-11T06:17:12.721Z"
  },
  {
    "id": "rc-3pc-011",
    "productCode": "RC-3PC-011",
    "slug": "blush-floral-printed-three-piece-kurti-set-rc-3pc-011",
    "name": "Blush Floral Printed Three-Piece Kurti Set",
    "shortDescription": "Complete 3-piece blush festive ensemble with kurti, bottom, and dupatta.",
    "description": "An exquisite three-piece festive ensemble in blush, featuring a richly detailed kurti, coordinated trousers, and a matching dupatta designed for celebratory elegance.",
    "primaryCategory": "Three Piece Sets",
    "category": [
      "Three Piece Sets",
      "Festive",
      "Printed"
    ],
    "productType": "THREE_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Blush",
    "style": [
      "Printed",
      "Festive",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-77.jpg",
      "/images/kurti/kurti-page-77.png"
    ],
    "primaryImage": "/images/kurti/kurti-page-77.jpg",
    "image": "/images/kurti/kurti-page-77.jpg",
    "hoverImage": "/images/kurti/kurti-page-77.png",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-07-10T06:17:12.721Z"
  },
  {
    "id": "rc-krt-026",
    "productCode": "RC-KRT-026",
    "slug": "black-paisley-embroidered-kurti-rc-krt-026-rc-krt-026",
    "name": "Black Paisley Embroidered Kurti (RC-KRT-026)",
    "shortDescription": "Graceful standalone black kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece black kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered",
      "Best Sellers"
    ],
    "productType": "SINGLE_PIECE",
    "price": 699,
    "compareAtPrice": 1399,
    "color": "Black",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-78.jpg",
      "/images/kurti/kurti-page-78.png"
    ],
    "primaryImage": "/images/kurti/kurti-page-78.jpg",
    "image": "/images/kurti/kurti-page-78.jpg",
    "hoverImage": "/images/kurti/kurti-page-78.png",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "BESTSELLER",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": true,
    "isBestseller": true,
    "premiumTier": false,
    "createdAt": "2026-07-09T06:17:12.721Z"
  },
  {
    "id": "rc-krt-027",
    "productCode": "RC-KRT-027",
    "slug": "mustard-traditional-motif-printed-kurti-rc-krt-027",
    "name": "Mustard Traditional Motif Printed Kurti",
    "shortDescription": "Graceful standalone mustard kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece mustard kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Printed"
    ],
    "productType": "SINGLE_PIECE",
    "price": 699,
    "compareAtPrice": 1399,
    "color": "Mustard",
    "style": [
      "Printed",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-79.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-79.jpg",
    "image": "/images/kurti/kurti-page-79.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-07-08T06:17:12.722Z"
  },
  {
    "id": "rc-krt-028",
    "productCode": "RC-KRT-028",
    "slug": "pink-classic-buti-embroidered-kurti-rc-krt-028",
    "name": "Pink Classic Buti Embroidered Kurti",
    "shortDescription": "Graceful standalone pink kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece pink kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered"
    ],
    "productType": "SINGLE_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Pink",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-80.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-80.jpg",
    "image": "/images/kurti/kurti-page-80.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-07-07T06:17:12.722Z"
  },
  {
    "id": "rc-2pc-024",
    "productCode": "RC-2PC-024",
    "slug": "maroon-paisley-embroidered-kurti-set-rc-2pc-024",
    "name": "Maroon Paisley Embroidered Kurti Set",
    "shortDescription": "Curated 2-piece coordinated maroon kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in maroon, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Embroidered",
      "New Arrivals"
    ],
    "productType": "TWO_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Maroon",
    "style": [
      "Embroidered",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-81.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-81.jpg",
    "image": "/images/kurti/kurti-page-81.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "NEW",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": true,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-07-06T06:17:12.722Z"
  },
  {
    "id": "rc-2pc-025",
    "productCode": "RC-2PC-025",
    "slug": "olive-geometric-block-printed-kurti-set-rc-2pc-025",
    "name": "Olive Geometric Block Printed Kurti Set",
    "shortDescription": "Curated 2-piece coordinated olive kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in olive, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Printed"
    ],
    "productType": "TWO_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Olive",
    "style": [
      "Printed",
      "Contemporary"
    ],
    "images": [
      "/images/kurti/kurti-page-82.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-82.jpg",
    "image": "/images/kurti/kurti-page-82.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-07-05T06:17:12.722Z"
  },
  {
    "id": "rc-3pc-012",
    "productCode": "RC-3PC-012",
    "slug": "peach-floral-printed-three-piece-kurti-set-rc-3pc-012-rc-3pc-012",
    "name": "Peach Floral Printed Three-Piece Kurti Set (RC-3PC-012)",
    "shortDescription": "Complete 3-piece peach festive ensemble with kurti, bottom, and dupatta.",
    "description": "An exquisite three-piece festive ensemble in peach, featuring a richly detailed kurti, coordinated trousers, and a matching dupatta designed for celebratory elegance.",
    "primaryCategory": "Three Piece Sets",
    "category": [
      "Three Piece Sets",
      "Festive",
      "Printed",
      "Best Sellers"
    ],
    "productType": "THREE_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Peach",
    "style": [
      "Printed",
      "Festive",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-83.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-83.jpg",
    "image": "/images/kurti/kurti-page-83.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "BESTSELLER",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": true,
    "isBestseller": true,
    "premiumTier": false,
    "createdAt": "2026-07-04T06:17:12.722Z"
  },
  {
    "id": "rc-krt-029",
    "productCode": "RC-KRT-029",
    "slug": "ivory-intricate-threadwork-kurti-rc-krt-029-rc-krt-029",
    "name": "Ivory Intricate Threadwork Kurti (RC-KRT-029)",
    "shortDescription": "Graceful standalone ivory kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece ivory kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered"
    ],
    "productType": "SINGLE_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Ivory",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-84.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-84.jpg",
    "image": "/images/kurti/kurti-page-84.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-07-03T06:17:12.722Z"
  },
  {
    "id": "rc-krt-030",
    "productCode": "RC-KRT-030",
    "slug": "sage-traditional-motif-printed-kurti-rc-krt-030-rc-krt-030",
    "name": "Sage Traditional Motif Printed Kurti (RC-KRT-030)",
    "shortDescription": "Graceful standalone sage kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece sage kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Printed"
    ],
    "productType": "SINGLE_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Sage",
    "style": [
      "Printed",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-85.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-85.jpg",
    "image": "/images/kurti/kurti-page-85.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-07-02T06:17:12.722Z"
  },
  {
    "id": "rc-krt-031",
    "productCode": "RC-KRT-031",
    "slug": "beige-chikankari-inspired-kurti-rc-krt-031-rc-krt-031",
    "name": "Beige Chikankari Inspired Kurti (RC-KRT-031)",
    "shortDescription": "Graceful standalone beige kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece beige kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered"
    ],
    "productType": "SINGLE_PIECE",
    "price": 699,
    "compareAtPrice": 1399,
    "color": "Beige",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-87.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-87.jpg",
    "image": "/images/kurti/kurti-page-87.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-07-01T06:17:12.722Z"
  },
  {
    "id": "rc-2pc-026",
    "productCode": "RC-2PC-026",
    "slug": "cream-paisley-embroidered-kurti-set-rc-2pc-026-rc-2pc-026",
    "name": "Cream Paisley Embroidered Kurti Set (RC-2PC-026)",
    "shortDescription": "Curated 2-piece coordinated cream kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in cream, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Embroidered"
    ],
    "productType": "TWO_PIECE",
    "price": 699,
    "compareAtPrice": 1399,
    "color": "Cream",
    "style": [
      "Embroidered",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-88.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-88.jpg",
    "image": "/images/kurti/kurti-page-88.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-06-30T06:17:12.722Z"
  },
  {
    "id": "rc-2pc-027",
    "productCode": "RC-2PC-027",
    "slug": "teal-abstract-block-printed-kurti-set-rc-2pc-027",
    "name": "Teal Abstract Block Printed Kurti Set",
    "shortDescription": "Curated 2-piece coordinated teal kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in teal, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Printed",
      "New Arrivals",
      "Best Sellers"
    ],
    "productType": "TWO_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Teal",
    "style": [
      "Printed",
      "Contemporary"
    ],
    "images": [
      "/images/kurti/kurti-page-89.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-89.jpg",
    "image": "/images/kurti/kurti-page-89.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "NEW",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": true,
    "isBestSeller": true,
    "isBestseller": true,
    "premiumTier": false,
    "createdAt": "2026-06-29T06:17:12.722Z"
  },
  {
    "id": "rc-2pc-028",
    "productCode": "RC-2PC-028",
    "slug": "blush-embroidered-v-neck-kurti-set-rc-2pc-028",
    "name": "Blush Embroidered V-Neck Kurti Set",
    "shortDescription": "Curated 2-piece coordinated blush kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in blush, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Embroidered"
    ],
    "productType": "TWO_PIECE",
    "price": 699,
    "compareAtPrice": 1399,
    "color": "Blush",
    "style": [
      "Embroidered",
      "Contemporary"
    ],
    "images": [
      "/images/kurti/kurti-page-90.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-90.jpg",
    "image": "/images/kurti/kurti-page-90.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-06-28T06:17:12.722Z"
  },
  {
    "id": "rc-2pc-029",
    "productCode": "RC-2PC-029",
    "slug": "wine-embroidered-v-neck-kurti-set-rc-2pc-029",
    "name": "Wine Embroidered V-Neck Kurti Set",
    "shortDescription": "Curated 2-piece coordinated wine kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in wine, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Embroidered"
    ],
    "productType": "TWO_PIECE",
    "price": 699,
    "compareAtPrice": 1399,
    "color": "Wine",
    "style": [
      "Embroidered",
      "Contemporary"
    ],
    "images": [
      "/images/kurti/kurti-page-92.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-92.jpg",
    "image": "/images/kurti/kurti-page-92.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-06-27T06:17:12.722Z"
  },
  {
    "id": "rc-2pc-030",
    "productCode": "RC-2PC-030",
    "slug": "navy-embroidered-v-neck-kurti-set-rc-2pc-030",
    "name": "Navy Embroidered V-Neck Kurti Set",
    "shortDescription": "Curated 2-piece coordinated navy kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in navy, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Embroidered"
    ],
    "productType": "TWO_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Navy",
    "style": [
      "Embroidered",
      "Contemporary"
    ],
    "images": [
      "/images/kurti/kurti-page-93.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-93.jpg",
    "image": "/images/kurti/kurti-page-93.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-06-26T06:17:12.722Z"
  },
  {
    "id": "rc-2pc-031",
    "productCode": "RC-2PC-031",
    "slug": "olive-embroidered-v-neck-kurti-set-rc-2pc-031",
    "name": "Olive Embroidered V-Neck Kurti Set",
    "shortDescription": "Curated 2-piece coordinated olive kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in olive, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Embroidered"
    ],
    "productType": "TWO_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Olive",
    "style": [
      "Embroidered",
      "Contemporary"
    ],
    "images": [
      "/images/kurti/kurti-page-94.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-94.jpg",
    "image": "/images/kurti/kurti-page-94.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-06-25T06:17:12.722Z"
  },
  {
    "id": "rc-2pc-032",
    "productCode": "RC-2PC-032",
    "slug": "mustard-embroidered-v-neck-kurti-set-rc-2pc-032",
    "name": "Mustard Embroidered V-Neck Kurti Set",
    "shortDescription": "Curated 2-piece coordinated mustard kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in mustard, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Embroidered",
      "Best Sellers"
    ],
    "productType": "TWO_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Mustard",
    "style": [
      "Embroidered",
      "Contemporary"
    ],
    "images": [
      "/images/kurti/kurti-page-95.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-95.jpg",
    "image": "/images/kurti/kurti-page-95.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "BESTSELLER",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": true,
    "isBestseller": true,
    "premiumTier": false,
    "createdAt": "2026-06-24T06:17:12.722Z"
  },
  {
    "id": "rc-2pc-033",
    "productCode": "RC-2PC-033",
    "slug": "rust-embroidered-v-neck-kurti-set-rc-2pc-033",
    "name": "Rust Embroidered V-Neck Kurti Set",
    "shortDescription": "Curated 2-piece coordinated rust kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in rust, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Embroidered"
    ],
    "productType": "TWO_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Rust",
    "style": [
      "Embroidered",
      "Contemporary"
    ],
    "images": [
      "/images/kurti/kurti-page-96.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-96.jpg",
    "image": "/images/kurti/kurti-page-96.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-06-23T06:17:12.722Z"
  },
  {
    "id": "rc-2pc-034",
    "productCode": "RC-2PC-034",
    "slug": "teal-embroidered-v-neck-kurti-set-rc-2pc-034",
    "name": "Teal Embroidered V-Neck Kurti Set",
    "shortDescription": "Curated 2-piece coordinated teal kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in teal, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Embroidered",
      "New Arrivals"
    ],
    "productType": "TWO_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Teal",
    "style": [
      "Embroidered",
      "Contemporary"
    ],
    "images": [
      "/images/kurti/kurti-page-97.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-97.jpg",
    "image": "/images/kurti/kurti-page-97.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "NEW",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": true,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-06-22T06:17:12.722Z"
  },
  {
    "id": "rc-2pc-035",
    "productCode": "RC-2PC-035",
    "slug": "pink-embroidered-v-neck-kurti-set-rc-2pc-035",
    "name": "Pink Embroidered V-Neck Kurti Set",
    "shortDescription": "Curated 2-piece coordinated pink kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in pink, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Embroidered"
    ],
    "productType": "TWO_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Pink",
    "style": [
      "Embroidered",
      "Contemporary"
    ],
    "images": [
      "/images/kurti/kurti-page-98.png"
    ],
    "primaryImage": "/images/kurti/kurti-page-98.png",
    "image": "/images/kurti/kurti-page-98.png",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-06-21T06:17:12.722Z"
  },
  {
    "id": "rc-krt-032",
    "productCode": "RC-KRT-032",
    "slug": "blush-traditional-motif-printed-kurti-rc-krt-032-rc-krt-032",
    "name": "Blush Traditional Motif Printed Kurti (RC-KRT-032)",
    "shortDescription": "Graceful standalone blush kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece blush kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Printed"
    ],
    "productType": "SINGLE_PIECE",
    "price": 699,
    "compareAtPrice": 1399,
    "color": "Blush",
    "style": [
      "Printed",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-99.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-99.jpg",
    "image": "/images/kurti/kurti-page-99.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-06-20T06:17:12.722Z"
  },
  {
    "id": "rc-krt-033",
    "productCode": "RC-KRT-033",
    "slug": "black-chikankari-inspired-kurti-rc-krt-033-rc-krt-033",
    "name": "Black Chikankari Inspired Kurti (RC-KRT-033)",
    "shortDescription": "Graceful standalone black kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece black kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered",
      "Best Sellers"
    ],
    "productType": "SINGLE_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Black",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-100.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-100.jpg",
    "image": "/images/kurti/kurti-page-100.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "BESTSELLER",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": true,
    "isBestseller": true,
    "premiumTier": false,
    "createdAt": "2026-06-19T06:17:12.722Z"
  },
  {
    "id": "rc-2pc-036",
    "productCode": "RC-2PC-036",
    "slug": "mustard-paisley-embroidered-kurti-set-rc-2pc-036-rc-2pc-036",
    "name": "Mustard Paisley Embroidered Kurti Set (RC-2PC-036)",
    "shortDescription": "Curated 2-piece coordinated mustard kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in mustard, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Embroidered"
    ],
    "productType": "TWO_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Mustard",
    "style": [
      "Embroidered",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-101.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-101.jpg",
    "image": "/images/kurti/kurti-page-101.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-06-18T06:17:12.722Z"
  },
  {
    "id": "rc-2pc-037",
    "productCode": "RC-2PC-037",
    "slug": "pink-geometric-block-printed-kurti-set-rc-2pc-037",
    "name": "Pink Geometric Block Printed Kurti Set",
    "shortDescription": "Curated 2-piece coordinated pink kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in pink, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Printed"
    ],
    "productType": "TWO_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Pink",
    "style": [
      "Printed",
      "Contemporary"
    ],
    "images": [
      "/images/kurti/kurti-page-102.png"
    ],
    "primaryImage": "/images/kurti/kurti-page-102.png",
    "image": "/images/kurti/kurti-page-102.png",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-06-17T06:17:12.722Z"
  },
  {
    "id": "rc-3pc-013",
    "productCode": "RC-3PC-013",
    "slug": "maroon-floral-printed-three-piece-kurti-set-rc-3pc-013-rc-3pc-013",
    "name": "Maroon Floral Printed Three-Piece Kurti Set (RC-3PC-013)",
    "shortDescription": "Complete 3-piece maroon festive ensemble with kurti, bottom, and dupatta.",
    "description": "An exquisite three-piece festive ensemble in maroon, featuring a richly detailed kurti, coordinated trousers, and a matching dupatta designed for celebratory elegance.",
    "primaryCategory": "Three Piece Sets",
    "category": [
      "Three Piece Sets",
      "Festive",
      "Printed"
    ],
    "productType": "THREE_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Maroon",
    "style": [
      "Printed",
      "Festive",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-103.png"
    ],
    "primaryImage": "/images/kurti/kurti-page-103.png",
    "image": "/images/kurti/kurti-page-103.png",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-06-16T06:17:12.722Z"
  },
  {
    "id": "rc-krt-034",
    "productCode": "RC-KRT-034",
    "slug": "olive-paisley-embroidered-kurti-rc-krt-034-rc-krt-034",
    "name": "Olive Paisley Embroidered Kurti (RC-KRT-034)",
    "shortDescription": "Graceful standalone olive kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece olive kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered",
      "New Arrivals"
    ],
    "productType": "SINGLE_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Olive",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-105.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-105.jpg",
    "image": "/images/kurti/kurti-page-105.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "NEW",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": true,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-06-15T06:17:12.722Z"
  },
  {
    "id": "rc-krt-035",
    "productCode": "RC-KRT-035",
    "slug": "peach-traditional-motif-printed-kurti-rc-krt-035-rc-krt-035",
    "name": "Peach Traditional Motif Printed Kurti (RC-KRT-035)",
    "shortDescription": "Graceful standalone peach kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece peach kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Printed",
      "Best Sellers"
    ],
    "productType": "SINGLE_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Peach",
    "style": [
      "Printed",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-106.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-106.jpg",
    "image": "/images/kurti/kurti-page-106.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "BESTSELLER",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": true,
    "isBestseller": true,
    "premiumTier": false,
    "createdAt": "2026-06-14T06:17:12.722Z"
  },
  {
    "id": "rc-krt-036",
    "productCode": "RC-KRT-036",
    "slug": "ivory-classic-buti-embroidered-kurti-rc-krt-036-rc-krt-036",
    "name": "Ivory Classic Buti Embroidered Kurti (RC-KRT-036)",
    "shortDescription": "Graceful standalone ivory kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece ivory kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered"
    ],
    "productType": "SINGLE_PIECE",
    "price": 899,
    "compareAtPrice": 1699,
    "color": "Ivory",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-107.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-107.jpg",
    "image": "/images/kurti/kurti-page-107.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-06-13T06:17:12.722Z"
  },
  {
    "id": "rc-2pc-038",
    "productCode": "RC-2PC-038",
    "slug": "sage-paisley-embroidered-kurti-set-rc-2pc-038-rc-2pc-038",
    "name": "Sage Paisley Embroidered Kurti Set (RC-2PC-038)",
    "shortDescription": "Curated 2-piece coordinated sage kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in sage, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Embroidered"
    ],
    "productType": "TWO_PIECE",
    "price": 899,
    "compareAtPrice": 1699,
    "color": "Sage",
    "style": [
      "Embroidered",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-108.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-108.jpg",
    "image": "/images/kurti/kurti-page-108.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-06-12T06:17:12.722Z"
  },
  {
    "id": "rc-2pc-039",
    "productCode": "RC-2PC-039",
    "slug": "beige-abstract-block-printed-kurti-set-rc-2pc-039",
    "name": "Beige Abstract Block Printed Kurti Set",
    "shortDescription": "Curated 2-piece coordinated beige kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in beige, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Printed"
    ],
    "productType": "TWO_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Beige",
    "style": [
      "Printed",
      "Contemporary"
    ],
    "images": [
      "/images/kurti/kurti-page-109.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-109.jpg",
    "image": "/images/kurti/kurti-page-109.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-06-11T06:17:12.722Z"
  },
  {
    "id": "rc-3pc-014",
    "productCode": "RC-3PC-014",
    "slug": "cream-floral-printed-three-piece-kurti-set-rc-3pc-014-rc-3pc-014",
    "name": "Cream Floral Printed Three-Piece Kurti Set (RC-3PC-014)",
    "shortDescription": "Complete 3-piece cream festive ensemble with kurti, bottom, and dupatta.",
    "description": "An exquisite three-piece festive ensemble in cream, featuring a richly detailed kurti, coordinated trousers, and a matching dupatta designed for celebratory elegance.",
    "primaryCategory": "Three Piece Sets",
    "category": [
      "Three Piece Sets",
      "Festive",
      "Printed"
    ],
    "productType": "THREE_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Cream",
    "style": [
      "Printed",
      "Festive",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-110.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-110.jpg",
    "image": "/images/kurti/kurti-page-110.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-06-10T06:17:12.722Z"
  },
  {
    "id": "rc-krt-037",
    "productCode": "RC-KRT-037",
    "slug": "teal-intricate-threadwork-kurti-rc-krt-037-rc-krt-037",
    "name": "Teal Intricate Threadwork Kurti (RC-KRT-037)",
    "shortDescription": "Graceful standalone teal kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece teal kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered",
      "Best Sellers"
    ],
    "productType": "SINGLE_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Teal",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-111.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-111.jpg",
    "image": "/images/kurti/kurti-page-111.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "BESTSELLER",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": true,
    "isBestseller": true,
    "premiumTier": false,
    "createdAt": "2026-06-09T06:17:12.722Z"
  },
  {
    "id": "rc-krt-038",
    "productCode": "RC-KRT-038",
    "slug": "brown-traditional-motif-printed-kurti-rc-krt-038-rc-krt-038",
    "name": "Brown Traditional Motif Printed Kurti (RC-KRT-038)",
    "shortDescription": "Graceful standalone brown kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece brown kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Printed",
      "New Arrivals"
    ],
    "productType": "SINGLE_PIECE",
    "price": 699,
    "compareAtPrice": 1399,
    "color": "Brown",
    "style": [
      "Printed",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-112.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-112.jpg",
    "image": "/images/kurti/kurti-page-112.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "NEW",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": true,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-06-08T06:17:12.722Z"
  },
  {
    "id": "rc-krt-039",
    "productCode": "RC-KRT-039",
    "slug": "wine-chikankari-inspired-kurti-rc-krt-039-rc-krt-039",
    "name": "Wine Chikankari Inspired Kurti (RC-KRT-039)",
    "shortDescription": "Graceful standalone wine kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece wine kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered"
    ],
    "productType": "SINGLE_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Wine",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-113.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-113.jpg",
    "image": "/images/kurti/kurti-page-113.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-06-07T06:17:12.722Z"
  },
  {
    "id": "rc-2pc-040",
    "productCode": "RC-2PC-040",
    "slug": "navy-paisley-embroidered-kurti-set-rc-2pc-040-rc-2pc-040",
    "name": "Navy Paisley Embroidered Kurti Set (RC-2PC-040)",
    "shortDescription": "Curated 2-piece coordinated navy kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in navy, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Embroidered"
    ],
    "productType": "TWO_PIECE",
    "price": 499,
    "compareAtPrice": 999,
    "color": "Navy",
    "style": [
      "Embroidered",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-114.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-114.jpg",
    "image": "/images/kurti/kurti-page-114.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-06-06T06:17:12.722Z"
  },
  {
    "id": "rc-2pc-041",
    "productCode": "RC-2PC-041",
    "slug": "terracotta-ethnic-floral-printed-kurti-set-rc-2pc-041",
    "name": "Terracotta Ethnic Floral Printed Kurti Set",
    "shortDescription": "Curated 2-piece coordinated terracotta kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in terracotta, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Printed"
    ],
    "productType": "TWO_PIECE",
    "price": 499,
    "compareAtPrice": 999,
    "color": "Terracotta",
    "style": [
      "Printed",
      "Contemporary"
    ],
    "images": [
      "/images/kurti/kurti-page-115.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-115.jpg",
    "image": "/images/kurti/kurti-page-115.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-06-05T06:17:12.722Z"
  },
  {
    "id": "rc-3pc-015",
    "productCode": "RC-3PC-015",
    "slug": "burgundy-floral-printed-three-piece-kurti-set-rc-3pc-015-rc-3pc-015",
    "name": "Burgundy Floral Printed Three-Piece Kurti Set (RC-3PC-015)",
    "shortDescription": "Complete 3-piece burgundy festive ensemble with kurti, bottom, and dupatta.",
    "description": "An exquisite three-piece festive ensemble in burgundy, featuring a richly detailed kurti, coordinated trousers, and a matching dupatta designed for celebratory elegance.",
    "primaryCategory": "Three Piece Sets",
    "category": [
      "Three Piece Sets",
      "Festive",
      "Printed",
      "Best Sellers"
    ],
    "productType": "THREE_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Burgundy",
    "style": [
      "Printed",
      "Festive",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-116.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-116.jpg",
    "image": "/images/kurti/kurti-page-116.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "BESTSELLER",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": true,
    "isBestseller": true,
    "premiumTier": false,
    "createdAt": "2026-06-04T06:17:12.722Z"
  },
  {
    "id": "rc-krt-040",
    "productCode": "RC-KRT-040",
    "slug": "powder-blue-paisley-embroidered-kurti-rc-krt-040-rc-krt-040",
    "name": "Powder Blue Paisley Embroidered Kurti (RC-KRT-040)",
    "shortDescription": "Graceful standalone powder blue kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece powder blue kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered"
    ],
    "productType": "SINGLE_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Powder Blue",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-117.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-117.jpg",
    "image": "/images/kurti/kurti-page-117.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-06-03T06:17:12.722Z"
  },
  {
    "id": "rc-krt-041",
    "productCode": "RC-KRT-041",
    "slug": "emerald-green-traditional-motif-printed-kurti-rc-krt-041-rc-krt-041",
    "name": "Emerald Green Traditional Motif Printed Kurti (RC-KRT-041)",
    "shortDescription": "Graceful standalone emerald green kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece emerald green kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Printed"
    ],
    "productType": "SINGLE_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Emerald Green",
    "style": [
      "Printed",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-118.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-118.jpg",
    "image": "/images/kurti/kurti-page-118.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-06-02T06:17:12.722Z"
  },
  {
    "id": "rc-krt-042",
    "productCode": "RC-KRT-042",
    "slug": "rust-classic-buti-embroidered-kurti-rc-krt-042-rc-krt-042",
    "name": "Rust Classic Buti Embroidered Kurti (RC-KRT-042)",
    "shortDescription": "Graceful standalone rust kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece rust kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered",
      "New Arrivals"
    ],
    "productType": "SINGLE_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Rust",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-119.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-119.jpg",
    "image": "/images/kurti/kurti-page-119.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "NEW",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": true,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-06-01T06:17:12.722Z"
  },
  {
    "id": "rc-2pc-042",
    "productCode": "RC-2PC-042",
    "slug": "blush-paisley-embroidered-kurti-set-rc-2pc-042-rc-2pc-042",
    "name": "Blush Paisley Embroidered Kurti Set (RC-2PC-042)",
    "shortDescription": "Curated 2-piece coordinated blush kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in blush, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Embroidered"
    ],
    "productType": "TWO_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Blush",
    "style": [
      "Embroidered",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-120.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-120.jpg",
    "image": "/images/kurti/kurti-page-120.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-05-31T06:17:12.722Z"
  },
  {
    "id": "rc-2pc-043",
    "productCode": "RC-2PC-043",
    "slug": "black-geometric-block-printed-kurti-set-rc-2pc-043",
    "name": "Black Geometric Block Printed Kurti Set",
    "shortDescription": "Curated 2-piece coordinated black kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in black, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Printed",
      "Best Sellers"
    ],
    "productType": "TWO_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Black",
    "style": [
      "Printed",
      "Contemporary"
    ],
    "images": [
      "/images/kurti/kurti-page-121.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-121.jpg",
    "image": "/images/kurti/kurti-page-121.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "BESTSELLER",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": true,
    "isBestseller": true,
    "premiumTier": false,
    "createdAt": "2026-05-30T06:17:12.722Z"
  },
  {
    "id": "rc-3pc-016",
    "productCode": "RC-3PC-016",
    "slug": "mustard-floral-printed-three-piece-kurti-set-rc-3pc-016-rc-3pc-016",
    "name": "Mustard Floral Printed Three-Piece Kurti Set (RC-3PC-016)",
    "shortDescription": "Complete 3-piece mustard festive ensemble with kurti, bottom, and dupatta.",
    "description": "An exquisite three-piece festive ensemble in mustard, featuring a richly detailed kurti, coordinated trousers, and a matching dupatta designed for celebratory elegance.",
    "primaryCategory": "Three Piece Sets",
    "category": [
      "Three Piece Sets",
      "Festive",
      "Printed"
    ],
    "productType": "THREE_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Mustard",
    "style": [
      "Printed",
      "Festive",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-122.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-122.jpg",
    "image": "/images/kurti/kurti-page-122.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-05-29T06:17:12.722Z"
  },
  {
    "id": "rc-krt-043",
    "productCode": "RC-KRT-043",
    "slug": "pink-intricate-threadwork-kurti-rc-krt-043-rc-krt-043",
    "name": "Pink Intricate Threadwork Kurti (RC-KRT-043)",
    "shortDescription": "Graceful standalone pink kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece pink kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered"
    ],
    "productType": "SINGLE_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Pink",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-123.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-123.jpg",
    "image": "/images/kurti/kurti-page-123.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-05-28T06:17:12.722Z"
  },
  {
    "id": "rc-krt-044",
    "productCode": "RC-KRT-044",
    "slug": "maroon-traditional-motif-printed-kurti-rc-krt-044-rc-krt-044",
    "name": "Maroon Traditional Motif Printed Kurti (RC-KRT-044)",
    "shortDescription": "Graceful standalone maroon kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece maroon kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Printed"
    ],
    "productType": "SINGLE_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Maroon",
    "style": [
      "Printed",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-124.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-124.jpg",
    "image": "/images/kurti/kurti-page-124.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-05-27T06:17:12.722Z"
  },
  {
    "id": "rc-krt-045",
    "productCode": "RC-KRT-045",
    "slug": "olive-chikankari-inspired-kurti-rc-krt-045-rc-krt-045",
    "name": "Olive Chikankari Inspired Kurti (RC-KRT-045)",
    "shortDescription": "Graceful standalone olive kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece olive kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered"
    ],
    "productType": "SINGLE_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Olive",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-125.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-125.jpg",
    "image": "/images/kurti/kurti-page-125.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-05-26T06:17:12.722Z"
  },
  {
    "id": "rc-2pc-044",
    "productCode": "RC-2PC-044",
    "slug": "peach-paisley-embroidered-kurti-set-rc-2pc-044-rc-2pc-044",
    "name": "Peach Paisley Embroidered Kurti Set (RC-2PC-044)",
    "shortDescription": "Curated 2-piece coordinated peach kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in peach, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Embroidered",
      "New Arrivals",
      "Best Sellers"
    ],
    "productType": "TWO_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Peach",
    "style": [
      "Embroidered",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-126.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-126.jpg",
    "image": "/images/kurti/kurti-page-126.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "NEW",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": true,
    "isBestSeller": true,
    "isBestseller": true,
    "premiumTier": false,
    "createdAt": "2026-05-25T06:17:12.722Z"
  },
  {
    "id": "rc-2pc-045",
    "productCode": "RC-2PC-045",
    "slug": "ivory-abstract-block-printed-kurti-set-rc-2pc-045",
    "name": "Ivory Abstract Block Printed Kurti Set",
    "shortDescription": "Curated 2-piece coordinated ivory kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in ivory, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Printed"
    ],
    "productType": "TWO_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Ivory",
    "style": [
      "Printed",
      "Contemporary"
    ],
    "images": [
      "/images/kurti/kurti-page-127.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-127.jpg",
    "image": "/images/kurti/kurti-page-127.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-05-24T06:17:12.722Z"
  },
  {
    "id": "rc-3pc-017",
    "productCode": "RC-3PC-017",
    "slug": "sage-floral-printed-three-piece-kurti-set-rc-3pc-017-rc-3pc-017",
    "name": "Sage Floral Printed Three-Piece Kurti Set (RC-3PC-017)",
    "shortDescription": "Complete 3-piece sage festive ensemble with kurti, bottom, and dupatta.",
    "description": "An exquisite three-piece festive ensemble in sage, featuring a richly detailed kurti, coordinated trousers, and a matching dupatta designed for celebratory elegance.",
    "primaryCategory": "Three Piece Sets",
    "category": [
      "Three Piece Sets",
      "Festive",
      "Printed"
    ],
    "productType": "THREE_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Sage",
    "style": [
      "Printed",
      "Festive",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-128.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-128.jpg",
    "image": "/images/kurti/kurti-page-128.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-05-23T06:17:12.722Z"
  },
  {
    "id": "rc-krt-046",
    "productCode": "RC-KRT-046",
    "slug": "beige-paisley-embroidered-kurti-rc-krt-046-rc-krt-046",
    "name": "Beige Paisley Embroidered Kurti (RC-KRT-046)",
    "shortDescription": "Graceful standalone beige kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece beige kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered"
    ],
    "productType": "SINGLE_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Beige",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-129.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-129.jpg",
    "image": "/images/kurti/kurti-page-129.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-05-22T06:17:12.722Z"
  },
  {
    "id": "rc-krt-047",
    "productCode": "RC-KRT-047",
    "slug": "cream-traditional-motif-printed-kurti-rc-krt-047-rc-krt-047",
    "name": "Cream Traditional Motif Printed Kurti (RC-KRT-047)",
    "shortDescription": "Graceful standalone cream kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece cream kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Printed"
    ],
    "productType": "SINGLE_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Cream",
    "style": [
      "Printed",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-130.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-130.jpg",
    "image": "/images/kurti/kurti-page-130.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-05-21T06:17:12.722Z"
  },
  {
    "id": "rc-krt-048",
    "productCode": "RC-KRT-048",
    "slug": "teal-classic-buti-embroidered-kurti-rc-krt-048-rc-krt-048",
    "name": "Teal Classic Buti Embroidered Kurti (RC-KRT-048)",
    "shortDescription": "Graceful standalone teal kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece teal kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered",
      "Best Sellers"
    ],
    "productType": "SINGLE_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Teal",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-131.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-131.jpg",
    "image": "/images/kurti/kurti-page-131.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "BESTSELLER",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": true,
    "isBestseller": true,
    "premiumTier": false,
    "createdAt": "2026-05-20T06:17:12.722Z"
  },
  {
    "id": "rc-2pc-046",
    "productCode": "RC-2PC-046",
    "slug": "brown-paisley-embroidered-kurti-set-rc-2pc-046-rc-2pc-046",
    "name": "Brown Paisley Embroidered Kurti Set (RC-2PC-046)",
    "shortDescription": "Curated 2-piece coordinated brown kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in brown, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Embroidered"
    ],
    "productType": "TWO_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Brown",
    "style": [
      "Embroidered",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-132.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-132.jpg",
    "image": "/images/kurti/kurti-page-132.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-05-19T06:17:12.722Z"
  },
  {
    "id": "rc-2pc-047",
    "productCode": "RC-2PC-047",
    "slug": "wine-ethnic-floral-printed-kurti-set-rc-2pc-047",
    "name": "Wine Ethnic Floral Printed Kurti Set",
    "shortDescription": "Curated 2-piece coordinated wine kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in wine, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Printed",
      "New Arrivals"
    ],
    "productType": "TWO_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Wine",
    "style": [
      "Printed",
      "Contemporary"
    ],
    "images": [
      "/images/kurti/kurti-page-133.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-133.jpg",
    "image": "/images/kurti/kurti-page-133.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "NEW",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": true,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-05-18T06:17:12.722Z"
  },
  {
    "id": "rc-3pc-018",
    "productCode": "RC-3PC-018",
    "slug": "navy-floral-printed-three-piece-kurti-set-rc-3pc-018",
    "name": "Navy Floral Printed Three-Piece Kurti Set",
    "shortDescription": "Complete 3-piece navy festive ensemble with kurti, bottom, and dupatta.",
    "description": "An exquisite three-piece festive ensemble in navy, featuring a richly detailed kurti, coordinated trousers, and a matching dupatta designed for celebratory elegance.",
    "primaryCategory": "Three Piece Sets",
    "category": [
      "Three Piece Sets",
      "Festive",
      "Printed"
    ],
    "productType": "THREE_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Navy",
    "style": [
      "Printed",
      "Festive",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-134.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-134.jpg",
    "image": "/images/kurti/kurti-page-134.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-05-17T06:17:12.722Z"
  },
  {
    "id": "rc-krt-049",
    "productCode": "RC-KRT-049",
    "slug": "terracotta-intricate-threadwork-kurti-rc-krt-049",
    "name": "Terracotta Intricate Threadwork Kurti",
    "shortDescription": "Graceful standalone terracotta kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece terracotta kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered"
    ],
    "productType": "SINGLE_PIECE",
    "price": 499,
    "compareAtPrice": 999,
    "color": "Terracotta",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-135.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-135.jpg",
    "image": "/images/kurti/kurti-page-135.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-05-16T06:17:12.722Z"
  },
  {
    "id": "rc-krt-050",
    "productCode": "RC-KRT-050",
    "slug": "burgundy-traditional-motif-printed-kurti-rc-krt-050",
    "name": "Burgundy Traditional Motif Printed Kurti",
    "shortDescription": "Graceful standalone burgundy kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece burgundy kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Printed",
      "Best Sellers"
    ],
    "productType": "SINGLE_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Burgundy",
    "style": [
      "Printed",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-136.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-136.jpg",
    "image": "/images/kurti/kurti-page-136.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "BESTSELLER",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": true,
    "isBestseller": true,
    "premiumTier": false,
    "createdAt": "2026-05-15T06:17:12.722Z"
  },
  {
    "id": "rc-krt-051",
    "productCode": "RC-KRT-051",
    "slug": "powder-blue-chikankari-inspired-kurti-rc-krt-051",
    "name": "Powder Blue Chikankari Inspired Kurti",
    "shortDescription": "Graceful standalone powder blue kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece powder blue kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered"
    ],
    "productType": "SINGLE_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Powder Blue",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-137.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-137.jpg",
    "image": "/images/kurti/kurti-page-137.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-05-14T06:17:12.722Z"
  },
  {
    "id": "rc-2pc-048",
    "productCode": "RC-2PC-048",
    "slug": "emerald-green-paisley-embroidered-kurti-set-rc-2pc-048",
    "name": "Emerald Green Paisley Embroidered Kurti Set",
    "shortDescription": "Curated 2-piece coordinated emerald green kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in emerald green, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Embroidered"
    ],
    "productType": "TWO_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Emerald Green",
    "style": [
      "Embroidered",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-138.png"
    ],
    "primaryImage": "/images/kurti/kurti-page-138.png",
    "image": "/images/kurti/kurti-page-138.png",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-05-13T06:17:12.722Z"
  },
  {
    "id": "rc-2pc-049",
    "productCode": "RC-2PC-049",
    "slug": "rust-geometric-block-printed-kurti-set-rc-2pc-049",
    "name": "Rust Geometric Block Printed Kurti Set",
    "shortDescription": "Curated 2-piece coordinated rust kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in rust, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Printed"
    ],
    "productType": "TWO_PIECE",
    "price": 1499,
    "compareAtPrice": 2999,
    "color": "Rust",
    "style": [
      "Printed",
      "Contemporary"
    ],
    "images": [
      "/images/kurti/kurti-page-139.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-139.jpg",
    "image": "/images/kurti/kurti-page-139.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-05-12T06:17:12.722Z"
  },
  {
    "id": "rc-3pc-019",
    "productCode": "RC-3PC-019",
    "slug": "blush-floral-printed-three-piece-kurti-set-rc-3pc-019-rc-3pc-019",
    "name": "Blush Floral Printed Three-Piece Kurti Set (RC-3PC-019)",
    "shortDescription": "Complete 3-piece blush festive ensemble with kurti, bottom, and dupatta.",
    "description": "An exquisite three-piece festive ensemble in blush, featuring a richly detailed kurti, coordinated trousers, and a matching dupatta designed for celebratory elegance.",
    "primaryCategory": "Three Piece Sets",
    "category": [
      "Three Piece Sets",
      "Festive",
      "Printed",
      "New Arrivals"
    ],
    "productType": "THREE_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Blush",
    "style": [
      "Printed",
      "Festive",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-140.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-140.jpg",
    "image": "/images/kurti/kurti-page-140.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "NEW",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": true,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-05-11T06:17:12.722Z"
  },
  {
    "id": "rc-krt-052",
    "productCode": "RC-KRT-052",
    "slug": "black-paisley-embroidered-kurti-rc-krt-052-rc-krt-052",
    "name": "Black Paisley Embroidered Kurti (RC-KRT-052)",
    "shortDescription": "Graceful standalone black kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece black kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered",
      "Best Sellers"
    ],
    "productType": "SINGLE_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Black",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-141.png"
    ],
    "primaryImage": "/images/kurti/kurti-page-141.png",
    "image": "/images/kurti/kurti-page-141.png",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "BESTSELLER",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": true,
    "isBestseller": true,
    "premiumTier": false,
    "createdAt": "2026-05-10T06:17:12.722Z"
  },
  {
    "id": "rc-krt-053",
    "productCode": "RC-KRT-053",
    "slug": "mustard-traditional-motif-printed-kurti-rc-krt-053-rc-krt-053",
    "name": "Mustard Traditional Motif Printed Kurti (RC-KRT-053)",
    "shortDescription": "Graceful standalone mustard kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece mustard kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Printed"
    ],
    "productType": "SINGLE_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Mustard",
    "style": [
      "Printed",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-142.png"
    ],
    "primaryImage": "/images/kurti/kurti-page-142.png",
    "image": "/images/kurti/kurti-page-142.png",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-05-09T06:17:12.722Z"
  },
  {
    "id": "rc-krt-054",
    "productCode": "RC-KRT-054",
    "slug": "pink-classic-buti-embroidered-kurti-rc-krt-054-rc-krt-054",
    "name": "Pink Classic Buti Embroidered Kurti (RC-KRT-054)",
    "shortDescription": "Graceful standalone pink kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece pink kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered"
    ],
    "productType": "SINGLE_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Pink",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-143.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-143.jpg",
    "image": "/images/kurti/kurti-page-143.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-05-08T06:17:12.722Z"
  },
  {
    "id": "rc-2pc-050",
    "productCode": "RC-2PC-050",
    "slug": "maroon-paisley-embroidered-kurti-set-rc-2pc-050-rc-2pc-050",
    "name": "Maroon Paisley Embroidered Kurti Set (RC-2PC-050)",
    "shortDescription": "Curated 2-piece coordinated maroon kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in maroon, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Embroidered"
    ],
    "productType": "TWO_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Maroon",
    "style": [
      "Embroidered",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-144.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-144.jpg",
    "image": "/images/kurti/kurti-page-144.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-05-07T06:17:12.722Z"
  },
  {
    "id": "rc-2pc-051",
    "productCode": "RC-2PC-051",
    "slug": "olive-abstract-block-printed-kurti-set-rc-2pc-051",
    "name": "Olive Abstract Block Printed Kurti Set",
    "shortDescription": "Curated 2-piece coordinated olive kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in olive, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Printed"
    ],
    "productType": "TWO_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Olive",
    "style": [
      "Printed",
      "Contemporary"
    ],
    "images": [
      "/images/kurti/kurti-page-145.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-145.jpg",
    "image": "/images/kurti/kurti-page-145.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-05-06T06:17:12.722Z"
  },
  {
    "id": "rc-3pc-020",
    "productCode": "RC-3PC-020",
    "slug": "peach-floral-printed-three-piece-kurti-set-rc-3pc-020-rc-3pc-020",
    "name": "Peach Floral Printed Three-Piece Kurti Set (RC-3PC-020)",
    "shortDescription": "Complete 3-piece peach festive ensemble with kurti, bottom, and dupatta.",
    "description": "An exquisite three-piece festive ensemble in peach, featuring a richly detailed kurti, coordinated trousers, and a matching dupatta designed for celebratory elegance.",
    "primaryCategory": "Three Piece Sets",
    "category": [
      "Three Piece Sets",
      "Festive",
      "Printed",
      "Best Sellers"
    ],
    "productType": "THREE_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Peach",
    "style": [
      "Printed",
      "Festive",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-146.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-146.jpg",
    "image": "/images/kurti/kurti-page-146.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "BESTSELLER",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": true,
    "isBestseller": true,
    "premiumTier": false,
    "createdAt": "2026-05-05T06:17:12.722Z"
  },
  {
    "id": "rc-krt-055",
    "productCode": "RC-KRT-055",
    "slug": "ivory-intricate-threadwork-kurti-rc-krt-055-rc-krt-055",
    "name": "Ivory Intricate Threadwork Kurti (RC-KRT-055)",
    "shortDescription": "Graceful standalone ivory kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece ivory kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered",
      "New Arrivals"
    ],
    "productType": "SINGLE_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Ivory",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-147.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-147.jpg",
    "image": "/images/kurti/kurti-page-147.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "NEW",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": true,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-05-04T06:17:12.722Z"
  },
  {
    "id": "rc-krt-056",
    "productCode": "RC-KRT-056",
    "slug": "sage-traditional-motif-printed-kurti-rc-krt-056-rc-krt-056",
    "name": "Sage Traditional Motif Printed Kurti (RC-KRT-056)",
    "shortDescription": "Graceful standalone sage kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece sage kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Printed"
    ],
    "productType": "SINGLE_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Sage",
    "style": [
      "Printed",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-148.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-148.jpg",
    "image": "/images/kurti/kurti-page-148.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-05-03T06:17:12.722Z"
  },
  {
    "id": "rc-krt-057",
    "productCode": "RC-KRT-057",
    "slug": "beige-chikankari-inspired-kurti-rc-krt-057-rc-krt-057",
    "name": "Beige Chikankari Inspired Kurti (RC-KRT-057)",
    "shortDescription": "Graceful standalone beige kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece beige kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered"
    ],
    "productType": "SINGLE_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Beige",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-149.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-149.jpg",
    "image": "/images/kurti/kurti-page-149.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-05-02T06:17:12.722Z"
  },
  {
    "id": "rc-2pc-052",
    "productCode": "RC-2PC-052",
    "slug": "cream-paisley-embroidered-kurti-set-rc-2pc-052-rc-2pc-052",
    "name": "Cream Paisley Embroidered Kurti Set (RC-2PC-052)",
    "shortDescription": "Curated 2-piece coordinated cream kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in cream, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Embroidered"
    ],
    "productType": "TWO_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Cream",
    "style": [
      "Embroidered",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-150.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-150.jpg",
    "image": "/images/kurti/kurti-page-150.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-05-01T06:17:12.722Z"
  },
  {
    "id": "rc-2pc-053",
    "productCode": "RC-2PC-053",
    "slug": "teal-ethnic-floral-printed-kurti-set-rc-2pc-053",
    "name": "Teal Ethnic Floral Printed Kurti Set",
    "shortDescription": "Curated 2-piece coordinated teal kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in teal, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Printed",
      "Best Sellers"
    ],
    "productType": "TWO_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Teal",
    "style": [
      "Printed",
      "Contemporary"
    ],
    "images": [
      "/images/kurti/kurti-page-151.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-151.jpg",
    "image": "/images/kurti/kurti-page-151.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "BESTSELLER",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": true,
    "isBestseller": true,
    "premiumTier": false,
    "createdAt": "2026-04-30T06:17:12.722Z"
  },
  {
    "id": "rc-3pc-021",
    "productCode": "RC-3PC-021",
    "slug": "brown-floral-printed-three-piece-kurti-set-rc-3pc-021-rc-3pc-021",
    "name": "Brown Floral Printed Three-Piece Kurti Set (RC-3PC-021)",
    "shortDescription": "Complete 3-piece brown festive ensemble with kurti, bottom, and dupatta.",
    "description": "An exquisite three-piece festive ensemble in brown, featuring a richly detailed kurti, coordinated trousers, and a matching dupatta designed for celebratory elegance.",
    "primaryCategory": "Three Piece Sets",
    "category": [
      "Three Piece Sets",
      "Festive",
      "Printed"
    ],
    "productType": "THREE_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Brown",
    "style": [
      "Printed",
      "Festive",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-152.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-152.jpg",
    "image": "/images/kurti/kurti-page-152.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-04-29T06:17:12.722Z"
  },
  {
    "id": "rc-krt-058",
    "productCode": "RC-KRT-058",
    "slug": "wine-paisley-embroidered-kurti-rc-krt-058-rc-krt-058",
    "name": "Wine Paisley Embroidered Kurti (RC-KRT-058)",
    "shortDescription": "Graceful standalone wine kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece wine kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered"
    ],
    "productType": "SINGLE_PIECE",
    "price": 499,
    "compareAtPrice": 999,
    "color": "Wine",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-153.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-153.jpg",
    "image": "/images/kurti/kurti-page-153.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-04-28T06:17:12.722Z"
  },
  {
    "id": "rc-krt-059",
    "productCode": "RC-KRT-059",
    "slug": "navy-traditional-motif-printed-kurti-rc-krt-059-rc-krt-059",
    "name": "Navy Traditional Motif Printed Kurti (RC-KRT-059)",
    "shortDescription": "Graceful standalone navy kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece navy kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Printed",
      "New Arrivals"
    ],
    "productType": "SINGLE_PIECE",
    "price": 1299,
    "compareAtPrice": 2499,
    "color": "Navy",
    "style": [
      "Printed",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-154.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-154.jpg",
    "image": "/images/kurti/kurti-page-154.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "NEW",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": true,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-04-27T06:17:12.722Z"
  },
  {
    "id": "rc-krt-060",
    "productCode": "RC-KRT-060",
    "slug": "terracotta-classic-buti-embroidered-kurti-rc-krt-060-rc-krt-060",
    "name": "Terracotta Classic Buti Embroidered Kurti (RC-KRT-060)",
    "shortDescription": "Graceful standalone terracotta kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece terracotta kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered"
    ],
    "productType": "SINGLE_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Terracotta",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-155.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-155.jpg",
    "image": "/images/kurti/kurti-page-155.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-04-26T06:17:12.722Z"
  },
  {
    "id": "rc-2pc-054",
    "productCode": "RC-2PC-054",
    "slug": "burgundy-paisley-embroidered-kurti-set-rc-2pc-054-rc-2pc-054",
    "name": "Burgundy Paisley Embroidered Kurti Set (RC-2PC-054)",
    "shortDescription": "Curated 2-piece coordinated burgundy kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in burgundy, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Embroidered",
      "Best Sellers"
    ],
    "productType": "TWO_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Burgundy",
    "style": [
      "Embroidered",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-156.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-156.jpg",
    "image": "/images/kurti/kurti-page-156.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "BESTSELLER",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": true,
    "isBestseller": true,
    "premiumTier": false,
    "createdAt": "2026-04-25T06:17:12.722Z"
  },
  {
    "id": "rc-2pc-055",
    "productCode": "RC-2PC-055",
    "slug": "powder-blue-geometric-block-printed-kurti-set-rc-2pc-055",
    "name": "Powder Blue Geometric Block Printed Kurti Set",
    "shortDescription": "Curated 2-piece coordinated powder blue kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in powder blue, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Printed"
    ],
    "productType": "TWO_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Powder Blue",
    "style": [
      "Printed",
      "Contemporary"
    ],
    "images": [
      "/images/kurti/kurti-page-157.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-157.jpg",
    "image": "/images/kurti/kurti-page-157.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-04-24T06:17:12.722Z"
  },
  {
    "id": "rc-3pc-022",
    "productCode": "RC-3PC-022",
    "slug": "emerald-green-floral-printed-three-piece-kurti-set-rc-3pc-022-rc-3pc-022",
    "name": "Emerald Green Floral Printed Three-Piece Kurti Set (RC-3PC-022)",
    "shortDescription": "Complete 3-piece emerald green festive ensemble with kurti, bottom, and dupatta.",
    "description": "An exquisite three-piece festive ensemble in emerald green, featuring a richly detailed kurti, coordinated trousers, and a matching dupatta designed for celebratory elegance.",
    "primaryCategory": "Three Piece Sets",
    "category": [
      "Three Piece Sets",
      "Festive",
      "Printed"
    ],
    "productType": "THREE_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Emerald Green",
    "style": [
      "Printed",
      "Festive",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-158.png"
    ],
    "primaryImage": "/images/kurti/kurti-page-158.png",
    "image": "/images/kurti/kurti-page-158.png",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-04-23T06:17:12.722Z"
  },
  {
    "id": "rc-krt-061",
    "productCode": "RC-KRT-061",
    "slug": "rust-intricate-threadwork-kurti-rc-krt-061-rc-krt-061",
    "name": "Rust Intricate Threadwork Kurti (RC-KRT-061)",
    "shortDescription": "Graceful standalone rust kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece rust kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered"
    ],
    "productType": "SINGLE_PIECE",
    "price": 1299,
    "compareAtPrice": 2499,
    "color": "Rust",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-159.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-159.jpg",
    "image": "/images/kurti/kurti-page-159.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-04-22T06:17:12.722Z"
  },
  {
    "id": "rc-krt-062",
    "productCode": "RC-KRT-062",
    "slug": "blush-traditional-motif-printed-kurti-rc-krt-062-rc-krt-062",
    "name": "Blush Traditional Motif Printed Kurti (RC-KRT-062)",
    "shortDescription": "Graceful standalone blush kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece blush kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Printed"
    ],
    "productType": "SINGLE_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Blush",
    "style": [
      "Printed",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-160.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-160.jpg",
    "image": "/images/kurti/kurti-page-160.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-04-21T06:17:12.722Z"
  },
  {
    "id": "rc-krt-063",
    "productCode": "RC-KRT-063",
    "slug": "black-chikankari-inspired-kurti-rc-krt-063-rc-krt-063",
    "name": "Black Chikankari Inspired Kurti (RC-KRT-063)",
    "shortDescription": "Graceful standalone black kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece black kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered",
      "New Arrivals",
      "Best Sellers"
    ],
    "productType": "SINGLE_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Black",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-162.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-162.jpg",
    "image": "/images/kurti/kurti-page-162.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "NEW",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": true,
    "isBestSeller": true,
    "isBestseller": true,
    "premiumTier": false,
    "createdAt": "2026-04-20T06:17:12.722Z"
  },
  {
    "id": "rc-2pc-056",
    "productCode": "RC-2PC-056",
    "slug": "mustard-paisley-embroidered-kurti-set-rc-2pc-056-rc-2pc-056",
    "name": "Mustard Paisley Embroidered Kurti Set (RC-2PC-056)",
    "shortDescription": "Curated 2-piece coordinated mustard kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in mustard, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Embroidered"
    ],
    "productType": "TWO_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Mustard",
    "style": [
      "Embroidered",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-163.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-163.jpg",
    "image": "/images/kurti/kurti-page-163.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-04-19T06:17:12.722Z"
  },
  {
    "id": "rc-2pc-057",
    "productCode": "RC-2PC-057",
    "slug": "pink-abstract-block-printed-kurti-set-rc-2pc-057",
    "name": "Pink Abstract Block Printed Kurti Set",
    "shortDescription": "Curated 2-piece coordinated pink kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in pink, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Printed"
    ],
    "productType": "TWO_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Pink",
    "style": [
      "Printed",
      "Contemporary"
    ],
    "images": [
      "/images/kurti/kurti-page-164.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-164.jpg",
    "image": "/images/kurti/kurti-page-164.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-04-18T06:17:12.722Z"
  },
  {
    "id": "rc-3pc-023",
    "productCode": "RC-3PC-023",
    "slug": "maroon-floral-printed-three-piece-kurti-set-rc-3pc-023-rc-3pc-023",
    "name": "Maroon Floral Printed Three-Piece Kurti Set (RC-3PC-023)",
    "shortDescription": "Complete 3-piece maroon festive ensemble with kurti, bottom, and dupatta.",
    "description": "An exquisite three-piece festive ensemble in maroon, featuring a richly detailed kurti, coordinated trousers, and a matching dupatta designed for celebratory elegance.",
    "primaryCategory": "Three Piece Sets",
    "category": [
      "Three Piece Sets",
      "Festive",
      "Printed"
    ],
    "productType": "THREE_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Maroon",
    "style": [
      "Printed",
      "Festive",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-165.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-165.jpg",
    "image": "/images/kurti/kurti-page-165.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-04-17T06:17:12.722Z"
  },
  {
    "id": "rc-krt-064",
    "productCode": "RC-KRT-064",
    "slug": "olive-paisley-embroidered-kurti-rc-krt-064-rc-krt-064",
    "name": "Olive Paisley Embroidered Kurti (RC-KRT-064)",
    "shortDescription": "Graceful standalone olive kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece olive kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered"
    ],
    "productType": "SINGLE_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Olive",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-166.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-166.jpg",
    "image": "/images/kurti/kurti-page-166.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-04-16T06:17:12.722Z"
  },
  {
    "id": "rc-krt-065",
    "productCode": "RC-KRT-065",
    "slug": "peach-traditional-motif-printed-kurti-rc-krt-065-rc-krt-065",
    "name": "Peach Traditional Motif Printed Kurti (RC-KRT-065)",
    "shortDescription": "Graceful standalone peach kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece peach kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Printed",
      "Best Sellers"
    ],
    "productType": "SINGLE_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Peach",
    "style": [
      "Printed",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-167.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-167.jpg",
    "image": "/images/kurti/kurti-page-167.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "BESTSELLER",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": true,
    "isBestseller": true,
    "premiumTier": false,
    "createdAt": "2026-04-15T06:17:12.723Z"
  },
  {
    "id": "rc-krt-066",
    "productCode": "RC-KRT-066",
    "slug": "ivory-classic-buti-embroidered-kurti-rc-krt-066-rc-krt-066",
    "name": "Ivory Classic Buti Embroidered Kurti (RC-KRT-066)",
    "shortDescription": "Graceful standalone ivory kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece ivory kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered"
    ],
    "productType": "SINGLE_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Ivory",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-168.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-168.jpg",
    "image": "/images/kurti/kurti-page-168.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-04-14T06:17:12.723Z"
  },
  {
    "id": "rc-2pc-058",
    "productCode": "RC-2PC-058",
    "slug": "sage-paisley-embroidered-kurti-set-rc-2pc-058-rc-2pc-058",
    "name": "Sage Paisley Embroidered Kurti Set (RC-2PC-058)",
    "shortDescription": "Curated 2-piece coordinated sage kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in sage, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Embroidered",
      "New Arrivals"
    ],
    "productType": "TWO_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Sage",
    "style": [
      "Embroidered",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-169.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-169.jpg",
    "image": "/images/kurti/kurti-page-169.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "NEW",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": true,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-04-13T06:17:12.723Z"
  },
  {
    "id": "rc-2pc-059",
    "productCode": "RC-2PC-059",
    "slug": "beige-ethnic-floral-printed-kurti-set-rc-2pc-059",
    "name": "Beige Ethnic Floral Printed Kurti Set",
    "shortDescription": "Curated 2-piece coordinated beige kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in beige, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Printed"
    ],
    "productType": "TWO_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Beige",
    "style": [
      "Printed",
      "Contemporary"
    ],
    "images": [
      "/images/kurti/kurti-page-170.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-170.jpg",
    "image": "/images/kurti/kurti-page-170.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-04-12T06:17:12.723Z"
  },
  {
    "id": "rc-3pc-024",
    "productCode": "RC-3PC-024",
    "slug": "cream-floral-printed-three-piece-kurti-set-rc-3pc-024-rc-3pc-024",
    "name": "Cream Floral Printed Three-Piece Kurti Set (RC-3PC-024)",
    "shortDescription": "Complete 3-piece cream festive ensemble with kurti, bottom, and dupatta.",
    "description": "An exquisite three-piece festive ensemble in cream, featuring a richly detailed kurti, coordinated trousers, and a matching dupatta designed for celebratory elegance.",
    "primaryCategory": "Three Piece Sets",
    "category": [
      "Three Piece Sets",
      "Festive",
      "Printed"
    ],
    "productType": "THREE_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Cream",
    "style": [
      "Printed",
      "Festive",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-171.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-171.jpg",
    "image": "/images/kurti/kurti-page-171.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-04-11T06:17:12.723Z"
  },
  {
    "id": "rc-krt-067",
    "productCode": "RC-KRT-067",
    "slug": "teal-intricate-threadwork-kurti-rc-krt-067-rc-krt-067",
    "name": "Teal Intricate Threadwork Kurti (RC-KRT-067)",
    "shortDescription": "Graceful standalone teal kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece teal kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered",
      "Best Sellers"
    ],
    "productType": "SINGLE_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Teal",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-173.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-173.jpg",
    "image": "/images/kurti/kurti-page-173.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "BESTSELLER",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": true,
    "isBestseller": true,
    "premiumTier": false,
    "createdAt": "2026-04-10T06:17:12.723Z"
  },
  {
    "id": "rc-krt-068",
    "productCode": "RC-KRT-068",
    "slug": "brown-traditional-motif-printed-kurti-rc-krt-068-rc-krt-068",
    "name": "Brown Traditional Motif Printed Kurti (RC-KRT-068)",
    "shortDescription": "Graceful standalone brown kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece brown kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Printed"
    ],
    "productType": "SINGLE_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Brown",
    "style": [
      "Printed",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-174.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-174.jpg",
    "image": "/images/kurti/kurti-page-174.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-04-09T06:17:12.723Z"
  },
  {
    "id": "rc-krt-069",
    "productCode": "RC-KRT-069",
    "slug": "wine-chikankari-inspired-kurti-rc-krt-069-rc-krt-069",
    "name": "Wine Chikankari Inspired Kurti (RC-KRT-069)",
    "shortDescription": "Graceful standalone wine kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece wine kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered"
    ],
    "productType": "SINGLE_PIECE",
    "price": 899,
    "compareAtPrice": 1699,
    "color": "Wine",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-175.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-175.jpg",
    "image": "/images/kurti/kurti-page-175.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-04-08T06:17:12.723Z"
  },
  {
    "id": "rc-2pc-060",
    "productCode": "RC-2PC-060",
    "slug": "navy-paisley-embroidered-kurti-set-rc-2pc-060-rc-2pc-060",
    "name": "Navy Paisley Embroidered Kurti Set (RC-2PC-060)",
    "shortDescription": "Curated 2-piece coordinated navy kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in navy, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Embroidered"
    ],
    "productType": "TWO_PIECE",
    "price": 699,
    "compareAtPrice": 1399,
    "color": "Navy",
    "style": [
      "Embroidered",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-176.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-176.jpg",
    "image": "/images/kurti/kurti-page-176.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-04-07T06:17:12.723Z"
  },
  {
    "id": "rc-2pc-061",
    "productCode": "RC-2PC-061",
    "slug": "terracotta-geometric-block-printed-kurti-set-rc-2pc-061",
    "name": "Terracotta Geometric Block Printed Kurti Set",
    "shortDescription": "Curated 2-piece coordinated terracotta kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in terracotta, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Printed",
      "New Arrivals"
    ],
    "productType": "TWO_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Terracotta",
    "style": [
      "Printed",
      "Contemporary"
    ],
    "images": [
      "/images/kurti/kurti-page-177.jpg",
      "/images/kurti/kurti-page-177.png"
    ],
    "primaryImage": "/images/kurti/kurti-page-177.jpg",
    "image": "/images/kurti/kurti-page-177.jpg",
    "hoverImage": "/images/kurti/kurti-page-177.png",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "NEW",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": true,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-04-06T06:17:12.723Z"
  },
  {
    "id": "rc-3pc-025",
    "productCode": "RC-3PC-025",
    "slug": "burgundy-floral-printed-three-piece-kurti-set-rc-3pc-025-rc-3pc-025",
    "name": "Burgundy Floral Printed Three-Piece Kurti Set (RC-3PC-025)",
    "shortDescription": "Complete 3-piece burgundy festive ensemble with kurti, bottom, and dupatta.",
    "description": "An exquisite three-piece festive ensemble in burgundy, featuring a richly detailed kurti, coordinated trousers, and a matching dupatta designed for celebratory elegance.",
    "primaryCategory": "Three Piece Sets",
    "category": [
      "Three Piece Sets",
      "Festive",
      "Printed",
      "Best Sellers"
    ],
    "productType": "THREE_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Burgundy",
    "style": [
      "Printed",
      "Festive",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-178.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-178.jpg",
    "image": "/images/kurti/kurti-page-178.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "BESTSELLER",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": true,
    "isBestseller": true,
    "premiumTier": false,
    "createdAt": "2026-04-05T06:17:12.723Z"
  },
  {
    "id": "rc-krt-070",
    "productCode": "RC-KRT-070",
    "slug": "powder-blue-paisley-embroidered-kurti-rc-krt-070-rc-krt-070",
    "name": "Powder Blue Paisley Embroidered Kurti (RC-KRT-070)",
    "shortDescription": "Graceful standalone powder blue kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece powder blue kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered"
    ],
    "productType": "SINGLE_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Powder Blue",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-179.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-179.jpg",
    "image": "/images/kurti/kurti-page-179.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-04-04T06:17:12.723Z"
  },
  {
    "id": "rc-krt-071",
    "productCode": "RC-KRT-071",
    "slug": "emerald-green-traditional-motif-printed-kurti-rc-krt-071-rc-krt-071",
    "name": "Emerald Green Traditional Motif Printed Kurti (RC-KRT-071)",
    "shortDescription": "Graceful standalone emerald green kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece emerald green kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Printed"
    ],
    "productType": "SINGLE_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Emerald Green",
    "style": [
      "Printed",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-180.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-180.jpg",
    "image": "/images/kurti/kurti-page-180.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-04-03T06:17:12.723Z"
  },
  {
    "id": "rc-krt-072",
    "productCode": "RC-KRT-072",
    "slug": "black-paisley-heritage-embroidered-kurti-rc-krt-072",
    "name": "Black Paisley Heritage Embroidered Kurti",
    "shortDescription": "Graceful standalone black kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece black kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Embroidered",
      "Everyday"
    ],
    "productType": "SINGLE_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Black",
    "style": [
      "Embroidered",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-181.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-181.jpg",
    "image": "/images/kurti/kurti-page-181.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-04-02T06:17:12.723Z"
  },
  {
    "id": "rc-2pc-062",
    "productCode": "RC-2PC-062",
    "slug": "blush-paisley-embroidered-kurti-set-rc-2pc-062-rc-2pc-062",
    "name": "Blush Paisley Embroidered Kurti Set (RC-2PC-062)",
    "shortDescription": "Curated 2-piece coordinated blush kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in blush, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Embroidered"
    ],
    "productType": "TWO_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Blush",
    "style": [
      "Embroidered",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-182.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-182.jpg",
    "image": "/images/kurti/kurti-page-182.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-04-01T06:17:12.723Z"
  },
  {
    "id": "rc-2pc-063",
    "productCode": "RC-2PC-063",
    "slug": "black-abstract-block-printed-kurti-set-rc-2pc-063",
    "name": "Black Abstract Block Printed Kurti Set",
    "shortDescription": "Curated 2-piece coordinated black kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in black, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Printed",
      "Best Sellers"
    ],
    "productType": "TWO_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Black",
    "style": [
      "Printed",
      "Contemporary"
    ],
    "images": [
      "/images/kurti/kurti-page-183.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-183.jpg",
    "image": "/images/kurti/kurti-page-183.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "BESTSELLER",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": true,
    "isBestseller": true,
    "premiumTier": false,
    "createdAt": "2026-03-31T06:17:12.723Z"
  },
  {
    "id": "rc-3pc-026",
    "productCode": "RC-3PC-026",
    "slug": "mustard-floral-printed-three-piece-kurti-set-rc-3pc-026-rc-3pc-026",
    "name": "Mustard Floral Printed Three-Piece Kurti Set (RC-3PC-026)",
    "shortDescription": "Complete 3-piece mustard festive ensemble with kurti, bottom, and dupatta.",
    "description": "An exquisite three-piece festive ensemble in mustard, featuring a richly detailed kurti, coordinated trousers, and a matching dupatta designed for celebratory elegance.",
    "primaryCategory": "Three Piece Sets",
    "category": [
      "Three Piece Sets",
      "Festive",
      "Printed",
      "New Arrivals"
    ],
    "productType": "THREE_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Mustard",
    "style": [
      "Printed",
      "Festive",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-184.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-184.jpg",
    "image": "/images/kurti/kurti-page-184.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "NEW",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": true,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-03-30T06:17:12.723Z"
  },
  {
    "id": "rc-krt-073",
    "productCode": "RC-KRT-073",
    "slug": "pink-intricate-threadwork-kurti-rc-krt-073-rc-krt-073",
    "name": "Pink Intricate Threadwork Kurti (RC-KRT-073)",
    "shortDescription": "Graceful standalone pink kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece pink kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered"
    ],
    "productType": "SINGLE_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Pink",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-185.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-185.jpg",
    "image": "/images/kurti/kurti-page-185.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-03-29T06:17:12.723Z"
  },
  {
    "id": "rc-krt-074",
    "productCode": "RC-KRT-074",
    "slug": "maroon-traditional-motif-printed-kurti-rc-krt-074-rc-krt-074",
    "name": "Maroon Traditional Motif Printed Kurti (RC-KRT-074)",
    "shortDescription": "Graceful standalone maroon kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece maroon kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Printed"
    ],
    "productType": "SINGLE_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Maroon",
    "style": [
      "Printed",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-186.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-186.jpg",
    "image": "/images/kurti/kurti-page-186.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-03-28T06:17:12.723Z"
  },
  {
    "id": "rc-krt-075",
    "productCode": "RC-KRT-075",
    "slug": "olive-chikankari-inspired-kurti-rc-krt-075-rc-krt-075",
    "name": "Olive Chikankari Inspired Kurti (RC-KRT-075)",
    "shortDescription": "Graceful standalone olive kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece olive kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered"
    ],
    "productType": "SINGLE_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Olive",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-187.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-187.jpg",
    "image": "/images/kurti/kurti-page-187.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-03-27T06:17:12.723Z"
  },
  {
    "id": "rc-2pc-064",
    "productCode": "RC-2PC-064",
    "slug": "peach-paisley-embroidered-kurti-set-rc-2pc-064-rc-2pc-064",
    "name": "Peach Paisley Embroidered Kurti Set (RC-2PC-064)",
    "shortDescription": "Curated 2-piece coordinated peach kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in peach, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Embroidered",
      "Best Sellers"
    ],
    "productType": "TWO_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Peach",
    "style": [
      "Embroidered",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-188.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-188.jpg",
    "image": "/images/kurti/kurti-page-188.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "BESTSELLER",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": true,
    "isBestseller": true,
    "premiumTier": false,
    "createdAt": "2026-03-26T06:17:12.723Z"
  },
  {
    "id": "rc-2pc-065",
    "productCode": "RC-2PC-065",
    "slug": "ivory-ethnic-floral-printed-kurti-set-rc-2pc-065",
    "name": "Ivory Ethnic Floral Printed Kurti Set",
    "shortDescription": "Curated 2-piece coordinated ivory kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in ivory, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Printed"
    ],
    "productType": "TWO_PIECE",
    "price": 499,
    "compareAtPrice": 999,
    "color": "Ivory",
    "style": [
      "Printed",
      "Contemporary"
    ],
    "images": [
      "/images/kurti/kurti-page-189.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-189.jpg",
    "image": "/images/kurti/kurti-page-189.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-03-25T06:17:12.723Z"
  },
  {
    "id": "rc-3pc-027",
    "productCode": "RC-3PC-027",
    "slug": "sage-floral-printed-three-piece-kurti-set-rc-3pc-027-rc-3pc-027",
    "name": "Sage Floral Printed Three-Piece Kurti Set (RC-3PC-027)",
    "shortDescription": "Complete 3-piece sage festive ensemble with kurti, bottom, and dupatta.",
    "description": "An exquisite three-piece festive ensemble in sage, featuring a richly detailed kurti, coordinated trousers, and a matching dupatta designed for celebratory elegance.",
    "primaryCategory": "Three Piece Sets",
    "category": [
      "Three Piece Sets",
      "Festive",
      "Printed"
    ],
    "productType": "THREE_PIECE",
    "price": 499,
    "compareAtPrice": 999,
    "color": "Sage",
    "style": [
      "Printed",
      "Festive",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-190.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-190.jpg",
    "image": "/images/kurti/kurti-page-190.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-03-24T06:17:12.723Z"
  },
  {
    "id": "rc-krt-076",
    "productCode": "RC-KRT-076",
    "slug": "beige-paisley-embroidered-kurti-rc-krt-076-rc-krt-076",
    "name": "Beige Paisley Embroidered Kurti (RC-KRT-076)",
    "shortDescription": "Graceful standalone beige kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece beige kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered",
      "New Arrivals"
    ],
    "productType": "SINGLE_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Beige",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-191.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-191.jpg",
    "image": "/images/kurti/kurti-page-191.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "NEW",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": true,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-03-23T06:17:12.723Z"
  },
  {
    "id": "rc-krt-077",
    "productCode": "RC-KRT-077",
    "slug": "cream-traditional-motif-printed-kurti-rc-krt-077-rc-krt-077",
    "name": "Cream Traditional Motif Printed Kurti (RC-KRT-077)",
    "shortDescription": "Graceful standalone cream kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece cream kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Printed"
    ],
    "productType": "SINGLE_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Cream",
    "style": [
      "Printed",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-192.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-192.jpg",
    "image": "/images/kurti/kurti-page-192.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-03-22T06:17:12.723Z"
  },
  {
    "id": "rc-krt-078",
    "productCode": "RC-KRT-078",
    "slug": "teal-classic-buti-embroidered-kurti-rc-krt-078-rc-krt-078",
    "name": "Teal Classic Buti Embroidered Kurti (RC-KRT-078)",
    "shortDescription": "Graceful standalone teal kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece teal kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered",
      "Best Sellers"
    ],
    "productType": "SINGLE_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Teal",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-193.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-193.jpg",
    "image": "/images/kurti/kurti-page-193.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "BESTSELLER",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": true,
    "isBestseller": true,
    "premiumTier": false,
    "createdAt": "2026-03-21T06:17:12.723Z"
  },
  {
    "id": "rc-2pc-066",
    "productCode": "RC-2PC-066",
    "slug": "brown-paisley-embroidered-kurti-set-rc-2pc-066-rc-2pc-066",
    "name": "Brown Paisley Embroidered Kurti Set (RC-2PC-066)",
    "shortDescription": "Curated 2-piece coordinated brown kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in brown, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Embroidered"
    ],
    "productType": "TWO_PIECE",
    "price": 499,
    "compareAtPrice": 999,
    "color": "Brown",
    "style": [
      "Embroidered",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-194.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-194.jpg",
    "image": "/images/kurti/kurti-page-194.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-03-20T06:17:12.723Z"
  },
  {
    "id": "rc-2pc-067",
    "productCode": "RC-2PC-067",
    "slug": "wine-geometric-block-printed-kurti-set-rc-2pc-067",
    "name": "Wine Geometric Block Printed Kurti Set",
    "shortDescription": "Curated 2-piece coordinated wine kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in wine, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Printed"
    ],
    "productType": "TWO_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Wine",
    "style": [
      "Printed",
      "Contemporary"
    ],
    "images": [
      "/images/kurti/kurti-page-195.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-195.jpg",
    "image": "/images/kurti/kurti-page-195.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-03-19T06:17:12.723Z"
  },
  {
    "id": "rc-3pc-028",
    "productCode": "RC-3PC-028",
    "slug": "navy-floral-printed-three-piece-kurti-set-rc-3pc-028-rc-3pc-028",
    "name": "Navy Floral Printed Three-Piece Kurti Set (RC-3PC-028)",
    "shortDescription": "Complete 3-piece navy festive ensemble with kurti, bottom, and dupatta.",
    "description": "An exquisite three-piece festive ensemble in navy, featuring a richly detailed kurti, coordinated trousers, and a matching dupatta designed for celebratory elegance.",
    "primaryCategory": "Three Piece Sets",
    "category": [
      "Three Piece Sets",
      "Festive",
      "Printed"
    ],
    "productType": "THREE_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Navy",
    "style": [
      "Printed",
      "Festive",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-196.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-196.jpg",
    "image": "/images/kurti/kurti-page-196.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-03-18T06:17:12.723Z"
  },
  {
    "id": "rc-krt-079",
    "productCode": "RC-KRT-079",
    "slug": "terracotta-intricate-threadwork-kurti-rc-krt-079-rc-krt-079",
    "name": "Terracotta Intricate Threadwork Kurti (RC-KRT-079)",
    "shortDescription": "Graceful standalone terracotta kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece terracotta kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered"
    ],
    "productType": "SINGLE_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Terracotta",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-197.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-197.jpg",
    "image": "/images/kurti/kurti-page-197.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-03-17T06:17:12.723Z"
  },
  {
    "id": "rc-krt-080",
    "productCode": "RC-KRT-080",
    "slug": "burgundy-traditional-motif-printed-kurti-rc-krt-080-rc-krt-080",
    "name": "Burgundy Traditional Motif Printed Kurti (RC-KRT-080)",
    "shortDescription": "Graceful standalone burgundy kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece burgundy kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Printed",
      "New Arrivals",
      "Best Sellers"
    ],
    "productType": "SINGLE_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Burgundy",
    "style": [
      "Printed",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-198.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-198.jpg",
    "image": "/images/kurti/kurti-page-198.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "NEW",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": true,
    "isBestSeller": true,
    "isBestseller": true,
    "premiumTier": false,
    "createdAt": "2026-03-16T06:17:12.723Z"
  },
  {
    "id": "rc-krt-081",
    "productCode": "RC-KRT-081",
    "slug": "powder-blue-chikankari-inspired-kurti-rc-krt-081-rc-krt-081",
    "name": "Powder Blue Chikankari Inspired Kurti (RC-KRT-081)",
    "shortDescription": "Graceful standalone powder blue kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece powder blue kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered"
    ],
    "productType": "SINGLE_PIECE",
    "price": 899,
    "compareAtPrice": 1699,
    "color": "Powder Blue",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-199.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-199.jpg",
    "image": "/images/kurti/kurti-page-199.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-03-15T06:17:12.723Z"
  },
  {
    "id": "rc-2pc-068",
    "productCode": "RC-2PC-068",
    "slug": "emerald-green-paisley-embroidered-kurti-set-rc-2pc-068-rc-2pc-068",
    "name": "Emerald Green Paisley Embroidered Kurti Set (RC-2PC-068)",
    "shortDescription": "Curated 2-piece coordinated emerald green kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in emerald green, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Embroidered"
    ],
    "productType": "TWO_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Emerald Green",
    "style": [
      "Embroidered",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-200.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-200.jpg",
    "image": "/images/kurti/kurti-page-200.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-03-14T06:17:12.723Z"
  },
  {
    "id": "rc-2pc-069",
    "productCode": "RC-2PC-069",
    "slug": "rust-abstract-block-printed-kurti-set-rc-2pc-069",
    "name": "Rust Abstract Block Printed Kurti Set",
    "shortDescription": "Curated 2-piece coordinated rust kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in rust, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Printed"
    ],
    "productType": "TWO_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Rust",
    "style": [
      "Printed",
      "Contemporary"
    ],
    "images": [
      "/images/kurti/kurti-page-201.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-201.jpg",
    "image": "/images/kurti/kurti-page-201.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-03-13T06:17:12.723Z"
  },
  {
    "id": "rc-3pc-029",
    "productCode": "RC-3PC-029",
    "slug": "blush-floral-printed-three-piece-kurti-set-rc-3pc-029-rc-3pc-029",
    "name": "Blush Floral Printed Three-Piece Kurti Set (RC-3PC-029)",
    "shortDescription": "Complete 3-piece blush festive ensemble with kurti, bottom, and dupatta.",
    "description": "An exquisite three-piece festive ensemble in blush, featuring a richly detailed kurti, coordinated trousers, and a matching dupatta designed for celebratory elegance.",
    "primaryCategory": "Three Piece Sets",
    "category": [
      "Three Piece Sets",
      "Festive",
      "Printed"
    ],
    "productType": "THREE_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Blush",
    "style": [
      "Printed",
      "Festive",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-202.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-202.jpg",
    "image": "/images/kurti/kurti-page-202.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-03-12T06:17:12.723Z"
  },
  {
    "id": "rc-krt-082",
    "productCode": "RC-KRT-082",
    "slug": "black-paisley-embroidered-kurti-rc-krt-082-rc-krt-082",
    "name": "Black Paisley Embroidered Kurti (RC-KRT-082)",
    "shortDescription": "Graceful standalone black kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece black kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered",
      "Best Sellers"
    ],
    "productType": "SINGLE_PIECE",
    "price": 899,
    "compareAtPrice": 1699,
    "color": "Black",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-203.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-203.jpg",
    "image": "/images/kurti/kurti-page-203.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "BESTSELLER",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": true,
    "isBestseller": true,
    "premiumTier": false,
    "createdAt": "2026-03-11T06:17:12.723Z"
  },
  {
    "id": "rc-krt-083",
    "productCode": "RC-KRT-083",
    "slug": "mustard-traditional-motif-printed-kurti-rc-krt-083-rc-krt-083",
    "name": "Mustard Traditional Motif Printed Kurti (RC-KRT-083)",
    "shortDescription": "Graceful standalone mustard kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece mustard kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Printed"
    ],
    "productType": "SINGLE_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Mustard",
    "style": [
      "Printed",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-204.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-204.jpg",
    "image": "/images/kurti/kurti-page-204.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-03-10T06:17:12.723Z"
  },
  {
    "id": "rc-krt-084",
    "productCode": "RC-KRT-084",
    "slug": "pink-classic-buti-embroidered-kurti-rc-krt-084-rc-krt-084",
    "name": "Pink Classic Buti Embroidered Kurti (RC-KRT-084)",
    "shortDescription": "Graceful standalone pink kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece pink kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered",
      "New Arrivals"
    ],
    "productType": "SINGLE_PIECE",
    "price": 699,
    "compareAtPrice": 1399,
    "color": "Pink",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-205.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-205.jpg",
    "image": "/images/kurti/kurti-page-205.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "NEW",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": true,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-03-09T06:17:12.723Z"
  },
  {
    "id": "rc-2pc-070",
    "productCode": "RC-2PC-070",
    "slug": "maroon-paisley-embroidered-kurti-set-rc-2pc-070-rc-2pc-070",
    "name": "Maroon Paisley Embroidered Kurti Set (RC-2PC-070)",
    "shortDescription": "Curated 2-piece coordinated maroon kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in maroon, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Embroidered"
    ],
    "productType": "TWO_PIECE",
    "price": 699,
    "compareAtPrice": 1399,
    "color": "Maroon",
    "style": [
      "Embroidered",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-206.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-206.jpg",
    "image": "/images/kurti/kurti-page-206.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-03-08T06:17:12.723Z"
  },
  {
    "id": "rc-2pc-071",
    "productCode": "RC-2PC-071",
    "slug": "olive-ethnic-floral-printed-kurti-set-rc-2pc-071",
    "name": "Olive Ethnic Floral Printed Kurti Set",
    "shortDescription": "Curated 2-piece coordinated olive kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in olive, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Printed"
    ],
    "productType": "TWO_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Olive",
    "style": [
      "Printed",
      "Contemporary"
    ],
    "images": [
      "/images/kurti/kurti-page-207.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-207.jpg",
    "image": "/images/kurti/kurti-page-207.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-03-07T06:17:12.723Z"
  },
  {
    "id": "rc-3pc-030",
    "productCode": "RC-3PC-030",
    "slug": "peach-floral-printed-three-piece-kurti-set-rc-3pc-030-rc-3pc-030",
    "name": "Peach Floral Printed Three-Piece Kurti Set (RC-3PC-030)",
    "shortDescription": "Complete 3-piece peach festive ensemble with kurti, bottom, and dupatta.",
    "description": "An exquisite three-piece festive ensemble in peach, featuring a richly detailed kurti, coordinated trousers, and a matching dupatta designed for celebratory elegance.",
    "primaryCategory": "Three Piece Sets",
    "category": [
      "Three Piece Sets",
      "Festive",
      "Printed",
      "Best Sellers"
    ],
    "productType": "THREE_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Peach",
    "style": [
      "Printed",
      "Festive",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-208.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-208.jpg",
    "image": "/images/kurti/kurti-page-208.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "BESTSELLER",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": true,
    "isBestseller": true,
    "premiumTier": false,
    "createdAt": "2026-03-06T06:17:12.723Z"
  },
  {
    "id": "rc-krt-085",
    "productCode": "RC-KRT-085",
    "slug": "ivory-intricate-threadwork-kurti-rc-krt-085-rc-krt-085",
    "name": "Ivory Intricate Threadwork Kurti (RC-KRT-085)",
    "shortDescription": "Graceful standalone ivory kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece ivory kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered"
    ],
    "productType": "SINGLE_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Ivory",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-209.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-209.jpg",
    "image": "/images/kurti/kurti-page-209.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-03-05T06:17:12.723Z"
  },
  {
    "id": "rc-krt-086",
    "productCode": "RC-KRT-086",
    "slug": "sage-traditional-motif-printed-kurti-rc-krt-086-rc-krt-086",
    "name": "Sage Traditional Motif Printed Kurti (RC-KRT-086)",
    "shortDescription": "Graceful standalone sage kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece sage kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Printed"
    ],
    "productType": "SINGLE_PIECE",
    "price": 699,
    "compareAtPrice": 1399,
    "color": "Sage",
    "style": [
      "Printed",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-210.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-210.jpg",
    "image": "/images/kurti/kurti-page-210.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-03-04T06:17:12.723Z"
  },
  {
    "id": "rc-krt-087",
    "productCode": "RC-KRT-087",
    "slug": "beige-chikankari-inspired-kurti-rc-krt-087-rc-krt-087",
    "name": "Beige Chikankari Inspired Kurti (RC-KRT-087)",
    "shortDescription": "Graceful standalone beige kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece beige kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered"
    ],
    "productType": "SINGLE_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Beige",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-211.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-211.jpg",
    "image": "/images/kurti/kurti-page-211.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-03-03T06:17:12.723Z"
  },
  {
    "id": "rc-2pc-072",
    "productCode": "RC-2PC-072",
    "slug": "cream-paisley-embroidered-kurti-set-rc-2pc-072-rc-2pc-072",
    "name": "Cream Paisley Embroidered Kurti Set (RC-2PC-072)",
    "shortDescription": "Curated 2-piece coordinated cream kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in cream, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Embroidered",
      "New Arrivals"
    ],
    "productType": "TWO_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Cream",
    "style": [
      "Embroidered",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-212.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-212.jpg",
    "image": "/images/kurti/kurti-page-212.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "NEW",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": true,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-03-02T06:17:12.723Z"
  },
  {
    "id": "rc-2pc-073",
    "productCode": "RC-2PC-073",
    "slug": "teal-geometric-block-printed-kurti-set-rc-2pc-073-rc-2pc-073",
    "name": "Teal Geometric Block Printed Kurti Set (RC-2PC-073)",
    "shortDescription": "Curated 2-piece coordinated teal kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in teal, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Printed",
      "Best Sellers"
    ],
    "productType": "TWO_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Teal",
    "style": [
      "Printed",
      "Contemporary"
    ],
    "images": [
      "/images/kurti/kurti-page-213.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-213.jpg",
    "image": "/images/kurti/kurti-page-213.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "BESTSELLER",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": true,
    "isBestseller": true,
    "premiumTier": false,
    "createdAt": "2026-03-01T06:17:12.723Z"
  },
  {
    "id": "rc-3pc-031",
    "productCode": "RC-3PC-031",
    "slug": "brown-floral-printed-three-piece-kurti-set-rc-3pc-031-rc-3pc-031",
    "name": "Brown Floral Printed Three-Piece Kurti Set (RC-3PC-031)",
    "shortDescription": "Complete 3-piece brown festive ensemble with kurti, bottom, and dupatta.",
    "description": "An exquisite three-piece festive ensemble in brown, featuring a richly detailed kurti, coordinated trousers, and a matching dupatta designed for celebratory elegance.",
    "primaryCategory": "Three Piece Sets",
    "category": [
      "Three Piece Sets",
      "Festive",
      "Printed"
    ],
    "productType": "THREE_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Brown",
    "style": [
      "Printed",
      "Festive",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-214.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-214.jpg",
    "image": "/images/kurti/kurti-page-214.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-02-28T06:17:12.723Z"
  },
  {
    "id": "rc-krt-088",
    "productCode": "RC-KRT-088",
    "slug": "wine-paisley-embroidered-kurti-rc-krt-088-rc-krt-088",
    "name": "Wine Paisley Embroidered Kurti (RC-KRT-088)",
    "shortDescription": "Graceful standalone wine kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece wine kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered"
    ],
    "productType": "SINGLE_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Wine",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-215.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-215.jpg",
    "image": "/images/kurti/kurti-page-215.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-02-27T06:17:12.723Z"
  },
  {
    "id": "rc-krt-089",
    "productCode": "RC-KRT-089",
    "slug": "navy-traditional-motif-printed-kurti-rc-krt-089-rc-krt-089",
    "name": "Navy Traditional Motif Printed Kurti (RC-KRT-089)",
    "shortDescription": "Graceful standalone navy kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece navy kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Printed"
    ],
    "productType": "SINGLE_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Navy",
    "style": [
      "Printed",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-216.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-216.jpg",
    "image": "/images/kurti/kurti-page-216.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-02-26T06:17:12.723Z"
  },
  {
    "id": "rc-krt-090",
    "productCode": "RC-KRT-090",
    "slug": "terracotta-classic-buti-embroidered-kurti-rc-krt-090-rc-krt-090",
    "name": "Terracotta Classic Buti Embroidered Kurti (RC-KRT-090)",
    "shortDescription": "Graceful standalone terracotta kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece terracotta kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered"
    ],
    "productType": "SINGLE_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Terracotta",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-217.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-217.jpg",
    "image": "/images/kurti/kurti-page-217.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-02-25T06:17:12.723Z"
  },
  {
    "id": "rc-2pc-074",
    "productCode": "RC-2PC-074",
    "slug": "burgundy-paisley-embroidered-kurti-set-rc-2pc-074-rc-2pc-074",
    "name": "Burgundy Paisley Embroidered Kurti Set (RC-2PC-074)",
    "shortDescription": "Curated 2-piece coordinated burgundy kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in burgundy, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Embroidered",
      "Best Sellers"
    ],
    "productType": "TWO_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Burgundy",
    "style": [
      "Embroidered",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-218.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-218.jpg",
    "image": "/images/kurti/kurti-page-218.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "BESTSELLER",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": true,
    "isBestseller": true,
    "premiumTier": false,
    "createdAt": "2026-02-24T06:17:12.723Z"
  },
  {
    "id": "rc-2pc-075",
    "productCode": "RC-2PC-075",
    "slug": "powder-blue-abstract-block-printed-kurti-set-rc-2pc-075-rc-2pc-075",
    "name": "Powder Blue Abstract Block Printed Kurti Set (RC-2PC-075)",
    "shortDescription": "Curated 2-piece coordinated powder blue kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in powder blue, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Printed",
      "New Arrivals"
    ],
    "productType": "TWO_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Powder Blue",
    "style": [
      "Printed",
      "Contemporary"
    ],
    "images": [
      "/images/kurti/kurti-page-220.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-220.jpg",
    "image": "/images/kurti/kurti-page-220.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "NEW",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": true,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-02-23T06:17:12.723Z"
  },
  {
    "id": "rc-3pc-032",
    "productCode": "RC-3PC-032",
    "slug": "emerald-green-floral-printed-three-piece-kurti-set-rc-3pc-032-rc-3pc-032",
    "name": "Emerald Green Floral Printed Three-Piece Kurti Set (RC-3PC-032)",
    "shortDescription": "Complete 3-piece emerald green festive ensemble with kurti, bottom, and dupatta.",
    "description": "An exquisite three-piece festive ensemble in emerald green, featuring a richly detailed kurti, coordinated trousers, and a matching dupatta designed for celebratory elegance.",
    "primaryCategory": "Three Piece Sets",
    "category": [
      "Three Piece Sets",
      "Festive",
      "Printed"
    ],
    "productType": "THREE_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Emerald Green",
    "style": [
      "Printed",
      "Festive",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-221.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-221.jpg",
    "image": "/images/kurti/kurti-page-221.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-02-22T06:17:12.723Z"
  },
  {
    "id": "rc-krt-091",
    "productCode": "RC-KRT-091",
    "slug": "rust-intricate-threadwork-kurti-rc-krt-091-rc-krt-091",
    "name": "Rust Intricate Threadwork Kurti (RC-KRT-091)",
    "shortDescription": "Graceful standalone rust kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece rust kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered"
    ],
    "productType": "SINGLE_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Rust",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-222.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-222.jpg",
    "image": "/images/kurti/kurti-page-222.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-02-21T06:17:12.723Z"
  },
  {
    "id": "rc-krt-092",
    "productCode": "RC-KRT-092",
    "slug": "blush-traditional-motif-printed-kurti-rc-krt-092-rc-krt-092",
    "name": "Blush Traditional Motif Printed Kurti (RC-KRT-092)",
    "shortDescription": "Graceful standalone blush kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece blush kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Printed"
    ],
    "productType": "SINGLE_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Blush",
    "style": [
      "Printed",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-223.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-223.jpg",
    "image": "/images/kurti/kurti-page-223.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-02-20T06:17:12.723Z"
  },
  {
    "id": "rc-krt-093",
    "productCode": "RC-KRT-093",
    "slug": "black-chikankari-inspired-kurti-rc-krt-093-rc-krt-093",
    "name": "Black Chikankari Inspired Kurti (RC-KRT-093)",
    "shortDescription": "Graceful standalone black kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece black kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered",
      "Best Sellers"
    ],
    "productType": "SINGLE_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Black",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-224.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-224.jpg",
    "image": "/images/kurti/kurti-page-224.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "BESTSELLER",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": true,
    "isBestseller": true,
    "premiumTier": false,
    "createdAt": "2026-02-19T06:17:12.723Z"
  },
  {
    "id": "rc-2pc-076",
    "productCode": "RC-2PC-076",
    "slug": "mustard-paisley-embroidered-kurti-set-rc-2pc-076-rc-2pc-076",
    "name": "Mustard Paisley Embroidered Kurti Set (RC-2PC-076)",
    "shortDescription": "Curated 2-piece coordinated mustard kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in mustard, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Embroidered"
    ],
    "productType": "TWO_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Mustard",
    "style": [
      "Embroidered",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-225.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-225.jpg",
    "image": "/images/kurti/kurti-page-225.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-02-18T06:17:12.723Z"
  },
  {
    "id": "rc-2pc-077",
    "productCode": "RC-2PC-077",
    "slug": "pink-ethnic-floral-printed-kurti-set-rc-2pc-077-rc-2pc-077",
    "name": "Pink Ethnic Floral Printed Kurti Set (RC-2PC-077)",
    "shortDescription": "Curated 2-piece coordinated pink kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in pink, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Printed"
    ],
    "productType": "TWO_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Pink",
    "style": [
      "Printed",
      "Contemporary"
    ],
    "images": [
      "/images/kurti/kurti-page-226.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-226.jpg",
    "image": "/images/kurti/kurti-page-226.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-02-17T06:17:12.723Z"
  },
  {
    "id": "rc-3pc-033",
    "productCode": "RC-3PC-033",
    "slug": "maroon-floral-printed-three-piece-kurti-set-rc-3pc-033-rc-3pc-033",
    "name": "Maroon Floral Printed Three-Piece Kurti Set (RC-3PC-033)",
    "shortDescription": "Complete 3-piece maroon festive ensemble with kurti, bottom, and dupatta.",
    "description": "An exquisite three-piece festive ensemble in maroon, featuring a richly detailed kurti, coordinated trousers, and a matching dupatta designed for celebratory elegance.",
    "primaryCategory": "Three Piece Sets",
    "category": [
      "Three Piece Sets",
      "Festive",
      "Printed",
      "New Arrivals"
    ],
    "productType": "THREE_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Maroon",
    "style": [
      "Printed",
      "Festive",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-227.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-227.jpg",
    "image": "/images/kurti/kurti-page-227.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "NEW",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": true,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-02-16T06:17:12.723Z"
  },
  {
    "id": "rc-krt-094",
    "productCode": "RC-KRT-094",
    "slug": "olive-paisley-embroidered-kurti-rc-krt-094-rc-krt-094",
    "name": "Olive Paisley Embroidered Kurti (RC-KRT-094)",
    "shortDescription": "Graceful standalone olive kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece olive kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered"
    ],
    "productType": "SINGLE_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Olive",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-228.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-228.jpg",
    "image": "/images/kurti/kurti-page-228.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-02-15T06:17:12.723Z"
  },
  {
    "id": "rc-krt-095",
    "productCode": "RC-KRT-095",
    "slug": "peach-traditional-motif-printed-kurti-rc-krt-095-rc-krt-095",
    "name": "Peach Traditional Motif Printed Kurti (RC-KRT-095)",
    "shortDescription": "Graceful standalone peach kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece peach kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Printed",
      "Best Sellers"
    ],
    "productType": "SINGLE_PIECE",
    "price": 999,
    "compareAtPrice": 1999,
    "color": "Peach",
    "style": [
      "Printed",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-229.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-229.jpg",
    "image": "/images/kurti/kurti-page-229.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "BESTSELLER",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": true,
    "isBestseller": true,
    "premiumTier": false,
    "createdAt": "2026-02-14T06:17:12.723Z"
  },
  {
    "id": "rc-krt-096",
    "productCode": "RC-KRT-096",
    "slug": "ivory-classic-buti-embroidered-kurti-rc-krt-096-rc-krt-096",
    "name": "Ivory Classic Buti Embroidered Kurti (RC-KRT-096)",
    "shortDescription": "Graceful standalone ivory kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece ivory kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered"
    ],
    "productType": "SINGLE_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Ivory",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-230.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-230.jpg",
    "image": "/images/kurti/kurti-page-230.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-02-13T06:17:12.723Z"
  },
  {
    "id": "rc-2pc-078",
    "productCode": "RC-2PC-078",
    "slug": "sage-paisley-embroidered-kurti-set-rc-2pc-078-rc-2pc-078",
    "name": "Sage Paisley Embroidered Kurti Set (RC-2PC-078)",
    "shortDescription": "Curated 2-piece coordinated sage kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in sage, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Embroidered"
    ],
    "productType": "TWO_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Sage",
    "style": [
      "Embroidered",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-231.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-231.jpg",
    "image": "/images/kurti/kurti-page-231.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-02-12T06:17:12.723Z"
  },
  {
    "id": "rc-2pc-079",
    "productCode": "RC-2PC-079",
    "slug": "beige-geometric-block-printed-kurti-set-rc-2pc-079-rc-2pc-079",
    "name": "Beige Geometric Block Printed Kurti Set (RC-2PC-079)",
    "shortDescription": "Curated 2-piece coordinated beige kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in beige, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Printed"
    ],
    "productType": "TWO_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Beige",
    "style": [
      "Printed",
      "Contemporary"
    ],
    "images": [
      "/images/kurti/kurti-page-232.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-232.jpg",
    "image": "/images/kurti/kurti-page-232.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-02-11T06:17:12.723Z"
  },
  {
    "id": "rc-3pc-034",
    "productCode": "RC-3PC-034",
    "slug": "cream-floral-printed-three-piece-kurti-set-rc-3pc-034-rc-3pc-034",
    "name": "Cream Floral Printed Three-Piece Kurti Set (RC-3PC-034)",
    "shortDescription": "Complete 3-piece cream festive ensemble with kurti, bottom, and dupatta.",
    "description": "An exquisite three-piece festive ensemble in cream, featuring a richly detailed kurti, coordinated trousers, and a matching dupatta designed for celebratory elegance.",
    "primaryCategory": "Three Piece Sets",
    "category": [
      "Three Piece Sets",
      "Festive",
      "Printed"
    ],
    "productType": "THREE_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Cream",
    "style": [
      "Printed",
      "Festive",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-233.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-233.jpg",
    "image": "/images/kurti/kurti-page-233.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-02-10T06:17:12.723Z"
  },
  {
    "id": "rc-krt-097",
    "productCode": "RC-KRT-097",
    "slug": "teal-intricate-threadwork-kurti-rc-krt-097-rc-krt-097",
    "name": "Teal Intricate Threadwork Kurti (RC-KRT-097)",
    "shortDescription": "Graceful standalone teal kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece teal kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered",
      "New Arrivals",
      "Best Sellers"
    ],
    "productType": "SINGLE_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Teal",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-234.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-234.jpg",
    "image": "/images/kurti/kurti-page-234.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "NEW",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": true,
    "isBestSeller": true,
    "isBestseller": true,
    "premiumTier": false,
    "createdAt": "2026-02-09T06:17:12.723Z"
  },
  {
    "id": "rc-krt-098",
    "productCode": "RC-KRT-098",
    "slug": "brown-traditional-motif-printed-kurti-rc-krt-098-rc-krt-098",
    "name": "Brown Traditional Motif Printed Kurti (RC-KRT-098)",
    "shortDescription": "Graceful standalone brown kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece brown kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Printed"
    ],
    "productType": "SINGLE_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Brown",
    "style": [
      "Printed",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-235.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-235.jpg",
    "image": "/images/kurti/kurti-page-235.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-02-08T06:17:12.723Z"
  },
  {
    "id": "rc-krt-099",
    "productCode": "RC-KRT-099",
    "slug": "wine-chikankari-inspired-kurti-rc-krt-099-rc-krt-099",
    "name": "Wine Chikankari Inspired Kurti (RC-KRT-099)",
    "shortDescription": "Graceful standalone wine kurti designed for effortless everyday elegance.",
    "description": "Crafted with fine attention to detail, this single-piece wine kurti brings together soft breathable fabric, comfortable tailoring, and authentic Indian grace.",
    "primaryCategory": "Kurtis",
    "category": [
      "Kurtis",
      "Everyday",
      "Embroidered"
    ],
    "productType": "SINGLE_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Wine",
    "style": [
      "Embroidered",
      "Chikankari"
    ],
    "images": [
      "/images/kurti/kurti-page-236.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-236.jpg",
    "image": "/images/kurti/kurti-page-236.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-02-07T06:17:12.723Z"
  },
  {
    "id": "rc-2pc-080",
    "productCode": "RC-2PC-080",
    "slug": "navy-paisley-embroidered-kurti-set-rc-2pc-080-rc-2pc-080",
    "name": "Navy Paisley Embroidered Kurti Set (RC-2PC-080)",
    "shortDescription": "Curated 2-piece coordinated navy kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in navy, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Embroidered"
    ],
    "productType": "TWO_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Navy",
    "style": [
      "Embroidered",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-238.png"
    ],
    "primaryImage": "/images/kurti/kurti-page-238.png",
    "image": "/images/kurti/kurti-page-238.png",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-02-06T06:17:12.723Z"
  },
  {
    "id": "rc-2pc-081",
    "productCode": "RC-2PC-081",
    "slug": "terracotta-abstract-block-printed-kurti-set-rc-2pc-081-rc-2pc-081",
    "name": "Terracotta Abstract Block Printed Kurti Set (RC-2PC-081)",
    "shortDescription": "Curated 2-piece coordinated terracotta kurti and pant set crafted for comfort.",
    "description": "A curated two-piece coordinated set in terracotta, pairing a tailored tunic with matching trousers for seamless everyday comfort and modern ethnic charm.",
    "primaryCategory": "Two Piece Sets",
    "category": [
      "Two Piece Sets",
      "Everyday",
      "Printed"
    ],
    "productType": "TWO_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Terracotta",
    "style": [
      "Printed",
      "Contemporary"
    ],
    "images": [
      "/images/kurti/kurti-page-239.jpg"
    ],
    "primaryImage": "/images/kurti/kurti-page-239.jpg",
    "image": "/images/kurti/kurti-page-239.jpg",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": false,
    "isBestseller": false,
    "premiumTier": false,
    "createdAt": "2026-02-05T06:17:12.723Z"
  },
  {
    "id": "rc-3pc-035",
    "productCode": "RC-3PC-035",
    "slug": "burgundy-floral-printed-three-piece-kurti-set-rc-3pc-035-rc-3pc-035",
    "name": "Burgundy Floral Printed Three-Piece Kurti Set (RC-3PC-035)",
    "shortDescription": "Complete 3-piece burgundy festive ensemble with kurti, bottom, and dupatta.",
    "description": "An exquisite three-piece festive ensemble in burgundy, featuring a richly detailed kurti, coordinated trousers, and a matching dupatta designed for celebratory elegance.",
    "primaryCategory": "Three Piece Sets",
    "category": [
      "Three Piece Sets",
      "Festive",
      "Printed",
      "Best Sellers"
    ],
    "productType": "THREE_PIECE",
    "price": 1199,
    "compareAtPrice": 2299,
    "color": "Burgundy",
    "style": [
      "Printed",
      "Festive",
      "Traditional"
    ],
    "images": [
      "/images/kurti/kurti-page-241.png"
    ],
    "primaryImage": "/images/kurti/kurti-page-241.png",
    "image": "/images/kurti/kurti-page-241.png",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "badge": "BESTSELLER",
    "available": true,
    "isFeatured": false,
    "featured": false,
    "isNewArrival": false,
    "isBestSeller": true,
    "isBestseller": true,
    "premiumTier": false,
    "createdAt": "2026-02-04T06:17:12.723Z"
  }
];

export const singlePieceKurtis = products.filter(
  (p) => p.productType === "SINGLE_PIECE"
);

export const singlePieces = singlePieceKurtis;

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
  const sameTypeProducts = products.filter(
    (p) => p.id !== product.id && p.productType === product.productType
  );

  // Score same-type products by color and style similarity
  sameTypeProducts.sort((a, b) => {
    let scoreA = 0;
    let scoreB = 0;
    if (a.color === product.color) scoreA += 2;
    if (b.color === product.color) scoreB += 2;
    if (a.category.some((c) => product.category.includes(c))) scoreA += 1;
    if (b.category.some((c) => product.category.includes(c))) scoreB += 1;
    return scoreB - scoreA;
  });

  if (sameTypeProducts.length >= limit) {
    return sameTypeProducts.slice(0, limit);
  }

  // Fallback if fewer than limit same-type products exist
  const remaining = products.filter(
    (p) => p.id !== product.id && !sameTypeProducts.includes(p)
  );
  return [...sameTypeProducts, ...remaining].slice(0, limit);
}
