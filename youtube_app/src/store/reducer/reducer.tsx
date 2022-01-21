import { map } from "lodash";
import {
  createAction,
  createReducer,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { IState } from "../../types/typesState";
import { fetchChannel, IfetchChannel } from "../asyncAction/createAsyncAction";
import { Data } from "../../types/typesState";

const initialState = {
  error: "",
  loading: true,
  data: [],
};

export const channelSlice = createSlice({
  name: "channel",
  initialState,
  reducers: {
    addVal(state, action) {},
  },
  extraReducers: {
    [fetchChannel.fulfilled.toString()]: (
      state,
      action: PayloadAction<Data[]>
    ) => {
      // state.data = action.payload.map((item) => ({
      //   idVideo: item.id.videoId,
      //   channelTitle: item.snippet.channelTitle,
      //   descr: item.snippet.description,
      // }))
      console.log(action);
    },
  },
});

export default channelSlice.reducer;
