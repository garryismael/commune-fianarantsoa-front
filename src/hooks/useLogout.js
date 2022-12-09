import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../redux/authSlice";
import { logout } from "../services/auth";

const useLogout = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const se_connecter = async () => {
		await logout();
		localStorage.removeItem("token");
		dispatch(setUser(null));
		navigate("/login");
	};

	return se_connecter;
};

export default useLogout;
