import { axiosClient } from "~/configs/axios";

export const brandApi = {
  async getAll() {
    return await axiosClient.get("/brands");
  },
};
