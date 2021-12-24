import styled from 'styled-components';
import { Link } from 'react-router-dom';
import exam from '../assets/exam.png';
import theme from '../styles/theme';
import routes from './routes';
import Logo from '../components/Logo';

export default function Home() {
	return (
		<HomeCover>
			<LogoContainer>
				<Logo fontSize='90px' />
				<p>O repositório de provas capaz de salvar sua graduação!</p>

				<ActionsContainer>
					<Link to={routes.login}>Entrar</Link>
					<Link to={routes.signUp}>Cadastrar</Link>
				</ActionsContainer>
			</LogoContainer>
			<CoverImage src={exam} alt='' />
		</HomeCover>
	);
}

const HomeCover = styled.div`
	height: 100vh;
	width: 100vw;
	padding: 30px;
	background-color: ${theme.cover.backgroundColor};
	display: flex;
	align-items: center;
	justify-content: center;
`;

const LogoContainer = styled.div`
	font-size: 25px;
	color: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;

	p {
		text-align: center;
		margin-top: 50px;
	}
`;

const ActionsContainer = styled.div`
	margin-top: 50px;
	display: flex;
	align-items: center;
	justify-content: center;

	a:first-child {
		margin-right: 50px;
	}

	a:visited {
		color: inherit;
	}
`;

const CoverImage = styled.img`
	margin-left: 10vw;

	@media (max-width: 750px) {
		display: none;
	}
`;
