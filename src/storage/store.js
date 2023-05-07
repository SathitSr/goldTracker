import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

import appSlice from "./app/appSlice";

const rootReducer = combineReducers({
  app: appSlice,
});

const persistConfig = {
  key: "app",
  storage: AsyncStorage,
  whitelist: ["app"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);

export default store;
