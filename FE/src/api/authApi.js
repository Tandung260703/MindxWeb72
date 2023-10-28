import { axiosClient } from "../configs/axios";

const apiEndPoint = "/auth";
export const authApi = {
  async login(username, password) {
    try {
      const res = await axiosClient.post(`${apiEndPoint}/login`, {
        username,
        password,
      });

      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
};
