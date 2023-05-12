import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { BrowserRouter } from "react-router-dom";
// As a basic setup, import your same slice reducers
import { authSlice } from "./features/authSlice";
import { eventSlice } from "./features/api/eventApi";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor } from "./store";
export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    store = configureStore({
      reducer: {
        auth: authSlice.reducer,
        event: eventSlice.reducer,
      },
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
