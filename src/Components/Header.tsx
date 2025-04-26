import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/images/ShopEase-logo.svg";
import { useCart } from "../providers/cart/useCart";
export const Header = () => {
  const { shouldDisplayCart, setShouldDisplayCart } = useCart();
  const toggleDisplayCart = () => setShouldDisplayCart(!shouldDisplayCart);

  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="ShopEase Logo" className="logo" />
      </div>
      <nav className="main-nav">
        <ul id="nav-items">
          <li className="nav-item">
            <a href="index.html" className="active">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="pages/products.html">Products</a>
          </li>
          <li className="nav-item">
            <a href="pages/categories.html">Categories</a>
          </li>
          <li className="nav-item">
            <a href="pages/about.html">About Us</a>
          </li>
          <li className="nav-item">
            <a href="pages/contact.html">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="cart-container">
        <div className="cart-icon" onClick={toggleDisplayCart}>
          <FontAwesomeIcon icon={faShoppingCart} />
          <span className="cart-count">0</span>
        </div>
        <div
          className="cart-dropdown"
          style={{ display: shouldDisplayCart ? "" : "none" }}
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
    </header>
  );
};
