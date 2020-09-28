import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// Bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

//sass
import "./Sass/main.scss";

// Javascript library
import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

// Redux
import { createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";

// Connect redux to react
import { Provider } from "react-redux";
// Reducer
import rootReducer from "./Redux/reducer/rootReducer.js";

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
