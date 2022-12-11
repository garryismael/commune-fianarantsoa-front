import axios from "../utils/axios";

export const getPavillons = async () => {
	return await axios.get("pavillons");
};

export const addPavillon = async (data) => {
	return await axios.post("pavillons", data);
};

export const editPavillon = async (id, data) => {
	return await axios.put(`pavillons/${id}/`, data);
};

export const deletePavillon = async (id) => {
	return await axios.delete(`pavillons/${id}/`);
};
