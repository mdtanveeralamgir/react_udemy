import AmountContext from "../Context/amount-context";
import React, { useContext } from "react";
import DUMMY_MEALS from "../../Store/dummy_meals";
import Card from "../UI/Card";
import MealCartItems from "../Meal/MealCartItems";

const CartItems = () => {
  const ctx = useContext(AmountContext);
  const filteredCartMeals = [];
  ctx.mealItems.forEach((eachMeal) => {
    DUMMY_MEALS.forEach((eachDummyMeal) => {
      if (eachMeal.id === eachDummyMeal.id) {
        const temp = {
          ...eachDummyMeal,
          totalAmount: eachMeal.amount,
        };
        filteredCartMeals.push(temp);
      }
    });
  });
  // console.log(filteredCartMeals);

  return (
    <Card>
      <span>{ctx.mealItems.length}</span>
      {filteredCartMeals.map((meal) => (
        <MealCartItems
          key={Math.random()}
          name={meal.name}
          description={meal.description}
          price={meal.price}
          id={meal.id}
          totalAmount={meal.totalAmount}
        />
      ))}
    </Card>
  );
};

export default CartItems;
