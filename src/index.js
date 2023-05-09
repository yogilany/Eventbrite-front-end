import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/theme.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "src/store.ts";
import App from "src/App";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "src/App.scss";
import "src/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider
    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID_TESTING}
  >
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {/* <AnimatePresence> */}
          <App />
          {/* </AnimatePresence> */}
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </GoogleOAuthProvider>
);
