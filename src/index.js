import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./fontawesome/css/all.css";
import "./fontawesome/css/fontawesome.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
