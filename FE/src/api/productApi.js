import { axiosClient, axiosClientToken } from "~/configs/axios";

export const productApi = {
  async getall() {
    return await axiosClient.get("/products");
  },

  async search(searchResult) {
    return await axiosClient.get(`/products?q=${searchResult}`);
  },

  async create(payload) {
    return await axiosClientToken.post("/products/create", payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  async delete(payload) {
    return await axiosClientToken.delete(`/products/delete/${payload}`);
  },

  async update(id, payload) {
    return await axiosClientToken.put(`/products/update/${id}`, payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  async detail(id) {
    return await axiosClient.get(`/products/detail/${id}`);
  },
};
