// server
import * as serviceWorker from "./serviceWorker";
// react
import React from "react";
import ReactDOM from "react-dom";
// modules
import App from "./App";
import giphyApi from "./APIs/giphyAPI";
// store
import {createStore} from "redux";
import {Provider} from "react-redux";
// reducers
import reducers from "./reducers";
// redux-thunk
import thunk from "redux-thunk";
import {applyMiddleware} from "redux";
// actions
import getUrls from "./actions/getUrls";

const middleWares = [thunk];

const store = createStore(reducers, applyMiddleware(...middleWares));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
