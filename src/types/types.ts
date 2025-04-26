export type TProductCategory =
  | "Electronics"
  | "Clothing"
  | "Home & Kitchen"
  | "Sports & Outdoors";

export type TProductCategoryProps = {
  id: string;
  img: string;
  alt: string;
  category: TProductCategory;
  linkTo: string;
};

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
  category: TProductCategory;
};
