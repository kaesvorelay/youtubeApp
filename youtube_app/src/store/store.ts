import { combineReducers, configureStore } from "@reduxjs/toolkit";
import channelSlice from "./reducer/reducer";
import analyticsSlice from "./reducer/reducerAnalytics";
import popUpSlice from "./reducer/reducerPopUp";

export const rootReducer = combineReducers({
  channelSlice,
  analyticsSlice,
  popUpSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
