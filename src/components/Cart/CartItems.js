import AmountContext from "../Context/amount-context";
import React, { useContext, useState } from "react";
import DUMMY_MEALS from "../../Store/dummy_meals";

const CartItems = () => {

    const ctx = useContext(AmountContext);
    console.log(ctx.mealItems);
    const [totalItems, setTotalItems] = useState(ctx.mealItems.length);

  return <div>
    <span>{totalItems}</span>
    {/* <form>

    </form> */}
  </div>;
};

export default CartItems;
