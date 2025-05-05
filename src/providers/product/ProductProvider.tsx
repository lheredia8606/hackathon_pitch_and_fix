import { useEffect, useState } from "react";
import { ReactNode } from "@tanstack/react-router";
import { ProductContext } from "./useProduct";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiProducts, TProduct } from "../../assets/globals/constantsAndTypes";

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [allProducts, setAllProducts] = useState<TProduct[]>([]);
  const queryClient = useQueryClient();
  const {
    data: fetchedProducts,
    isError: isAllProductError,
    isLoading: isLoadingAllProducts,
  } = useQuery({
    queryKey: ["getAllProducts"],
    queryFn: () => apiProducts.getAll(),
  });

  const patchProduct = useMutation({
    mutationFn: ({
      productId,
      partialProduct,
    }: {
      productId: string;
      partialProduct: Partial<Omit<TProduct, "id">>;
    }) => apiProducts.update(productId, partialProduct),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["getAllProducts"] }),
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
        patchProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
