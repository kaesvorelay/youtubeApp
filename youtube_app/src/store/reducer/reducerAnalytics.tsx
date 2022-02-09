import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { statisticsVideo } from "../../api/api";
import { IStateAnalytics, statisticsData } from "../../types/typesState";
import { fetchAnalytics } from "../asyncAction/analyticsAction";

const initialState: IStateAnalytics = {
  error: "",
  loading: false,
  data: [],
};

export const analyticsSlice = createSlice({
  name: "analytics",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAnalytics.fulfilled.type]: (
      state,
      action: PayloadAction<statisticsData[]>
    ) => {
      state.data = action.payload.map((item) => ({
        viewCount: item.statistics.viewCount,
        likeCount: item.statistics.likeCount,
        favoriteCount: item.statistics.favoriteCount,
        commentCount: item.statistics.commentCount,
      }));
      state.error = "";
      state.loading = true;
    },
    [fetchAnalytics.pending.type]: (state) => {
      state.error = "";
      state.loading = true;
    },
    [fetchAnalytics.rejected.type]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export default analyticsSlice.reducer;
