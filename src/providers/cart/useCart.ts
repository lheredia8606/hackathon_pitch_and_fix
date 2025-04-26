import { createContext, useContext } from "react";
import { TProduct } from "../../types/types";

export type cartProducts = {
  product: TProduct[];
  qty: number;
};
type TCartContextProps = {
  cartProducts: cartProducts[];
  setCartProducts: (products: cartProducts[]) => void;
  shouldDisplayCart: boolean;
  setShouldDisplayCart: (display: boolean) => void;
};

export const CartContext = createContext<TCartContextProps | null>(null);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("Cart context should be used outside provider");
  }
  return context;
};
