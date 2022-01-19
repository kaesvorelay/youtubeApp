import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducerChanel } from "./reducer/reducer";

const rootReducer = combineReducers({
  reducerChanel,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type ApplicationStore = ReturnType<typeof setupStore>;
export type ApplicationDispatch = ApplicationStore["dispatch"];
