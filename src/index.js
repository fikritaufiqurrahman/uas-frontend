import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import Admin from "./Admin.js";
import Users from "./Users";
import axios from "axios";
axios.defaults.withCredentials = true;
ReactDOM.render(
  <React.StrictMode>
    <Admin />
    <Users />
  </React.StrictMode>,
  document.getElementById("root")
);
