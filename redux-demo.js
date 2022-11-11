const redux = require("redux");

/* 
* Reducer function
* It will be called by redux library 
* and will always receive 2 param
@param_1: old_state, needs to have a default value for first run
@param_2: Dispatched_action
* and it must return a new state obj

*/
const counterReducer = (state = {counter:0}, action) => {
  return {
    counter: state.counter + 1,
  };
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
}

//whenever the data of state has changed the function pass to the subscribe will execute
store.subscribe(counterSubscriber);

//Create and dispatch an action
store.dispatch({type: "INCREMENT"})
