import { useProduct } from "../providers/product/useProduct";
import { ProductCard } from "./ProductCard";

export const Cart = () => {
  const { allProducts } = useProduct();
  return (
    <main className="cart-page-container">
      <h1 className="page-title">Shopping Cart</h1>

      <div className="cart-content">
        <div className="cart-items-container">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody id="cart-items-list">
              {/* Cart items will be loaded here dynamically */}

              <tr className="cart-item" data-product-id="1">
                <td className="product-info">
                  <img
                    src="../images/product1.jpg"
                    alt="Wireless Headphones"
                    className="cart-item-image"
                  />
                  <div className="product-details">
                    <h3>Wireless Headphones</h3>
                    <p className="product-variant">Color: Black</p>
                  </div>
                </td>
                <td className="product-price">$99.99</td>
                <td className="product-quantity">
                  <div className="quantity-controls">
                    <button className="quantity-decrease">-</button>
                    <input
                      type="number"
                      value="1"
                      max="10"
                      className="quantity-input"
                    />
                    <button className="quantity-increase">+</button>
                  </div>
                </td>

                <td className="product-total" data-total="99.99">
                  $99.99
                </td>
                <td className="product-actions">
                  <button className="remove-item-btn">
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="cart-sidebar">
          <div className="order-summary">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal:</span>
              <span id="subtotal">$99.99</span>
            </div>
            <div className="summary-row">
              <span>Shipping:</span>

              <span id="shipping">$5.00</span>
            </div>
            <div className="summary-row">
              <span>Tax (7%):</span>

              <span id="tax">$6.99</span>
            </div>
            <div
              className="summary-row discount-row"
              style={{ display: "none" }}
            >
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
              <input
                type="text"
                id="promocode"
                placeholder="Enter promo code"
              />
              <button id="apply-promo-btn">Apply</button>
            </div>
            <p id="promo-message"></p>
          </div>

          <div className="checkout-actions">
            <button id="checkout-btn" className="checkout-btn">
              Proceed to Checkout
            </button>
            <a href="products.html" className="continue-shopping">
              Continue Shopping
            </a>
          </div>
        </div>
      </div>

      {/* recommended products section */}

      <div className="recommended-products">
        <h2>You May Also Like</h2>
        <div className="product-slider">
          {allProducts.map((product) => {
            return (
              <div key={product.id} className="product-slide">
                <ProductCard product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};
