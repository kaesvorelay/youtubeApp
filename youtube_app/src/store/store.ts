import { combineReducers, configureStore } from "@reduxjs/toolkit";
import channelSlice from "./reducer/reducer";

export const rootReducer = combineReducers({
  channelSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
