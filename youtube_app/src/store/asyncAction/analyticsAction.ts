import { createAsyncThunk } from "@reduxjs/toolkit";
import { statisticsVideo } from "../../api/api";

export const fetchAnalytics = createAsyncThunk(
  "analytics/getStatistics",
  async (id: string, thunkAPI) => {
    try {
      const response = statisticsVideo(id);
      return response;
    } catch (e) {
      if (e instanceof Error) {
        return thunkAPI.rejectWithValue(e.message);
      } else {
        return "Unknown error";
      }
    }
  }
);
