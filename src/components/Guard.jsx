import { Navigate, useLocation } from 'react-router-dom';
import Layout from './Layout';

const Guard = () => {
	const location = useLocation();
	const token = localStorage.getItem("token");
	return token ? (
		<Layout />
	) : (
		<Navigate
			to='/login'
			replace
			state={{ from: location }}
		/>
	);
};

export default Guard;