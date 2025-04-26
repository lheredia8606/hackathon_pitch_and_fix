import { createRootRoute, Outlet } from "@tanstack/react-router";
import "/src/assets/styles/styles.css";
import "/src/assets/styles/responsive.css";
import "/src/assets/styles/cart.css";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <Outlet />
      <Footer />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  ),
});
