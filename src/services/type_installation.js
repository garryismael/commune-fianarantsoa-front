import axios from "../utils/axios";

export const getTypeInstallation = async () => {
	return await axios.get("typeInstallation");
};

export const addTypeInstallation = async (data) => {
	return await axios.post("typeInstallation", data);
};

export const editTypeInstallation = async (id, data) => {
	return await axios.put(`typeInstallation/${id}/`, data);
};

export const deleteTypeInstallation = async (id) => {
	return await axios.delete(`typeInstallation/${id}/`);
};
