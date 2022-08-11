import React from "react";
import ReactDOM from "react-dom";
import PermissionConsumer from "./PermissionProvider.jsx";
import App from "./App";
import { store } from "./app/store.js";
import { Provider } from "react-redux";

var mountNode = document.getElementById("app");
ReactDOM.render(
  <PermissionConsumer>
    <Provider store={store}>
      <App name="Jane" />
    </Provider>
  </PermissionConsumer>,
  mountNode
);
