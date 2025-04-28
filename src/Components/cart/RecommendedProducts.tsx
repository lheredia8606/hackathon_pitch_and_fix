import { useProduct } from "../../providers/product/useProduct";
import { ProductCard } from "../ProductCard";

export const RecommendedProducts = () => {
  const { allProducts } = useProduct();
  return (
    <div className="recommended-products">
      <h2>You May Also Like</h2>
      <div className="product-slider">
        {allProducts.map((product) => {
          return (
            <div key={product.id} className="product-slide">
              <ProductCard product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
