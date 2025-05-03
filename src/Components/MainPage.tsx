import { ReactNode } from "@tanstack/react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useProduct } from "../providers/product/useProduct";
type TMainPageProps = {
  children: ReactNode;
};

export const MainPage = ({ children }: TMainPageProps) => {
  const { isAllProductError, isLoadingAllProducts } = useProduct();
  if (isLoadingAllProducts) {
    return (
      <>
        <div
          style={{ height: "100vh", textAlign: "center", marginTop: "50px" }}
        >
          <h2>Loading...</h2>
        </div>
      </>
    );
  }
  if (isAllProductError) {
    return (
      <>
        <div
          style={{ height: "100vh", textAlign: "center", marginTop: "50px" }}
        >
          <h2>Error getting all the products</h2>
          <h3>Please contact Customer Service</h3>
        </div>
      </>
    );
  }
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
