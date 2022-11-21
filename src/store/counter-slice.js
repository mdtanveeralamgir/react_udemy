import { createSlice } from "@reduxjs/toolkit";

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

  export const counterActions = counterSlice.actions;
  export default counterSlice.reducer;