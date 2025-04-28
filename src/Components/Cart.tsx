import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCart } from "../providers/cart/useCart";
import { useProduct } from "../providers/product/useProduct";
import { ProductCard } from "./ProductCard";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export const Cart = () => {
  const { cartProducts } = useCart();
  const { allProducts, getProductById } = useProduct();
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
              {cartProducts.map(({ productId, qty }) => {
                const product = getProductById(productId);
                if (product) {
                  return (
                    <tr className="cart-item" key={productId}>
                      <td className="product-info">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="cart-item-image"
                        />
                        <div className="product-details">
                          <h3>{product.title}</h3>
                          {/* change hardcoded black */}
                          <p className="product-variant">Color: Black</p>
                        </div>
                      </td>
                      <td className="product-price">{product.salePrice}</td>
                      <td className="product-quantity">
                        <div className="quantity-controls">
                          <button className="quantity-decrease">-</button>
                          <input
                            type="number"
                            value={qty}
                            className="quantity-input"
                          />
                          <button className="quantity-increase">+</button>
                        </div>
                      </td>
                      <td className="product-total">
                        ${(product.salePrice * qty).toFixed(2)}
                      </td>
                      <td className="product-actions">
                        <button className="remove-item-btn">
                          <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                      </td>
                    </tr>
                  );
                }
              })}
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
