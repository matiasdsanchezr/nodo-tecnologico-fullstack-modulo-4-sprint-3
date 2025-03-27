import { createContext, useEffect, useState } from "react";

const CartContext = createContext(undefined);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("shoppingCart")) || [];
  });

  useEffect(() => {
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
  }, [cart]);

  const addProduct = (product) => {
    if (cart.some((item) => item.id === product.id)) {
      console.warn("Product already in shopping cart");
      return;
    }
    const cartItem = { ...product, count: 1 };
    setCart((prev) => [...prev, cartItem]);
  };

  const removeProduct = (id) => {
    if (!cart.some((item) => item.id === id)) {
      console.warn("Product not in shopping cart");
      return;
    }
    setCart((prev) => prev.filter((product) => product.id !== id));
  };

  const updateQuantity = (id, count) => {
    if (count < 1) count = 1;
    const updatedCart = [...cart];
    const product = updatedCart.find((product) => product.id === id);
    if (!cart.some((item) => item.id === id)) {
      console.warn("Product not in shopping cart");
      return;
    }
    product.count = count;
    setCart(() => updatedCart);
  };

  const totalPrice = () =>
    cart.reduce((total, product) => total + product.price * product.count, 0);

  const isInCart = (id) => {
    return cart.some((product) => id === product.id);
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        removeProduct,
        updateQuantity,
        totalPrice,
        isInCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
