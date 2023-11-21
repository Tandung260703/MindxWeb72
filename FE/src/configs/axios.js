import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const axiosClient = axios.create({
  baseURL: "http://localhost:3001/api/v1",
});

const configAxios = {
  baseURL: "http://localhost:3001/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
};

export const axiosClientToken = axios.create(configAxios);

axiosClientToken.interceptors.request.use(
  async function (config) {
    const date = new Date();
    const MILLISECONDS_PER_SECOND = 1000;

    const nowTime = date.getTime() / MILLISECONDS_PER_SECOND;

    const accessToken = localStorage.getItem("ACCESS_TOKEN");

    if (accessToken) {
      const decodedToken = jwtDecode(accessToken);

      // if (decodedToken.exp < nowTime) {
      //   const res = await authApi.refreshToken();

      //   if (res.statusCode === 200) {
      //     config.headers.Authorization = `Bearer ${res.data.accessToken}`;
      //   }
      // } else {
      config.headers.Authorization = `Bearer ${accessToken}`;
      // }
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosClientToken.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (config) {
    return config.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);
