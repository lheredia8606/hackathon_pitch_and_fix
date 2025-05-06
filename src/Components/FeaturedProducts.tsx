import { ProductCard } from "./ProductCard";
import { useProduct } from "../providers/product/useProduct";
import { useCart } from "../providers/cart/useCart";

export const FeaturedProducts = () => {
  const { allProducts } = useProduct();
  const { addToCart } = useCart();
  return (
    <section className="featured-products">
      <h2>Featured Products</h2>
      <div className="product-grid">
        {allProducts
          .filter((product) => product.featured)
          .map((product) => {
            if (product.quantityInStock > 0)
              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  btnOnClick={addToCart}
                  btnText="Add to card"
                />
              );
          })}
      </div>
    </section>
  );
};
