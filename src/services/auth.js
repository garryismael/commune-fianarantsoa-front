import axios from "../utils/axios";

export const login = async (email, mot_de_passe) => {
	return await axios.post("auth/login", {
		email,
		mot_de_passe,
	});
};

export const resetPassword = async (email) => {
	return await axios.post("auth/reset-password", {
		email,
	});
};

export const changePassword = async (token, mot_de_passe) => {
	return await axios.post(`auth/change-password/${token}`, {
		mot_de_passe,
	});
};

export const logout = async () => {
	return await axios.post(`auth/logout`);
};

export const me = async () => {
	return await axios.get(process.env.REACT_APP_AUTH_ME);
};
