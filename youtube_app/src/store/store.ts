import { combineReducers, configureStore } from "@reduxjs/toolkit";
import channelSlice from "./reducer/reducer";
import analyticsSlice from "./reducer/reducerAnalytics";

export const rootReducer = combineReducers({
  channelSlice,
  analyticsSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
