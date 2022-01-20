import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
import { IState } from "../../types/typesState";

const initialState = {
  channelTittle: "",
  channelDiscription: "",
  videoID: "",
  videoTittle: "",
  haveData: false,
} as IState;

export const channelSlice = createSlice({
  name: "channel",
  initialState,
  reducers: {
    addVal(state, action) {},
  },
});

export default channelSlice.reducer;
