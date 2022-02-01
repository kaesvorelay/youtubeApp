import { createAsyncThunk } from "@reduxjs/toolkit";
import { searchChannel } from "../../api/api";
import { Data } from "../../types/typesState";

export const fetchChannel = createAsyncThunk(
  "channel/getChannel",
  async (channel: string, thunkAPI) => {
    try {
      const response = await searchChannel(channel);
      return response as Data[];
    } catch (e) {
      if (e instanceof Error) {
        return thunkAPI.rejectWithValue(e.message);
      } else {
        return "Unknown error";
      }
    }
  }
);
