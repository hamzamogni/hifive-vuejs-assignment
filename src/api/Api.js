
import axios from "axios";

export default () => {
  let baseURL = "https://api.github.com/search/repositories";

  return axios.create({
    baseURL: baseURL,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};