import { useRouter } from "@tanstack/react-router";
import { useEffect } from "react";

export const DefaultNotFoundComponent = () => {
  const router = useRouter();
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      router.navigate({ to: "/" });
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
    //added router to dependency array just to clear linting
  }, [router]);

  return (
    <div style={{ textAlign: "center", padding: "150px" }}>
      <h1>Page not found or not implemented yet!</h1>
      <h2>Redirecting Home</h2>
    </div>
  );
};
