import { createFileRoute } from "@tanstack/react-router";
import { Cart } from "../Components/cart/Cart";
import { RecommendedProducts } from "../Components/cart/RecommendedProducts";

export const Route = createFileRoute("/cart")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Cart />
      {/* recommended products section */}
      <RecommendedProducts />
    </>
  );
}
