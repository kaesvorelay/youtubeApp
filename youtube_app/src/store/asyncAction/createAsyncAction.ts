import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
import React from "react";
import { searchChannel } from "../../api/api";

export interface IfetchChannel {
  idVideo: string;
  channelTitle: string;
  descr: string;
}

export const fetchChannel: AsyncThunk<IfetchChannel[], any, any> =
  createAsyncThunk("channel/getChannel", async function (channel: string) {
    const data = await searchChannel(channel);
    return data;
  });
