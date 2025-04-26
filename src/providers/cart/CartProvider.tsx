import { ReactNode, useState } from "react";
import { CartContext, cartProducts } from "./useCart";

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
