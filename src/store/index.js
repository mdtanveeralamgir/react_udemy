
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter-slice";
import authReducer from "./auth-slice"



// const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
//   if (action.type === "INCREMENT") {
//     return { ...state, counter: state.counter + 1 };
//   }
//   if (action.type === "INCREMENT_BY") {
//     return { ...state, counter: state.counter + action.value };
//   }
//   if (action.type === "DECREMENT") {
//     return { ...state, counter: state.counter - 1 };
//   }
//   if (action.type === "TOGGLE") {
//     return { ...state, showCounter: !state.showCounter };
//   }
//   return state;
// };

const store = configureStore({
  //if ther eis only one reducer
  // reducer: counterSlice.reducer,
  reducer: { counter: counterReducer, auth: authReducer },
});

//This gives the access to functions (increment, decrement, ...)


export default store;
