import logo from "../assets/images/ShopEase-logo.svg";
import { Link } from "@tanstack/react-router";
import { DropDownCart } from "./DropDownCart";
export const Header = () => {
  type TNavLi = {
    address: string;
    text: string;
  };
  const navLi: TNavLi[] = [
    { address: "/", text: "Home" },
    { address: "/products", text: "Products" },
    { address: "/categories", text: "Categories" },
    { address: "/about", text: "About Us" },
    { address: "/contact", text: "Contact" },
  ];

  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="ShopEase Logo" className="logo" />
      </div>
      <nav className="main-nav">
        <ul id="nav-items">
          {navLi.map((li) => {
            return (
              <li key={li.text} className="nav-item">
                <Link to={li.address}>{li.text}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <DropDownCart />
    </header>
  );
};
