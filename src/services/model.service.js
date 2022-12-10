import axios from "../utils/axios";

export const getCategorieActivites = async () => {
	return await axios.get("api/categorie_activites");
};

export const addCategorieActivite = async (data) => {
	return await axios.post("api/categorie_activites", data);
};

export const editCategorieActivite = async (id, data) => {
	return await axios.put(`api/categorie_activites/${id}/`, data);
};

export const deleteCategorieActivite = async (id) => {
	return await axios.delete(`api/categorie_activites/${id}/`);
};
