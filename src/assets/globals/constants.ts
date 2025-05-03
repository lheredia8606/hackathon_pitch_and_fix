import { apiHandler } from "../../api/apiHandler";
import { TProduct, TProductCategoryProps } from "../../types/types";

//types
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
  featured: boolean;
};

//globals
const baseUrl = "http://localhost:3000/";
export const apiProducts = apiHandler<TProduct>(baseUrl, "products");

export const allCategories: TProductCategoryProps[] = [
  {
    id: "asdcvw",
    alt: "Electronics Category",
    category: "Electronics",
    img: "/src/assets/images/electronics.png",
    linkTo: "pages/categories.html#electronics",
  },
  {
    id: "asdlkwe",
    alt: "Clothing Category",
    category: "Clothing",
    img: "/src/assets/images/clothing.png",
    linkTo: "pages/categories.html#clothing",
  },
  {
    id: "sdwerzaq",
    alt: "Home & Kitchen Category",
    category: "Home & Kitchen",
    img: "/src/assets/images/home_kitchen.png",
    linkTo: "pages/categories.html#home",
  },
  {
    id: "asdhyujkq",
    alt: "Sports & Outdoors Category",
    category: "Sports & Outdoors",
    img: "/src/assets/images/sports_outdoors.png",
    linkTo: "pages/categories.html#sports",
  },
];

//codes for discounts
export const promoCodes = ["devslopes", "Devslopes"];
