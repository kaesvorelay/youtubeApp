import axios from "axios";
import { Data } from "../types/typesState";

const apiKey = "AIzaSyA3pqd5XOM9I9Kq9JdctBATeIA4JVNxb4w";

export const searchChannel = (channel: string): Promise<Data[]> => {
  return axios({
    url: "https://www.googleapis.com/youtube/v3/search",
    method: "GET",
    params: {
      type: "video",
      videoEmbeddable: true,
      part: "snippet",
      key: apiKey,
      maxResults: 5,
      q: channel,
    },
  }).then((data) => data.data.items);
};
