import { ProductCard } from "./ProductCard";
import { allProducts } from "../assets/globals/constants";
export const FeaturedProducts = () => {
  return (
    <section className="featured-products">
      <h2>Featured Products</h2>
      <div className="product-grid">
        {allProducts.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </section>
  );
};
