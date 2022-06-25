import React from 'react';
import { CartContext } from './CartContext';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (prevCartState, action) => {
  if (action.type === 'ADD') {
    const updatedTotalAmount =
      prevCartState.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = prevCartState.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = prevCartState.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...prevCartState.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = prevCartState.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === 'REMOVE') {
    const existingCartItemIndex = prevCartState.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = prevCartState.items[existingCartItemIndex];

    const updatedTotalAmount =
      prevCartState.totalAmount - existingCartItem.price;
    let updatedItems;
    if (existingCartItem.amount === 1) {
      updatedItems = prevCartState.items.filter(
        (item) => item.id !== action.id
      );
    } else {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItems = [...prevCartState.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
};

// 2. wrap the properties and define what can be providered in this context
export const CartProvider = (props) => {
  const [cartState, dispatchCartFn] = React.useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartFn({ type: 'ADD', item: item });
  };
  const removeItemFromCardHandler = (id) => {
    dispatchCartFn({ type: 'REMOVE', id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCardHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
