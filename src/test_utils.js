import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
// As a basic setup, import your same slice reducers
import { GoogleOAuthProvider } from "@react-oauth/google";
import { PersistGate } from "redux-persist/lib/integration/react";
import thunk from "redux-thunk";
import { eventsApi } from "./features/api/eventApi";
import { promocodeApi } from "./features/api/promocodeApi";
import { ticketApi } from "./features/api/ticketApi";
import { userApi } from "./features/api/userApi";
import { authSlice } from "./features/authSlice";
import { persistor } from "./store";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { default as authReducer } from "./features/authSlice";

const reducers = combineReducers({
  auth: authReducer,
  [userApi.reducerPath]: userApi.reducer,
  [eventsApi.reducerPath]: eventsApi.reducer,
  [ticketApi.reducerPath]: ticketApi.reducer,
  [promocodeApi.reducerPath]: promocodeApi.reducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export function renderWithProviders(
  ui,
  {
    preloadedState = {
      auth: {
        userEmail: null,
        userFirstName: "",
        userLastName: "",
        userAvatarURL: "",
        userToken: null,
        userID: "",
        isLoading: false,
        emailExists: false,
        isLoggedIn: false,
      },
      user: null,
      events: [],
      tickets: [],
      promocodes: [],
    },
    store = configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        })
          .concat(thunk)
          .concat(eventsApi.middleware)
          .concat(userApi.middleware)
          .concat(ticketApi.middleware)
          .concat(promocodeApi.middleware),
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <GoogleOAuthProvider clientId="926811089652-fk16hf67jlqsnah9csv5v3rt0vu4u9o8.apps.googleusercontent.com">
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>{children}</BrowserRouter>
          </PersistGate>
        </Provider>
      </GoogleOAuthProvider>
    );
  }
  return render(ui, { wrapper: Wrapper, ...renderOptions });
}
export default renderWithProviders;
// export function renderWithProviders(element: React.ReactElement, state?: any) {
//   const store = getStoreWithState(state);
//   const utils = render(
//     <Provider store={store}>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/">{element}</Route>
//         </Routes>
//       </BrowserRouter>
//     </Provider>
//   );
//   return { store, ...utils };
// }

// export function getStateWithItems(
//   items: Record<string, number>,
//   products: Record<string, Product> = {}
// ): RootState {
//   const state: RootState = {
//     products: { products },
//     cart: { errorMessage: "", checkoutState: "READY", items },
//   };
//   return state;
// }
