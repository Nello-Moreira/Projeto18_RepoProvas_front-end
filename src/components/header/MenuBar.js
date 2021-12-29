import { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import routes from '../../routes/routes';
import { removeUser } from '../../helpers/localStorageHandler';
import { PageCover, Menu, MenuHeader, LogoutButton } from './HeaderStyles';
import { postLogout } from '../../services/dataAPI';

export default function MenuBar({ menuClosed, closeMenu }) {
	const { user, setUser } = useContext(UserContext);

	function logout() {
		postLogout(user.token)
			.then(() => {
				removeUser();
				setUser({});
			})
			.catch(() => {
				alert(
					'Algo deu errado ao realizar o logout. Por favor, tente novamente.'
				);
			});
	}

	return (
		<>
			<PageCover menuClosed={menuClosed} onClick={closeMenu} />
			<Menu menuClosed={menuClosed}>
				<MenuHeader>Olá, {user.name}</MenuHeader>
				<Link to={routes.allCourses}>Ver cursos</Link>
				<Link to={routes.exam}>Enviar uma prova</Link>
				<LogoutButton onClick={logout}>Sair</LogoutButton>
			</Menu>
		</>
	);
}
