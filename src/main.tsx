import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { CartProvider } from "./providers/cart/CartProvider";
import { ProductProvider } from "./providers/product/ProductProvider";
import { DefaultNotFoundComponent } from "./Components/DefaultNotFoundComponent";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a new router instance
const router = createRouter({
  routeTree,
  defaultNotFoundComponent: () => (
    <>
      <DefaultNotFoundComponent />
    </>
  ),
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const queryClient = new QueryClient();

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <ProductProvider>
          <CartProvider>
            <RouterProvider router={router} />
          </CartProvider>
        </ProductProvider>
      </QueryClientProvider>
    </StrictMode>
  );
}
