import { axiosClient, axiosClientToken } from "~/configs/axios";

export const brandApi = {
  async getAll() {
    return await axiosClient.get("/brands");
  },
  async create(payload) {
    return await axiosClientToken.post("/brands/create", payload);
  },
  async update(id, payload) {
    return await axiosClientToken.put(`/brands/update/${id}`, payload);
  },
  async delete(id) {
    return await axiosClientToken.delete(`/brands/delete/${id}`);
  },
  async detail(id) {
    return await axiosClient.get(`/brands/detail/${id}`);
  },
};
