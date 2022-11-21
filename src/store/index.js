import { createStore } from "redux";

const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
  if (action.type === "INCREMENT") {
    return { ...state, counter: state.counter + 1 };
  }
  if (action.type === "INCREMENT_BY") {
    return { ...state, counter: state.counter + action.value };
  }
  if (action.type === "DECREMENT") {
    return { ...state, counter: state.counter - 1 };
  }
  if (action.type === "TOGGLE") {
    return { ...state, showCounter: !state.showCounter };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
