import axios from "../utils/axios";

export const getAdmins = async () => {
  return await axios.get("api/utilisateurs");
};

export const addAdmin = async (data) => {
  return await axios.post('api/utilisateurs', data);
};