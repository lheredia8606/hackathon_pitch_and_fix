import { createRootRoute, Outlet } from "@tanstack/react-router";
import "/src/assets/styles/styles.css";
import "/src/assets/styles/responsive.css";
import "/src/assets/styles/cart.css";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { MainPage } from "../Components/MainPage";

export const Route = createRootRoute({
  component: () => (
    <>
      <MainPage>
        <Outlet />
      </MainPage>
      {/* <Header />
      <Footer /> */}
      <TanStackRouterDevtools position="bottom-right" />
    </>
  ),
});
