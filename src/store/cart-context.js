import React from 'react';
// ********* CONTEXT STEP 1 *********
// we create this below stuff for better auto completion that's it!!
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  // shit coming from RenderMealsList
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
