import { createAsyncThunk } from "@reduxjs/toolkit";
import { searchChannel } from "../../api/api";

export interface IfetchChannel {
  idVideo: string;
  channelTitle: string;
  descr: string;
}

export const fetchChannel = createAsyncThunk(
  "channel/getChannel",
  async (channel: string, thunkAPI) => {
    try {
      const response = await searchChannel(channel);
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
