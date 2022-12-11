import axios from "../utils/axios";

export const getAbonnements = async () => {
  return await axios.get("abonnements");
};

export const addAbonnement = async (data) => {
  return await axios.post("abonnements", data);
}

export const editAbonnement = async (id, data) => {
  return await axios.put(`abonnements/${id}`, data);
}

export const deleteAbonnement = async (id) => {
  return await axios.delete(`abonnements/${id}`);
};