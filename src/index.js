import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/theme.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from "./store";
import App from "./App";
import "./App.scss";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <AnimatePresence> */}
        <App />
        {/* </AnimatePresence> */}
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
