export const NewsLetter = () => {
  return (
    <section className="newsletter">
      <div className="newsletter-content">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Get updates on new products, special offers, and more.</p>
        <form id="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email"
            required
            id="newsletter-email"
          />
          <button type="submit">Subscribe</button>
        </form>
        <div id="newsletter-success"></div>
      </div>
    </section>
  );
};
