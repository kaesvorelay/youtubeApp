import { combineReducers, configureStore } from "@reduxjs/toolkit";
import channelReducer from "./reducer/reducer";

export const rootReducer = combineReducers({
  channelReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    devTools: true,
  });
};
