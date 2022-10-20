import React from "react";
import { useState } from "react";
const AmountContext = React.createContext({
  mealItems: [],
  formSubmitHandler: (event) => {},
});

export function AmountContextProvider(props) {
  const [cartItems, setCartItems] = useState([]);

  const submitHandler = (event) => {
    event.preventDefault();
    const id = event.target[0].value;
    const amount = event.target[1].value;
    const intendedItems = {
      id: id,
      amount: amount,
    };

    setCartItems((prev) => {
      return [intendedItems, ...prev];
    });
  };

  return (
    <AmountContext.Provider
      value={{
        mealItems: cartItems,

        formSubmitHandler: submitHandler,
      }}
    >
      {props.children}
    </AmountContext.Provider>
  );
}
export default AmountContext;
