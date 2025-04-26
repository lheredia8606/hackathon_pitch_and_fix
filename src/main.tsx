import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { CartProvider } from "./providers/cart/CartProvider";
import { ProductProvider } from "./providers/product/ProductProvider";

function defaultNotFoundComponent() {
  setTimeout(() => {
    router.navigate({ to: "/" }); // redirect to home
  }, 3000);
  return (
    <div style={{ textAlign: "center", padding: "150px" }}>
      <h1>Something went wrong!</h1>
      <h2>Redirecting Home</h2>
    </div>
  );
}

// Create a new router instance
const router = createRouter({
  routeTree,
  defaultNotFoundComponent: defaultNotFoundComponent,
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <ProductProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </ProductProvider>
    </StrictMode>
  );
}
