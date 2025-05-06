import { useCart } from "../../providers/cart/useCart";
import { useProduct } from "../../providers/product/useProduct";
import { ProductCard } from "../ProductCard";

export const RecommendedProducts = () => {
  const { allProducts } = useProduct();
  const { addToCart } = useCart();
  return (
    <div className="recommended-products">
      <h2>You May Also Like</h2>
      <div className="product-slider">
        {allProducts.map((product) => {
          if (product.quantityInStock > 0)
            return (
              <div key={product.id} className="product-slide">
                <ProductCard
                  product={product}
                  btnOnClick={addToCart}
                  btnText="Add to cart"
                />
              </div>
            );
        })}
      </div>
    </div>
  );
};
