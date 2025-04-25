export const Categories = () => {
  return (
    <section className="categories">
      <h2>Shop by Category</h2>
      <div className="category-grid">
        <div className="category-card">
          <img src="images/category1.jpg" alt="Electronics Category" />
          <h3>Electronics</h3>
          <a href="pages/categories.html#electronics" className="category-link">
            View All
          </a>
        </div>
        <div className="category-card">
          <img src="images/category2.jpg" alt="Clothing Category" />
          <h3>Clothing</h3>
          <a href="pages/categories.html#clothing" className="category-link">
            View All
          </a>
        </div>
        <div className="category-card">
          <img src="images/category3.jpg" alt="Home & Kitchen Category" />
          <h3>Home & Kitchen</h3>
          <a href="pages/categories.html#home" className="category-link">
            View All
          </a>
        </div>
        <div className="category-card">
          <img src="images/category4.jpg" alt="Sports & Outdoors Category" />
          <h3>Sports & Outdoors</h3>
          <a href="pages/categories.html#sports" className="category-link">
            View All
          </a>
        </div>
      </div>
    </section>
  );
};
