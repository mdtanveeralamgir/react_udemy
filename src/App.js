import MealsItem from "./components/Meal/MealsItem";
import Card from "./components/UI/Card";
import DUMMY_MEALS from "./Store/dummy_meals";
import CartItems from "./components/Cart/CartItems";

function App() {
  return (
    <>
    <CartItems />
    <Card>
      {DUMMY_MEALS.map((meal) => 
        <MealsItem key={meal.id} name={meal.name} description={meal.description} price={meal.price} id={meal.id}/>
      )}
    </Card>
    </>
  );
}

export default App;
