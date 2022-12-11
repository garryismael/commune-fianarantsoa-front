import axios from "../utils/axios";

export const getTypeInstallation = async () => {
	return await axios.get("type_installations");
};

export const addTypeInstallation = async (data) => {
	return await axios.post("type_installations", data);
};

export const editTypeInstallation = async (id, data) => {
	return await axios.put(`type_installations/${id}/`, data);
};

export const deleteTypeInstallation = async (id) => {
	return await axios.delete(`type_installations/${id}/`);
};
