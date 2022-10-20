import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

//useReducer is added outside the component because it doesn't need anything from the component
// And useReducer should not be reevaluated each time component runs
//param state: last snapshot of the state
//param action: dispatch by the dispatcherfunction in the useReducer
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    //state.items holds the existing items
    //action.item is the new item passed by addItemToCartHandler function
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.items.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  //param cartReducer: passing the reducer function
  //param defaultCartState: initial state
  //[0] cartState: state's snapshot
  //[1] dispatchCartAction: function allows to dispatch an action to  the reducer

  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
