import { axiosClient, axiosClientToken } from "~/configs/axios";

export const categoryApi = {
  async getAll() {
    return await axiosClient.get("/categories");
  },
  async create(payload) {
    return await axiosClientToken.post("/categories/create", payload);
  },
  async update(id, payload) {
    return await axiosClientToken.put(`/categories/update/${id}`, payload);
  },
  async delete(id) {
    return await axiosClientToken.delete(`/categories/delete/${id}`);
  },
  async detail(id) {
    return await axiosClient.get(`/categories/detail/${id}`);
  },
};
