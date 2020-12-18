import axios from "axios";

const KEY = "AIzaSyDg0jg2N2wGvFfAJLptvctjVFHfhzKPyuw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",  
    maxResults: 5,
    key: KEY,
  },
});
