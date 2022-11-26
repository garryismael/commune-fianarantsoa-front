import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import Layout from './Layout';

const Guard = () => {
	const location = useLocation();
	const user = useSelector((state) => state.auth.user);
	return user !== null ? (
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