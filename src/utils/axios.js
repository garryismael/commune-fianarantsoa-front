import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api";

const instance = axios.create({
  baseURL: baseUrl,
});


export const setHeader = (response) => {
  const token = response.data.access_token;
  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export default instance;
