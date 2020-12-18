import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",

  headers: {
    Authorization: "Client-ID A1po3d9vYJPNjFMsPZpTs2lZIPwqaSnqPJBdHGBqjCI",
  },
});
