import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/theme.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.scss";
import "./index.css";
import App from "./App";
import { AnimatePresence } from "framer-motion";
import store from './store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AnimatePresence>
        <App />
      </AnimatePresence>
    </Provider>
  </React.StrictMode>
);
