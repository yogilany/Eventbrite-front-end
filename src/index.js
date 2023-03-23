import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/theme.scss";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.scss";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
