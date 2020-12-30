import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import registerServiceWorker from "./registerServiceWorker";
import App from "./App";
import results from "./store/reducers/results";
import counter from "./store/reducers/counter";
import "./index.css";
const reducers = combineReducers({
  ctr: counter,
  res: results,
});
const store = createStore(reducers);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
