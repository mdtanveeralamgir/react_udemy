import classes from "./MealItemForm.module.css";
import InputForm from "../UI/InputForm";
import AmountContext from "../Context/amount-context";

import { useState, useContext, useRef } from "react";

const MealItemForm = (props) => {
  const [amount, setAmount] = useState(1);
  const ctx = useContext(AmountContext);
  const idRef = useRef();
  const amountChangeHandler = (event) => {
    setAmount(+event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const intendedItems = {
      id: idRef.current.value,
      amount: amount,
    };
    const temp = ctx.mealItems;
    temp.push(intendedItems);
    ctx.mealItems = temp;
    // console.log(ctx.mealItems);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input ref={idRef} type="hidden" value={props.id} />
      <InputForm
        type="number"
        label="Amount"
        id="amount"
        value={amount}
        min="1"
        onChange={amountChangeHandler}
      />
      <button>Add</button>
    </form>
  );
};

export default MealItemForm;
