import axios from "axios";

const baseUrl = "http://127.0.0.1:8000";

const instance = axios.create({
  baseURL: baseUrl,
});

const tkn = localStorage.getItem("token");
if (tkn) {
  instance.defaults.headers.common["Authorization"] = `Bearer ${tkn}`;
}

export const setHeader = (response) => {
  const token = response.data.access_token;
  localStorage.setItem("token", token);
  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export default instance;
