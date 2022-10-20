import classes from "./MealItemForm.module.css";
import InputForm from "../UI/InputForm";
import AmountContext from "../Context/amount-context";

import { useContext, useState } from "react";

const MealItemForm = (props) => {
  const ctx = useContext(AmountContext);
  const [amount, setAmount] = useState(+props.amount | 1);

  const amountChangeHandler = (event) => {
    setAmount(+event.target.value);
  };

  // props.onAmountChange(amount);

  return (
    <form className={classes.form} onSubmit={ctx.formSubmitHandler}>
      <input type="hidden" value={props.id} />
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
