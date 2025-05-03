import { useEffect, useState } from "react";
import { ReactNode } from "@tanstack/react-router";
import { ProductContext } from "./useProduct";
import { useQuery } from "@tanstack/react-query";
import { apiProducts, TProduct } from "../../assets/globals/constants";

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [allProducts, setAllProducts] = useState<TProduct[]>([]);
  const {
    data: fetchedProducts,
    isError: isAllProductError,
    isLoading: isLoadingAllProducts,
  } = useQuery({
    queryKey: ["getAllProducts"],
    queryFn: () => apiProducts.getAll(),
  });

  useEffect(() => {
    if (fetchedProducts) {
      setAllProducts(fetchedProducts);
    }
  }, [fetchedProducts]);

  const getProductById = (id: string) => {
    return allProducts.find((product) => product.id === id);
  };
  const getProductsByCategory = (category: string): TProduct[] => {
    if (category === "All") {
      return allProducts;
    } else {
      return allProducts.filter((product) => product.category === category);
    }
  };
  return (
    <ProductContext.Provider
      value={{
        allProducts,
        setAllProducts,
        getProductsByCategory,
        getProductById,
        isAllProductError,
        isLoadingAllProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
