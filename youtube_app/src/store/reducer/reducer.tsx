import { Action, createSlice } from "@reduxjs/toolkit";
import { fetchChannel } from "../asyncAction/createAsyncAction";
import { Data, IState } from "../../types/typesState";

const initialState: IState = {
  error: "",
  loading: false,
  data: [],
};

export const channelSlice = createSlice({
  name: "channel",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchChannel.fulfilled, (state, action: any) => {
      state.data = action.payload.map((item: Data) => ({
        idVideo: item.id.videoId,
        channelTitle: item.snippet.channelTitle,
        descr: item.snippet.description,
      }));
      state.error = "";
      state.loading = true;
      console.log(state.data, state.loading, state.error);
    });
    // [fetchChannel.pending.type]: (state) => {
    //   state.error = "";
    //   state.loading = true;
    //   console.log(state.data, state.loading, state.error);
    // },
    // [fetchChannel.rejected.type]: (state, action) => {
    //   state.error = action.payload;
    //   state.loading = false;
    //   console.log(state.data, state.loading, state.error);
    // },
  },
});

export default channelSlice.reducer;
