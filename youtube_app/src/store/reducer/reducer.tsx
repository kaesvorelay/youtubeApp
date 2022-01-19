import { createAction, createReducer } from "@reduxjs/toolkit";
import { IState } from "../../types/typesState";
import { getValue } from "../actions/actionGetChanelList";

const initialState = {
  value: "",
} as IState;

export const reducerChanel = createReducer(initialState, (builder) => {
  builder.addCase(getValue, (state, action) => {
    state.value += action.payload;
    console.log(state.value);
  });
});
