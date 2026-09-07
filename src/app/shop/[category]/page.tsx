import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import CategoryClient from "./CategoryClient";

export const CATEGORY_MAP: Record<
  string,
  {
    title: string;
    subtitle: string;
    initialFilters: {
      category?: string;
      productType?: string;
    };
  }
> = {
  kurtis: {
    title: "Kurtis Collection",
    subtitle: "Elegant everyday and straight kurti silhouettes crafted for modern grace.",
    initialFilters: { productType: "SINGLE_PIECE" },
  },
  "two-piece": {
    title: "Two Piece Sets",
    subtitle: "Coordinated kurti and trouser ensembles for effortless sophistication.",
    initialFilters: { productType: "TWO_PIECE" },
  },
  "three-piece": {
    title: "Three Piece Ensembles",
    subtitle: "Complete festive and celebratory ensembles with matching bottoms and dupattas.",
    initialFilters: { productType: "THREE_PIECE" },
  },
  embroidered: {
    title: "Embroidered Collection",
    subtitle: "Intricate threadwork and heritage embroidery on royal Indian silhouettes.",
    initialFilters: { category: "Embroidered" },
  },
  printed: {
    title: "Printed Collection",
    subtitle: "Jaipuri floral, boota, and contemporary block-inspired prints.",
    initialFilters: { category: "Printed" },
  },
  everyday: {
    title: "Everyday Kurtis",
    subtitle: "Comfortable, breathable all-day ethnicwear for effortless daily elegance.",
    initialFilters: { category: "Everyday" },
  },
  festive: {
    title: "Festive Edit",
    subtitle: "Rich jewel tones, zari embroidery, and regal ensembles for celebrations.",
    initialFilters: { category: "Festive" },
  },
  "new-arrivals": {
    title: "New Arrivals",
    subtitle: "Discover the newest additions to the Ruchika Creation collection.",
    initialFilters: { category: "New Arrivals" },
  },
  "best-sellers": {
    title: "Best Sellers",
    subtitle: "Our most coveted and cherished ethnicwear designs.",
    initialFilters: { category: "Best Sellers" },
  },
};

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return Object.keys(CATEGORY_MAP).map((cat) => ({
    category: cat,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const config = CATEGORY_MAP[category.toLowerCase()];

  if (!config) {
    return {
      title: "Category | Ruchika Creation",
    };
  }

  return {
    title: `${config.title} | Ruchika Creation`,
    description: config.subtitle,
    openGraph: {
      title: `${config.title} | Ruchika Creation`,
      description: config.subtitle,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const config = CATEGORY_MAP[category.toLowerCase()];

  if (!config) {
    notFound();
  }

  return (
    <CategoryClient
      title={config.title}
      subtitle={config.subtitle}
      slug={category}
      initialFilters={config.initialFilters}
    />
  );
}
