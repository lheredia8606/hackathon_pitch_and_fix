import { Link } from "@tanstack/react-router";
import { useCart } from "../../providers/cart/useCart";
import { useEffect, useState } from "react";

export const CartSideBar = () => {
  const [tax, setTax] = useState<number>(0);
  const [hasPromoCode, setHasPromoCode] = useState<boolean>(true);
  const [promoCodeInput, setPromoCodeInput] = useState("");
  const { getCartTotal } = useCart();

  useEffect(() => {
    setTax(getCartTotal() * 0.07);
  }, [getCartTotal]);
  return (
    <div className="cart-sidebar">
      <div className="order-summary">
        <h2>Order Summary</h2>
        <div className="summary-row">
          <span>Subtotal:</span>
          <span id="subtotal">${getCartTotal()}</span>
        </div>
        <div className="summary-row">
          <span>Shipping:</span>

          <span id="shipping">$5.00</span>
        </div>
        <div className="summary-row">
          <span>Tax (7%):</span>

          <span id="tax">${tax.toFixed(2)}</span>
        </div>
        <div className="summary-row discount-row" style={{ display: "none" }}>
          <span>Discount:</span>
          <span id="discount">-$0.00</span>
        </div>
        <div className="summary-row total-row">
          <span>
            <strong>Total:</strong>
          </span>

          <span id="total">
            <strong>$111.98</strong>
          </span>
        </div>
      </div>

      <div className="promo-section">
        <h2>Promo Code</h2>
        <div className="promo-input-group">
          <input type="text" id="promocode" placeholder="Enter promo code" />
          <button id="apply-promo-btn">Apply</button>
        </div>
        <p id="promo-message"></p>
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
