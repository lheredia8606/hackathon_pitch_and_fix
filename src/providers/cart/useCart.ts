import { createContext, useContext } from "react";

export type cartProduct = {
  productId: string;
  qty: number;
};
type TCartContextProps = {
  cartProducts: cartProduct[];
  setCartProducts: (products: cartProduct[]) => void;
  shouldDisplayCart: boolean;
  setShouldDisplayCart: (display: boolean) => void;
  addToCart: (productId: string) => void;
  removeFromCart: (productId: string) => void;
};

export const CartContext = createContext<TCartContextProps | null>(null);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("Cart context should be used outside provider");
  }
  return context;
};
