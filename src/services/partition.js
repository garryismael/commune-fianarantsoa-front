import axios from "../utils/axios";

export const getPartitions = async () => {
	return await axios.get("partitions");
};

export const addPartition = async (data) => {
	return await axios.post("partitions", data);
};

export const editPartition = async (id, data) => {
	return await axios.put(`partitions/${id}/`, data);
};

export const deletePartition = async (id) => {
	return await axios.delete(`partitions/${id}/`);
};
