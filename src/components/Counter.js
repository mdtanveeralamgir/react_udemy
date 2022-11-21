import classes from "./Counter.module.css";
//
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  //While using useSelector the react will automatically create a subscription for this component
  const counter = useSelector((state) => state.counter);

  const incrementHandler = () => {
    dispatch({ type: "INCREMENT" });
  };
  const incrementByFiveHandler = () => {
    dispatch({ type: "INCREMENT_BY", value: 5 });
  };
  const decrementHandler = () => {
    dispatch({ type: "DECREMENT" });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementByFiveHandler}>Incresed by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
