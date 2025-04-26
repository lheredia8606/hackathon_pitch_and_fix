import { useContext } from "react";
import { CartContext } from "./CartProvider";

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("Cart context should be used inside provider");
  }
  return context;
};
