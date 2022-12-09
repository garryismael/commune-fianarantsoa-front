import axios from "../utils/axios";

export const getClients = async () => {
	return await axios.get("api/clients");
};

export const addClient = async (data) => {
	return await axios.post("api/clients", data);
};

export const editClient = async (id, data) => {
	return await axios.put(`api/clients/${id}/`, data);
};

export const deleteClient = async (id) => {
	return await axios.delete(`api/clients/${id}/`);
};
