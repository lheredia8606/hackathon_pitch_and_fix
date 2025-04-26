import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "../Components/Hero";
import { FeaturedProducts } from "../Components/FeaturedProducts";
import { Categories } from "../Components/Categories";
import { NewsLetter } from "../Components/NewsLetter";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Categories />
      <NewsLetter />
    </>
  );
}
