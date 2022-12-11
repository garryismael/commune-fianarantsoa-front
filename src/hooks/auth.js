import { useLocation } from "react-router-dom";

const useAuth = () => {
    const location = useLocation();
	const token = localStorage.getItem("token");

    return [location, token];
};

export default useAuth;