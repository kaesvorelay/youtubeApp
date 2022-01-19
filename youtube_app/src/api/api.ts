import { useAppSelector } from "../hooks/reduxHooks";
import { setupStore } from "../store/store";
import axios from "axios";

const apiKey = "AIzaSyA3pqd5XOM9I9Kq9JdctBATeIA4JVNxb4w";

// export const getDataAPI = (input: string, arr: string | string[]) => {
//   ;
//   const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${apiKey}&maxResults=10&q=${input}`;
//   fetch(url)
//     .then((data) => data.json())
//     .then((data) => data.item)
//     .then((data) => (data += arr))
//     .catch((error) => (error.message += arr));
//   return arr;
// };

// const YoutubeChanelList = () => {
//   const state = useAppSelector(setupStore)
// }

export const getChannel = (user: string) => {
  return axios({
    url: "https://www.googleapis.com/youtube/v3/search",
    method: "GET",
    params: {
      part: "snippet",
      key: apiKey,
      maxResults: 5,
      q: user,
    },
  })
    .then((res) => console.log(res.data))
    .catch((error) => console.log(error));
};
