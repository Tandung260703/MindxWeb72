import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "http://localhost:3001/",
});

axiosClient.interceptors.response.use(
  function (config) {
    return config.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);
