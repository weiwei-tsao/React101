import React from 'react';

// 1. create an object of context containing the properties will be used among components
export const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});
