import classes from "./MealsItem.module.css";
import MealItemForm from "./MealItemForm";

const MealCartItems = (props) => {
    // const [price, setPrice] = useState(+props.price);
  return (
    <div className={classes.meal}>
      <h3>{props.name}</h3>
      <p className={classes.description}>{props.description}</p>
      <span className={classes.price}>{+props.price}</span>
      <span>{+props.price * props.totalAmount}</span>
      <MealItemForm id={props.id} amount={props.totalAmount}/>
    </div>
  );
};

export default MealCartItems;
