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
    subtitle: "Effortless styles for everyday",
    image: "/images/kurti-ivory-chikankari.jpg",
    href: "/collections/everyday-kurtis",
    itemCount: 42,
    iconType: "everyday",
  },
  {
    id: "col-2",
    title: "Festive Edit",
    subtitle: "Celebrate in style",
    image: "/images/kurti-maroon-festive.jpg",
    href: "/collections/festive-edit",
    itemCount: 28,
    iconType: "festive",
  },
  {
    id: "col-3",
    title: "Embroidered Collection",
    subtitle: "Artistry in every thread",
    image: "/images/kurti-black-back.jpg",
    href: "/collections/embroidered",
    itemCount: 36,
    iconType: "embroidered",
  },
  {
    id: "col-4",
    title: "New Arrivals",
    subtitle: "Fresh styles, just for you",
    image: "/images/kurti-black-front.jpg",
    href: "/collections/new-arrivals",
    itemCount: 19,
    iconType: "new",
  },
];
