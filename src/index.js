import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/theme.scss";
import { Provider } from "react-redux";
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import App from "./App";
import "./App.scss";
import "./index.css";
import store from "./store";

let persistor = persistStore(store);

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
