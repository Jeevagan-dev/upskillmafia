import React, { createContext, useState } from "react";

export const CartContext = createContext(); 

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);

  const handleClick = (shoe) => {
    let isPresent = false;

    const updatedCart = cart.map((product) => {
      if (shoe.id === product.id) {
        isPresent = true;
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });

    if (!isPresent) {
      setCart([...updatedCart, { ...shoe, quantity: 1 }]);
    } else {
      setCart(updatedCart);
    }

    setPrice((prevPrice) => prevPrice + shoe.price);
  };

  const handleIncrement = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        setPrice((prevPrice) => prevPrice + item.price);
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const handleDecrement = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        setPrice((prevPrice) => prevPrice - item.price);
        const newQuantity = item.quantity - 1;
        if (newQuantity > 0) {
          return { ...item, quantity: newQuantity };
        }
        return null; 
      }
      return item;
    }).filter(item => item !== null); 

    setCart(updatedCart);
  };

  return (
    <CartContext.Provider value={{ price, cart, handleClick, handleDecrement, handleIncrement }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
