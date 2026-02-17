import React, { createContext, useReducer } from "react";

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "add-item": {
      const isExist = state.cartItems.find(
        (item) => item.id == action.payload.id,
      );

      if (isExist) {
        const updatedCart = state.cartItems.map((item) =>
          item.id == action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
        return { ...state, cartItems: updatedCart };
      }

      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
      };
    }

    case "remove-item": {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    }

    case "increment": {
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id == action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      };
    }
    case "decrement": {
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id == action.payload
            ? {
                ...item,
                quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity,
              }
            : item,
        ),
      };
    }

    default:
      return state;
  }
};

export const CartContext = createContext();
const CartProvider = ({ children }) => {
  const initialState = {
    cartItems: [],
  };
  const [cart, dispatch] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;