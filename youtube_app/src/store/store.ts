import { combineReducers, configureStore } from "@reduxjs/toolkit";
import channelReducer from "./reducer/reducer";

const rootReducer = combineReducers({
  channelReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    devTools: true,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type ApplicationStore = ReturnType<typeof setupStore>;
export type ApplicationDispatch = ApplicationStore["dispatch"];
