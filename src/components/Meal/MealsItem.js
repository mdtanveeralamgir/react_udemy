import classes from "./MealsItem.module.css";
import MealItemForm from "./MealItemForm";

const MealsItem = (props) => {
  return (
    <div className={classes.meal}>
      <h3>{props.name}</h3>
      <p className={classes.description}>{props.description}</p>
      <span className={classes.price}>{props.price}</span>
      <MealItemForm id={props.id}/>
    </div>
  );
};

export default MealsItem;
