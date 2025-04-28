import { ReactNode, useEffect, useState } from "react";
import { CartContext, cartProduct } from "./useCart";
import { useProduct } from "../product/useProduct";

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [shouldDisplayCart, setShouldDisplayCart] = useState<boolean>(false);
  const { getProductById } = useProduct();
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
      increaseQty(productId);
    } else {
      const updatedCart = [...cartProducts, { productId, qty: 1 }];
      setCartProducts(updatedCart);
    }
  };

  //increase product Qty
  const increaseQty = (productId: string) => {
    setCartProducts(
      [...cartProducts].map((product) => {
        if (product.productId === productId) {
          product.qty += 1;
        }
        return product;
      })
    );
  };

  //decrease product qty
  const decreaseQty = (productId: string) => {
    const newProducts = [...cartProducts].map((product) => {
      if (product.productId === productId) {
        product.qty -= 1;
      }
      return product;
    });
    setCartProducts(newProducts.filter(({ qty }) => qty > 0));
  };

  // Remove item from cart
  const removeFromCart = (productId: string) => {
    const updatedCart = cartProducts.filter(
      (item) => item.productId !== productId
    );
    setCartProducts(updatedCart);
  };

  const getCartTotal = () => {
    return cartProducts.reduce((acc, { productId, qty }) => {
      const product = getProductById(productId);
      if (product) {
        return Number((product.salePrice * qty + acc).toFixed(2));
      }
      return acc;
    }, 0.0);
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
        getCartTotal,
        increaseQty,
        decreaseQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
