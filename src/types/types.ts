export type TProduct = {
  id: string;
  image: string;
  alterText: string;
  tag: string;
  title: string;
  originalPrice: number;
  salePrice: number;
  ratingAvg: number;
  ratingCount: number;
  category: "Electronics" | "Clothing" | "Home & Kitchen" | "Sports & Outdoors";
};
