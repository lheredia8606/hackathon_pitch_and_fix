import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../providers/cart/useCart";
import { useEffect, useRef } from "react";
import { useProduct } from "../../providers/product/useProduct";
import { useNavigate } from "@tanstack/react-router";

export const DropDownCart = () => {
  const {
    cartProducts,
    setShouldDisplayCart,
    shouldDisplayCart,
    removeFromCart,
    getCartSubTotal,
  } = useCart();
  const navigate = useNavigate();
  const { getProductById } = useProduct();
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
          {cartProducts.length === 0 && (
            <p className="empty-cart-message">Your cart is empty</p>
          )}
          {cartProducts.map(({ productId, qty }) => {
            const product = getProductById(productId);
            if (product)
              return (
                <div className="cart-dropdown-item" key={productId}>
                  <div className="item-details">
                    <h4>{`${product.title} (${qty})`}</h4>
                    <p>${Math.round(qty * product.salePrice * 100) / 100}</p>
                  </div>
                  <button
                    className="remove-item-btn"
                    onClick={() => removeFromCart(productId)}
                  >
                    ×
                  </button>
                </div>
              );
          })}
        </div>
        <div className="cart-total">
          <p>
            Total: $<span id="cart-total-amount">{getCartSubTotal()}</span>
          </p>
        </div>
        <button
          className="checkout-btn disabled-btn"
          disabled={cartProducts.length === 0}
          onClick={() => {
            setShouldDisplayCart(false);
            navigate({ to: "/cart" });
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};
