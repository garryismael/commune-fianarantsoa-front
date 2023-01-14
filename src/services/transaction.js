import axios from "../utils/axios";

export const getTransactions = async (status = false) => {
	return await axios.get(`transactions/?status=${status}`);
};

export const getRecentsTransaction = async () => {
	return await axios.get("transactions/all/recents");
}

export const addTransaction = async (data) => {
	return await axios.post("transactions", data);
};

export const bulkUpdateTransaction = async (data) => {
	return await axios.put("transactions/bulkUpdate", data);
}

export const editTransaction = async (id, data) => {
	return await axios.put(`transactions/${id}/`, data);
};

export const deleteTransaction = async (id) => {
	return await axios.delete(`transactions/${id}/`);
};
