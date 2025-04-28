import { createFileRoute } from "@tanstack/react-router";
import { Cart } from "../Components/cart/Cart";

export const Route = createFileRoute("/cart")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Cart />
    </>
  );
}
