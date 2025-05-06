import { Link } from "@tanstack/react-router";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to ShopEase</h1>
        <p>Find the best products at the best prices</p>
        <Link to="/products" className="cta-button">
          Shop Now
        </Link>
      </div>
    </section>
  );
};
