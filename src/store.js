import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import authReducer from "./features/authSlice";
import { eventsApi } from "./features/api/eventApi";
import { userApi } from "./features/api/userApi";
import { ticketApi } from "./features/api/ticketApi";
import { promocodeApi } from "./features/api/promocodeApi";

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

/**
 * @description Redux store with all reducers
 * @date 5/11/2023 - 11:05:28 PM
 * @author h4z3m
 *
 * @type {*}
 */
const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(thunk)
      .concat(eventsApi.middleware)
      .concat(userApi.middleware)
      .concat(ticketApi.middleware)
      .concat(promocodeApi.middleware),
});

/**
 * @description Persistor for redux store
 * @date 5/11/2023 - 11:05:11 PM
 * @author h4z3m
 *
 * @type {*}
 */
export const persistor = persistStore(store, null, () => {
  console.log("restoredState", store.getState());
});

export default store;
