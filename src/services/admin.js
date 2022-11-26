import axios from "../utils/axios";

export const getAdmins = async () => {
  return await axios.get("api/utilisateurs");
};

export const addAdmin = async (data) => {
  return await axios.post('api/utilisateurs', data);
};

export const editAdmin = async (id, data) => {
  return await axios.put(`api/utilisateurs/${id}/`, data);
};

export const deleteAdmin= async (id)=>{
  return await axios.delete(`api/utilisateurs/${id}/`);
}