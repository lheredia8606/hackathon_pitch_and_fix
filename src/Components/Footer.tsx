import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@tanstack/react-router";

type TColumnRow = {
  ref: string;
  rowName: string;
  icon?: IconDefinition;
};
type TColumn = {
  columnName: string;
  rows: TColumnRow[];
};
const columns: TColumn[] = [
  {
    columnName: "Shop",
    rows: [
      { ref: "/products", rowName: "All Products" },
      { ref: "/categories", rowName: "Categories" },
      { ref: "pages/deals.html", rowName: "Deals" },
      { ref: "pages/new-arrivals.html", rowName: "New Arrivals" },
    ],
  },
  {
    columnName: "Customer Service",
    rows: [
      { ref: "pages/contact.html", rowName: "Contact Us" },
      { ref: "pages/faq.html", rowName: "FAQ" },
      { ref: "pages/shipping.html", rowName: "Shipping & Returns" },
      { ref: "pages/terms.html", rowName: "Terms & Conditions" },
    ],
  },
  {
    columnName: "About Us",
    rows: [
      { ref: "pages/about.html", rowName: "Our Story" },
      { ref: "pages/blog.html", rowName: "Blog" },
      { ref: "pages/shipping.html", rowName: "Careers" },
      { ref: "pages/careers.html", rowName: "Partners" },
    ],
  },
  {
    columnName: "Follow Us",
    rows: [
      { ref: "#", rowName: "Facebook", icon: faFacebook },
      { ref: "#", rowName: "Twitter", icon: faTwitter },
      { ref: "#", rowName: "Instagram", icon: faInstagram },
      { ref: "#", rowName: "Pinterest", icon: faPinterest },
    ],
  },
];
export const Footer = () => {
  return (
    <footer>
      <div className="footer-columns">
        {columns.map((column) => {
          return (
            <div key={column.columnName} className="footer-column">
              <h3>{column.columnName}</h3>
              <ul className="social-links">
                {column.rows.map((row, index) => {
                  return (
                    <li key={column.columnName + index}>
                      <Link to={row.ref}>
                        {row.icon && <FontAwesomeIcon icon={row.icon} />}
                        {row.rowName}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 ShopEase. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
