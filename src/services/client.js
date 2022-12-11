import axios from "../utils/axios";

export const getClients = async () => {
	return await axios.get("clients");
};

export const getClientAbonnements = async (id) => {
	return await axios.get(`clients/${id}/abonnements`);
}

export const addClient = async (data) => {
	return await axios.post("clients", data);
};

export const editClient = async (id, data) => {
	return await axios.put(`clients/${id}/`, data);
};

export const deleteClient = async (id) => {
	return await axios.delete(`clients/${id}/`);
};
