import { allCategories } from "../assets/globals/constantsAndTypes";
import { CategoriesCard } from "./CategoriesCard";

export const Categories = () => {
  return (
    <section className="categories">
      <h2>Shop by Category</h2>
      <div className="category-grid">
        {allCategories.map((category) => {
          return <CategoriesCard key={category.id} cardProps={category} />;
        })}
      </div>
    </section>
  );
};
