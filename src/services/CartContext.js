import { createContext, useRef, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const offcanvasRef = useRef(null);

  // ✅ Only adds to cart, does NOT open offcanvas anymore
  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const removeFromCart = (indexToRemove) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== indexToRemove));
  };

  // ✅ Optional utility to open offcanvas manually
  const openOffcanvas = () => {
    if (offcanvasRef.current) {
      const bsOffcanvas = new window.bootstrap.Offcanvas(offcanvasRef.current);
      bsOffcanvas.show();
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        offcanvasRef,
        openOffcanvas, // ⬅️ make this available if needed
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
