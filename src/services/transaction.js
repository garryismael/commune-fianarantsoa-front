import axios from "../utils/axios";

export const getTransactions = async () => {
	return await axios.get("transactions");
};

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
