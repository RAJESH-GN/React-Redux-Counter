import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import registerServiceWorker from "./registerServiceWorker";
import App from "./App";
import results from "./store/reducers/results";
import counter from "./store/reducers/counter";
import "./index.css";
const reducers = combineReducers({
  ctr: counter,
  res: results,
});

const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log("Logger added ", action);
      const result = next(action);
      //console.log("store details", store.getStore());
      return result;
    };
  };
};
const store = createStore(reducers, applyMiddleware(logger));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
