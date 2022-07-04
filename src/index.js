import React from "react";
import ReactDOM from "react-dom";
import PermissionConsumer from './PermissionProvider.jsx';
import App from "./App";


var mountNode = document.getElementById("app");
ReactDOM.render(
  <PermissionConsumer>
  <App name="Jane" />
  </PermissionConsumer>
  , mountNode);
