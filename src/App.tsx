import "./assets/styles/styles.css";
import "./assets/styles/responsive.css";
import "./assets/styles/cart.css";
import { Categories } from "./Components/Categories";
import { FeaturedProducts } from "./Components/FeaturedProducts";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { Hero } from "./Components/Hero";
import { NewsLetter } from "./Components/NewsLetter";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedProducts />
      <Categories />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default App;
