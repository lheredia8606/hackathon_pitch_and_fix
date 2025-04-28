import { useState } from "react";

export const NewsLetter = () => {
  const [emailInput, setEmailInput] = useState("");
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [triedToSubscribe, setTriedToSubscribe] = useState<boolean>(false);

  const isEmailValid = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTriedToSubscribe(true);
    if (isEmailValid(emailInput)) {
      setIsSubscribed(true);
      setEmailInput("");
    }
  };

  return (
    <section className="newsletter">
      <div className="newsletter-content">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Get updates on new products, special offers, and more.</p>
        {!isSubscribed && (
          <form id="newsletter-form" onSubmit={handleOnSubmit}>
            <input
              className={
                triedToSubscribe && !isEmailValid(emailInput)
                  ? "submit-error"
                  : ""
              }
              type="email"
              placeholder="Enter your email"
              required
              id="newsletter-email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
            />
            <button type="submit">Subscribe</button>
          </form>
        )}
        {!isEmailValid(emailInput) && triedToSubscribe && !isSubscribed && (
          <div className="error-message">
            Please enter a valid email address.
          </div>
        )}
        {isSubscribed && (
          <div id="newsletter-success">Thank you for subscribing!</div>
        )}
      </div>
    </section>
  );
};
