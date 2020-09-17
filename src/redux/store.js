import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web;
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
// import {configureStore} from '@reduxjs/toolkit'
import rootReducer from "./index.js";

const middleWares = [thunk];

const persistConfig = {
  key: "session",
  storage,
  whitelist: ["session", "finance"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const rootMiddleWares = applyMiddleware(...middleWares);
// const compose = composeWithDevTools(rootMiddleWares)

// const store =createStore(rootReducer,composeWithDevTools());
export const store = createStore(persistedReducer, composeWithDevTools(rootMiddleWares));
export const persistor = persistStore(store);
// const store = configureStore({
//   reducer: rootReducer,
//   devTools: p
