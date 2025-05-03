import { createContext, useContext } from "react";
import { TProduct } from "../../assets/globals/constants";

type TProductContextProps = {
  allProducts: TProduct[];
  setAllProducts: (products: TProduct[]) => void;
  getProductsByCategory: (category: string) => TProduct[];
  getProductById: (id: string) => TProduct | undefined;
  isAllProductError: boolean;
  isLoadingAllProducts: boolean;
};

export const ProductContext = createContext<TProductContextProps | null>(null);

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("Product context should be used inside provider");
  }
  return context;
};
