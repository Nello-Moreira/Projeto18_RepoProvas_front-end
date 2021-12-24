import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import UserContext from '../contexts/UserContext';

import routes from './routes';

export default function ProtectedRoute({ children }) {
	const { user } = useContext(UserContext);

	if (!user.token) {
		return <Navigate to={routes.home} />;
	}

	return children;
}
