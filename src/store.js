import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import authReducer from "./features/authSlice";
import eventReducer from "./features/eventSlice";

const reducers = combineReducers({
  auth: authReducer,
  events: eventReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});
export const persistor = persistStore(store, null, () => {
  // if you want to get restoredState
  console.log("restoredState", store.getState());
});

export default store;
