import { TProductCategoryProps } from "../assets/globals/constantsAndTypes";

type TCategoriesCardProps = {
  cardProps: TProductCategoryProps;
};
export const CategoriesCard = ({
  cardProps: { alt, category, img, linkTo },
}: TCategoriesCardProps) => {
  return (
    <div className="category-card">
      <img src={img} alt={alt} />
      <h3>{category}</h3>
      <a href={linkTo} className="category-link">
        View All
      </a>
    </div>
  );
};
