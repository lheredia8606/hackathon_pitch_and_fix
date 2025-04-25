export const Footer = () => {
  return (
    <footer>
      <div className="footer-columns">
        <div className="footer-column">
          <h3>Shop</h3>
          <ul>
            <li>
              <a href="pages/products.html">All Products</a>
            </li>
            <li>
              <a href="pages/categories.html">Categories</a>
            </li>
            <li>
              <a href="pages/deals.html">Deals</a>
            </li>
            <li>
              <a href="pages/new-arrivals.html">New Arrivals</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Customer Service</h3>
          <ul>
            <li>
              <a href="pages/contact.html">Contact Us</a>
            </li>
            <li>
              <a href="pages/faq.html">FAQ</a>
            </li>
            <li>
              <a href="pages/shipping.html">Shipping & Returns</a>
            </li>
            <li>
              <a href="pages/terms.html">Terms & Conditions</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>About Us</h3>
          <ul>
            <li>
              <a href="pages/about.html">Our Story</a>
            </li>
            <li>
              <a href="pages/blog.html">Blog</a>
            </li>
            <li>
              <a href="pages/careers.html">Careers</a>
            </li>
            <li>
              <a href="pages/partners.html">Partners</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <ul className="social-links">
            <li>
              <a href="#">
                <i className="fab fa-facebook-f"></i>Facebook
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>Twitter
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram"></i>Instagram
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-pinterest"></i>Pinterest
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 ShopEase. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
