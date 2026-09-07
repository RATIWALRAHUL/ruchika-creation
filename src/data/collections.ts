export interface CollectionItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  href: string;
  itemCount: number;
  iconType: "everyday" | "festive" | "embroidered" | "new";
}

export const collections: CollectionItem[] = [
  {
    id: "col-1",
    title: "Everyday Kurtis",
    subtitle: "Effortless styles for daily elegance",
    image: "/images/kurti/kurti-page-10.jpg",
    href: "/shop/everyday",
    itemCount: 56,
    iconType: "everyday",
  },
  {
    id: "col-2",
    title: "Festive Edit",
    subtitle: "Celebrate in royal splendor",
    image: "/images/kurti/kurti-page-2.jpg",
    href: "/shop/festive",
    itemCount: 42,
    iconType: "festive",
  },
  {
    id: "col-3",
    title: "Embroidered Collection",
    subtitle: "Artistry in every thread",
    image: "/images/kurti/kurti-page-181.jpg",
    href: "/shop/embroidered",
    itemCount: 57,
    iconType: "embroidered",
  },
  {
    id: "col-4",
    title: "New Arrivals",
    subtitle: "Fresh silhouettes & prints",
    image: "/images/kurti/kurti-page-54.jpg",
    href: "/shop/new-arrivals",
    itemCount: 17,
    iconType: "new",
  },
];
