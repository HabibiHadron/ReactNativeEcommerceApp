import { createContext, useContext, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";

const CartContext = createContext([]);

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log("cart render");

  //   useEffect(() => {
  //     SecureStore.setItem("cart", JSON.stringify(cart));
  //   }, [cart]);

  //   useEffect(() => {
  //     SecureStore.getItem("cart", JSON.parse(cart));
  //   }, []);

  const addToCart = (item, quantity) => {
    console.log("cart", cart);

    if (cart.includes(item)) {
      return alert("Item already added to cart");
    }

    setCart((items) => [...items, { id: item, quantity: quantity || 1 }]);
  };

  const removeFromCart = (item) => {
    setCart((items) => items.filter((curItem) => curItem !== item));
  };

  const incrementItem = (item) => {
    setCart((items) =>
      items.map((curItem) =>
        curItem === item
          ? { ...curItem, quantity: curItem.quantity + 1 }
          : curItem
      )
    );
  };

  const decrementItem = (item) => {
    setCart((items) =>
      items.map((curItem) =>
        curItem === item
          ? { ...curItem, quantity: curItem.quantity - 1 }
          : curItem
      )
    );
  };

  const value = {
    onAddToCart: addToCart,
    onRemoveFromCart: removeFromCart,
    cart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
