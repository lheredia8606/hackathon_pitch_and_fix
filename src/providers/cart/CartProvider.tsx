import { createContext, ReactNode, useState } from "react";
import { TProduct } from "../../types/types";
type cartProducts = {
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
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartProducts, setCartProducts] = useState<cartProducts[]>([]);
  const [shouldDisplayCart, setShouldDisplayCart] = useState<boolean>(false);
  return (
    <CartContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        setShouldDisplayCart,
        shouldDisplayCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
