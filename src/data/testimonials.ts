export interface Testimonial {
  id: string;
  name: string;
  location: string;
  review: string;
  rating: number;
  verified: boolean;
  productPurchased: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Anita S.",
    location: "Mumbai",
    review:
      "The embroidery is so beautiful and the fabric is so comfortable. I got so many compliments!",
    rating: 5,
    verified: true,
    productPurchased: "Black Embroidered Kurti",
  },
  {
    id: "test-2",
    name: "Neha P.",
    location: "New Delhi",
    review:
      "Perfect fit, amazing quality. Ruchika Creation never disappoints.",
    rating: 5,
    verified: true,
    productPurchased: "Maroon Festive Kurti",
  },
  {
    id: "test-3",
    name: "Pooja M.",
    location: "Bangalore",
    review:
      "I love the elegant yet simple designs. Definitely my go-to brand for kurtis.",
    rating: 5,
    verified: true,
    productPurchased: "Ivory Chikankari Kurti",
  },
];
