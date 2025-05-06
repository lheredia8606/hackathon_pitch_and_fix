import { createContext, useContext } from "react";
import { TProductQty } from "../../assets/globals/constantsAndTypes";

type TCartContextProps = {
  cartProducts: TProductQty[];
  setCartProducts: (products: TProductQty[]) => void;
  shouldDisplayCart: boolean;
  setShouldDisplayCart: (display: boolean) => void;
  addToCart: (productId: string) => void;
  removeFromCart: (productId: string) => void;
  getCartSubTotal: () => number;
  increaseQty: (productId: string) => void;
  decreaseQty: (productId: string) => void;
  onPurchaseHandler: () => void;
};

export const CartContext = createContext<TCartContextProps | null>(null);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("Cart context should be used outside provider");
  }
  return context;
};
