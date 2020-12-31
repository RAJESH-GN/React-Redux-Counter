import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import registerServiceWorker from "./registerServiceWorker";
import results from "./store/reducers/results";
import counter from "./store/reducers/counter";
import App from "./App";
import "./index.css";
const reducers = combineReducers({
  ctr: counter,
  res: results,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
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

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(logger, thunk))
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
