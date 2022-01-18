const apiKey = "AIzaSyA3pqd5XOM9I9Kq9JdctBATeIA4JVNxb4w";

export const getDataAPI = (input) => {
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${apiKey}&maxResults=10&q=${input}`;
  fetch(url)
    .then((data) => data.json())
    .then((data) => data.item);
};
