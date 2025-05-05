import { createFileRoute } from "@tanstack/react-router";
import { useProduct } from "../providers/product/useProduct";
import { ProductCard } from "../Components/ProductCard";
import { useState } from "react";
import { allCategories } from "../assets/globals/constantsAndTypes";

export const Route = createFileRoute("/resupply")({
  component: RouteComponent,
});

function RouteComponent() {
  const [category, setCategory] = useState("All");
  const { getProductsByCategory } = useProduct();

  const handleSelectOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };
  return (
    <>
      <label htmlFor="categories">Category: </label>
      <select
        id="categories"
        name="categories"
        onChange={(e) => handleSelectOnChange(e)}
      >
        <option value="All">All</option>
        {allCategories.map((category) => {
          return (
            <option key={category.id} value={category.category}>
              {category.category}
            </option>
          );
        })}
      </select>
      <div className="product-grid" style={{ padding: "20px 0" }}>
        {getProductsByCategory(category).map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </>
  );
}
