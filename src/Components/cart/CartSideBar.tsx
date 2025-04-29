import { Link } from "@tanstack/react-router";
import { useCart } from "../../providers/cart/useCart";
import { useState } from "react";
import { promoCodes } from "../../assets/globals/constants";

export const CartSideBar = () => {
  const [hasPromoCode, setHasPromoCode] = useState<boolean>(false);
  const [promoWasTried, setPromoWasTried] = useState<boolean>(false);
  const [promoCodeInput, setPromoCodeInput] = useState("");
  const { getCartSubTotal } = useCart();
  const shipping = 8;

  const getCodeDiscount = (discountPercent: number = 0.15) => {
    if (hasPromoCode) return getCartSubTotal() * discountPercent;
    return 0;
  };

  const getTaxes = (taxPercent: number = 0.07) => {
    return (getCartSubTotal() - getCodeDiscount()) * taxPercent;
  };

  const getCartTotal = () => {
    const total = getCartSubTotal() - getCodeDiscount() + getTaxes() + shipping;
    return total.toFixed(2);
  };

  const handleOnPromoClick = () => {
    if (promoCodes.includes(promoCodeInput)) {
      setHasPromoCode(true);
    } else {
      setPromoWasTried(true);
    }
  };

  return (
    <div className="cart-sidebar">
      <div className="order-summary">
        <h2>Order Summary</h2>
        <div className="summary-row">
          <span>Subtotal:</span>
          <span id="subtotal">${getCartSubTotal()}</span>
        </div>
        {hasPromoCode && (
          <div className="summary-row discount-row">
            <span>Discount (15%):</span>
            <span id="discount">-${getCodeDiscount().toFixed(2)}</span>
          </div>
        )}
        <div className="summary-row">
          <span>Shipping:</span>
          <span id="shipping">${shipping.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span>Tax (7%):</span>
          <span id="tax">${getTaxes().toFixed(2)}</span>
        </div>
        <div className="summary-row total-row">
          <span>
            <strong>Total:</strong>
          </span>

          <span id="total">
            <strong>${getCartTotal()}</strong>
          </span>
        </div>
      </div>

      <div className="promo-section">
        {hasPromoCode && (
          <h3 style={{ color: "green" }}>Promo Code Applied!</h3>
        )}
        {!hasPromoCode && (
          <>
            <h2>Promo Code</h2>
            <div className="promo-input-group">
              <input
                type="text"
                id="promocode"
                placeholder="Enter promo code ('devslopes')"
                value={promoCodeInput}
                onChange={(e) => setPromoCodeInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleOnPromoClick();
                  }
                }}
              />
              <button id="apply-promo-btn" onClick={handleOnPromoClick}>
                Apply
              </button>
            </div>
            {promoWasTried && <p style={{ color: "red" }}>Invalid Code!</p>}
          </>
        )}
      </div>

      <div className="checkout-actions">
        <button id="checkout-btn" className="checkout-btn">
          Proceed to Checkout
        </button>
        <Link to="/products" className="continue-shopping">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};
