import axios from "../utils/axios";

export const getAdmins = async () => {
  return await axios.get("utilisateurs");
};

export const addAdmin = async (data) => {
  return await axios.post('utilisateurs', data);
};

export const editAdmin = async (id, data) => {
  return await axios.put(`utilisateurs/${id}/`, data);
};

export const deleteAdmin= async (id)=>{
  return await axios.delete(`utilisateurs/${id}/`);
}