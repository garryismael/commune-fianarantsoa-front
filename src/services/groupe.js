import axios from "../utils/axios";

export const getGroupes = async () => {
	return await axios.get("api/groupes");
};

export const addGroupe = async (data) => {
	return await axios.post("api/groupes", data);
};

export const editGroupe = async (id, data) => {
	return await axios.put(`api/groupes/${id}/`, data);
};

export const deleteGroupe = async (id) => {
	return await axios.delete(`api/groupes/${id}/`);
};
