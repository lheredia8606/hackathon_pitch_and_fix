import { createFileRoute } from "@tanstack/react-router";
import { Categories } from "../Components/Categories";

export const Route = createFileRoute("/categories")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Categories />;
}
