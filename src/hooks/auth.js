import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { changePassword, resetPassword } from "../services/auth";

const useAuth = () => {
	const location = useLocation();
	const user = useSelector((state) => state.auth.user);

	return [location, user];
};

export const useResetPassword = () => {
	const [email, setEmail] = useState("");

	const handleSubmit = async () => {
		await resetPassword(email);
	};
	return [email, setEmail, handleSubmit];
};

export const useChangePassword = () => {
    const params = useParams();
    
	const [mot_de_passe, setMot_de_passe] = useState("");
	const handleSubmit = async () => {
		await changePassword(params.token, mot_de_passe);
	};
	return [mot_de_passe, setMot_de_passe, handleSubmit];
};

export default useAuth;
