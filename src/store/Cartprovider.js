import CartContext from './cart-context';
import { useReducer } from 'react';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    // total amount
    const updatedtotalAmount =
      state.totalAmount + action.funcItem.price * action.funcItem.count;

    // if item already exist
    const itemExistCheckIndex = state.items.findIndex(
      (item) => item.id === action.funcItem.id
    );

    const fetchExistingCartItem = state.items[itemExistCheckIndex];

    let updatedItems;

    if (fetchExistingCartItem) {
      const fixingCountOfItemList = {
        // just updating the count
        ...fetchExistingCartItem,
        count: fetchExistingCartItem.count + action.funcItem.count,
      };

      updatedItems = [...state.items];
      updatedItems[itemExistCheckIndex] = fixingCountOfItemList;
    } else {
      updatedItems = state.items.concat(action.funcItem);
    }

    return {
      items: updatedItems,
      totalAmount: updatedtotalAmount,
    };
  }

  if (action.type === 'REMOVE') {
    const itemExistCheckIndex = state.items.findIndex(
      (item) => item.id === action.funcId
    );

    const existingItem = state.items[itemExistCheckIndex];

    const updatedTotalCount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.count === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.funcId);
    } else {
      const updatedItemExtraRemove = {
        ...existingItem,
        amount: existingItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[itemExistCheckIndex] = updatedItemExtraRemove;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalCount,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCart({ type: 'ADD', funcItem: item });
  };
  const removeItemToCartHandler = (id) => {
    dispatchCart({ type: 'REMOVE', funcId: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
