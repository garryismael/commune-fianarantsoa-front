import axios from "../utils/axios";

export const getActivites = async () => {
	return await axios.get("activites");
};

export const addActivite = async (data) => {
	return await axios.post("activites", data);
};

export const editActivite = async (id, data) => {
	return await axios.put(`activites/${id}/`, data);
};

export const deleteActivite = async (id) => {
	return await axios.delete(`activites/${id}/`);
};
