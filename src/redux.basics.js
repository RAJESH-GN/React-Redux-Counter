const redux = require("redux");
const createStore = redux.createStore;
const initialState = {
  counter: 0,
};
//Reducers

const reduce = (state = initialState, action) => {
  if (action.type == "INC_COUNTER") {
    state = {
      ...state,
      counter: state.counter + 1,
    };
  }
  if (action.type == "ADD_VALUE") {
    state = {
      ...state,
      counter: state.counter + action.value,
    };
  }
  return state;
};
//Store
const store = createStore(reduce);
console.log(store.getState());
// Subscriptions
store.subscribe(() => {
  console.log("[Subscription value]: ", { ...store.getState() });
});
//Actions
store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "ADD_VALUE", value: 5 });
console.log(store.getState());
