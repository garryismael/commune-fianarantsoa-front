import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/auth';
import Layout from './Layout';

const Guard = () => {
	const [location, token] = useAuth();
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