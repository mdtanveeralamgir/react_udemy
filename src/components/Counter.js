import classes from './Counter.module.css';
//
import { useSelector } from 'react-redux';

const Counter = () => {

  //While using useSelector the react will automatically create a subscription for this component
  const counter = useSelector(state => state.counter);

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
