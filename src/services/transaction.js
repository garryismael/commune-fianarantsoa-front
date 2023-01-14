import axios from "../utils/axios";

export const getTransactions = async (est_verifie = false) => {
	return await axios.get(`transactions/?est_verifie=${est_verifie}`);
};

export const getRecentsTransaction = async () => {
	return await axios.get("transactions/all/recents");
};

export const addTransaction = async (data) => {
	return await axios.post("transactions", data);
};

export const bulkUpdateTransaction = async (data, est_verifie = false) => {
	return await axios.put(
		`transactions/bulkUpdate?est_verifie=${est_verifie}`,
		data,
	);
};

export const editTransaction = async (id, data) => {
	return await axios.put(`transactions/${id}/`, data);
};

export const deleteTransaction = async (id) => {
	return await axios.delete(`transactions/${id}/`);
};
