import axios from "../utils/axios";

export const getCategorieActivites = async () => {
	return await axios.get("categorie_activites");
};

export const addCategorieActivite = async (data) => {
	return await axios.post("categorie_activites", data);
};

export const editCategorieActivite = async (id, data) => {
	return await axios.put(`categorie_activites/${id}/`, data);
};

export const deleteCategorieActivite = async (id) => {
	return await axios.delete(`categorie_activites/${id}/`);
};
