import classes from "./Counter.module.css";

import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/index";

const Counter = () => {
  const dispatch = useDispatch();
  //While using useSelector the react will automatically create a subscription for this component
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const incrementByFiveHandler = () => {
    //If only the value is passed then toolkit will create an obj like this:
    //{type: UNIQUE_IDENTIFIER, payload: 5}
    //The name payload is given by toolkit
    //And in the slice we need to use payload key
    dispatch(counterActions.incrementBy(5));
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
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
