import { ReactNode, useEffect, useState } from "react";
import { CartContext, cartProduct } from "./useCart";

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [shouldDisplayCart, setShouldDisplayCart] = useState<boolean>(false);
  const [cartProducts, setCartProducts] = useState<cartProduct[]>(
    (): cartProduct[] => {
      const savedCart = localStorage.getItem("shopease_cart");
      if (savedCart) {
        return JSON.parse(savedCart);
      }
      return [];
    }
  );

  useEffect(() => {
    localStorage.setItem("shopease_cart", JSON.stringify(cartProducts));
  }, [cartProducts]);

  // Add product to cart
  const addToCart = (productId: string) => {
    // Check if product already in cart
    const existingItem = cartProducts.find(
      (product) => product.productId === productId
    );

    if (existingItem) {
      // Increase quantity if already in cart
      setCartProducts(
        [...cartProducts].map((product) => {
          if (product.productId === productId) {
            product.qty += 1;
          }
          return product;
        })
      );
    } else {
      const updatedCart = [...cartProducts, { productId, qty: 1 }];
      setCartProducts(updatedCart);
    }
  };

  // Remove item from cart
  const removeFromCart = (productId: string) => {
    const updatedCart = cartProducts.filter(
      (item) => item.productId !== productId
    );
    setCartProducts(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        setShouldDisplayCart,
        shouldDisplayCart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
