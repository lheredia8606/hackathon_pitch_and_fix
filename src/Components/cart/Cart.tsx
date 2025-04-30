import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCart } from "../../providers/cart/useCart";
import { useProduct } from "../../providers/product/useProduct";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { RecommendedProducts } from "./RecommendedProducts";
import { CartSideBar } from "./CartSideBar";
import { useState } from "react";
import { CreditCartPayment } from "../CreditCartPayment";

export const Cart = () => {
  const [shouldShowPayment, setShouldShowPayment] = useState(false);

  const { cartProducts, removeFromCart, increaseQty, decreaseQty } = useCart();
  const { getProductById } = useProduct();

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
                          <button
                            className="quantity-decrease"
                            onClick={() => decreaseQty(productId)}
                          >
                            -
                          </button>
                          <input
                            value={qty}
                            className="quantity-input"
                            readOnly
                          />
                          <button
                            className="quantity-increase"
                            onClick={() => increaseQty(productId)}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="product-total">
                        ${(product.salePrice * qty).toFixed(2)}
                      </td>
                      <td className="product-actions">
                        <button className="remove-item-btn">
                          <FontAwesomeIcon
                            icon={faTrashAlt}
                            onClick={() => removeFromCart(productId)}
                          />
                        </button>
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
        {/* Cart sidebar section */}
        <CartSideBar setShouldShowPayment={setShouldShowPayment} />
      </div>

      {shouldShowPayment && (
        <CreditCartPayment setShouldShowPayment={setShouldShowPayment} />
      )}

      {/* recommended products section */}
      <RecommendedProducts />
    </main>
  );
};
