// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

//Creating a slice of our global obj
const counterSlice = createSlice({
  //The name is the unique identifier for this slice
  name: "counter",
  initialState: { counter: 0, showCounter: true },
  //Every reducers function receives the current version of state and also action
  //In these function we are allowed to mutate the state [unlike mentioned in readme]
  //Because internally toolkit override the exising state with a brand new state
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    incrementBy(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const authSlice = createSlice({
  name: "authentication",
  initialState: { isAuthenticated: false },
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

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
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

//This gives the access to functions (increment, decrement, ...)
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
