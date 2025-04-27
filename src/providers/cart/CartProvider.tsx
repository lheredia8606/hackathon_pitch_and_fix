import { ReactNode, useEffect, useState } from "react";
import { CartContext, cartProduct } from "./useCart";

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartProducts, setCartProducts] = useState<cartProduct[]>([]);
  const [shouldDisplayCart, setShouldDisplayCart] = useState<boolean>(false);
  // const {getProductById} = useProduct()
  useEffect(() => {
    loadCart();
  }, []);

  // Check for existing cart in localStorage
  const loadCart = () => {
    const savedCart = localStorage.getItem("shopease_cart");
    if (savedCart) {
      setCartProducts(JSON.parse(savedCart));
    }
  };

  // Save cart to localStorage
  const saveCart = () => {
    localStorage.setItem("shopease_cart", JSON.stringify(cartProducts));
  };

  // Add product to cart
  const addToCart = (productId: string) => {
    // Check if product already in cart
    const existingItem = cartProducts.find(
      (product) => product.productId === productId
    );

    if (existingItem) {
      // Increase quantity if already in cart
      existingItem.qty += 1;
    } else {
      const updatedCart = [...cartProducts, { productId, qty: 1 }];
      setCartProducts(updatedCart);
    }
    saveCart();
  };

  // Remove item from cart
  const removeFromCart = (productId: string) => {
    const updatedCart = cartProducts.filter(
      (item) => item.productId !== productId
    );
    setCartProducts(updatedCart);

    // Save cart and update UI
    saveCart();
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
