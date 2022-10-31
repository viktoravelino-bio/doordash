import { createContext, useContext, useState } from 'react';

const ShoppingCartContext = createContext();

export function ShoppingCartProvider({ children }) {
  const [cartItems, setCartItems] = useState([
    { id: 1, quantity: 1 },
    { id: 2, quantity: 1 },
  ]);

  function increaseCartQuantity(productId) {
    const alreadyExists = cartItems.find((item) => item.id === productId);
    setCartItems((currentItems) => {
      if (!Boolean(alreadyExists)) {
        return [...currentItems, { id: productId, quantity: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id === productId) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQuantity(productId) {
    const item = cartItems.find((item) => item.id === productId);
    if (!Boolean(item)) return;
    setCartItems((currentItems) => {
      if (item.quantity === 1) {
        return currentItems.filter((item) => item.id !== productId);
      } else {
        return currentItems.map((item) => {
          if (item.id === productId) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(productId) {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id !== productId);
    });
  }

  const cartTotalQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const value = {
    cartItems,
    cartTotalQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  };

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

export function useShoppingCart() {
  const context = useContext(ShoppingCartContext);
  if (context === undefined) {
    throw new Error(
      'useShoppingCart must be used within a ShoppingCartProvider'
    );
  }
  return context;
}
