import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
  extraReducers: {
    [fetchChannel.fulfilled.type]: (state, action: PayloadAction<Data[]>) => {
      state.data = action.payload.map((item) => ({
        idVideo: item.id.videoId,
        channelTitle: item.snippet.channelTitle,
        descr: item.snippet.description,
        image: item.snippet.thumbnails.high.url,
      }));
      state.error = "";
      state.loading = true;
      console.log(state.data);
    },
    [fetchChannel.pending.type]: (state) => {
      state.error = "";
      state.loading = true;
    },
    [fetchChannel.rejected.type]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export default channelSlice.reducer;
