import axios from "../utils/axios";

export const getZones = async () => {
	return await axios.get("zones");
};

export const addZone = async (data) => {
	return await axios.post("zones", data);
};

export const editZone = async (id, data) => {
	return await axios.put(`zones/${id}/`, data);
};

export const deleteZone = async (id) => {
	return await axios.delete(`zones/${id}/`);
};
