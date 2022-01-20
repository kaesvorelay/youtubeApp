import { useAppSelector } from "../hooks/reduxHooks";
import { setupStore } from "../store/store";
import axios from "axios";

const apiKey = "AIzaSyA3pqd5XOM9I9Kq9JdctBATeIA4JVNxb4w";

export const searchChannel = (channel: string) => {
  return axios({
    url: "https://www.googleapis.com/youtube/v3/search",
    method: "GET",
    params: {
      part: "snippet",
      key: apiKey,
      maxResults: 5,
      q: channel,
    },
  })
    .then((data) => data.data.items)
    .catch((error) => error);
};
