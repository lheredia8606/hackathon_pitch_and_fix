import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { TProduct } from "../assets/globals/constantsAndTypes";

type TProductCardProps = {
  product: TProduct;
  btnText: string;
  btnOnClick: (id: string) => void;
};

export const ProductCard = ({
  product: {
    image,
    alterText,
    originalPrice,
    ratingAvg,
    ratingCount,
    salePrice,
    tag,
    title,
    id,
  },
  btnText,
  btnOnClick,
}: TProductCardProps) => {
  //const { addToCart } = useCart();

  const getRatingFullStars = (rating: number) => {
    return (
      <React.Fragment>
        {Array.from({ length: Math.floor(rating) }, (_, i) => (
          <FontAwesomeIcon key={i} icon={faStar} />
        ))}
      </React.Fragment>
    );
  };
  const getRatingEmptyStars = (rating: number) => {
    return (
      <React.Fragment>
        {Array.from({ length: 5 - Math.ceil(rating) }, (_, i) => (
          <FontAwesomeIcon key={i} icon={faStarEmpty} />
        ))}
      </React.Fragment>
    );
  };
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={alterText} />
        {tag !== "" && <div className="product-tag">{tag}</div>}
      </div>
      <div className="product-details">
        <h3 className="product-title">{title}</h3>
        <div className="product-price">
          {originalPrice > salePrice && (
            <span className="original-price">${originalPrice}</span>
          )}
          <span className="sale-price">${salePrice}</span>
        </div>
        <div className="product-rating">
          {getRatingFullStars(ratingAvg)}
          {ratingAvg - Math.floor(ratingAvg) > 0 && (
            <FontAwesomeIcon icon={faStarHalf} />
          )}
          {getRatingEmptyStars(ratingAvg)}

          <span className="rating-count">({ratingCount})</span>
        </div>
        <button
          className="add-to-cart-btn"
          onClick={() => {
            //addToCart(id);
            btnOnClick(id);
          }}
        >
          {btnText}
        </button>
      </div>
    </div>
  );
};
