import { axiosClient } from "~/configs/axios";

export const categoryApi = {
  async getAll() {
    return await axiosClient.get("/categories");
  },
};
