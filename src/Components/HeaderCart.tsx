import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../providers/cart/useCart";
import { useEffect, useRef } from "react";

export const HeaderCart = () => {
  const { cartProducts } = useCart();
  const { shouldDisplayCart, setShouldDisplayCart } = useCart();
  const toggleDisplayCart = () => setShouldDisplayCart(!shouldDisplayCart);
  const cartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setShouldDisplayCart(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShouldDisplayCart]);
  return (
    <div className="cart-container" ref={cartRef}>
      <div className="cart-icon" onClick={toggleDisplayCart}>
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="cart-count">{cartProducts.length}</span>
      </div>
      <div
        className="cart-dropdown"
        style={{ display: shouldDisplayCart ? "block" : "none" }}
      >
        <div className="cart-items">
          {/* Cart items will be added here by JavaScript */}
        </div>
        <div className="cart-total">
          <p>
            Total: $<span id="cart-total-amount">0.00</span>
          </p>
        </div>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
};
