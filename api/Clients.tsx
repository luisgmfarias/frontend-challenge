import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://629f52338b939d3dc29519e3.mockapi.io/api/challenge",
});

export const appClient = () => {
  async function register(body: any) {
    try {
      const res = await axiosInstance.post(`/user`, body);
      const data = res;
      return data;
    } catch (error) {
      return error;
    }
  }

  async function getUser(id: string) {
    try {
      const res = await axiosInstance.get(`/user/${id}`);
      const data = res;
      return data;
    } catch (error) {
      return error;
    }
  }

  return { register, getUser };
};
