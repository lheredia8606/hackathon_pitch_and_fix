export const FeaturedProducts = () => {
  return (
    <section className="featured-products">
      <h2>Featured Products</h2>
      <div className="product-grid">
        {/* Product 1 */}
        <div className="product-card">
          <div className="product-image">
            <img src="images/product1.jpg" alt="Product 1" />
            <div className="product-tag">Sale</div>
          </div>
          <div className="product-details">
            <h3 className="product-title">Wireless Headphones</h3>
            <div className="product-price">
              <span className="original-price">$120</span>
              <span className="sale-price">99.99</span>
            </div>
            <div className="product-rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
              <span className="rating-count">(42)</span>
            </div>
            <button
              className="add-to-cart-btn"
              data-product-id="1"
              data-product-name="Wireless Headphones"
              data-product-price="99.99"
            >
              Add to Cart
            </button>
          </div>
        </div>
        {/* Product 2 */}
        <div className="product-card">
          <div className="product-image">
            <img src="images/product2.jpg" alt="Product 2" />
          </div>
          <div className="product-details">
            <h3 className="product-title">Smart Watch</h3>
            <div className="product-price">
              <span className="current-price">$199.99</span>
            </div>
            <div className="product-rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
              <span className="rating-count">(28)</span>
            </div>
            <button
              className="add-to-cart-btn"
              data-product-id="2"
              data-product-name="Smart Watch"
            >
              Add to Cart
            </button>
          </div>
        </div>
        {/* Product 3 */}
        <div className="product-card">
          <div className="product-image">
            <img src="images/product3.jpg" alt="Product 3" />
            <div className="product-tag">New</div>
          </div>
          <div className="product-details">
            <h3 className="product-title">Bluetooth Speaker</h3>
            <div className="product-price">
              <span className="current-price">$79.99</span>
            </div>
            <div className="product-rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
              <i className="far fa-star"></i>
              <span className="rating-count">(17)</span>
            </div>
            <button
              className="add-to-cart-btn"
              data-product-id="3"
              data-product-name="Bluetooth Speaker"
              data-product-price="79.99"
            >
              Add to Cart
            </button>
          </div>
        </div>
        {/* Product 4 */}
        <div className="product-card">
          <div className="product-image">
            <img src="" alt="Product 4" />
          </div>
          <div className="product-details">
            <h3 className="product-title">Laptop Bag</h3>
            <div className="product-price">
              <span className="current-price">$49.99</span>
            </div>
            <div className="product-rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <span className="rating-count">(35)</span>
            </div>
            <button
              className="add-to-cart-btn"
              data-product-id="4"
              data-product-name="Laptop Bag"
              data-product-price="49.99"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
