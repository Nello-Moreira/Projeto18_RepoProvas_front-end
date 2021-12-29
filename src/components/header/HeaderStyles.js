import styled from 'styled-components';
import theme from '../../styles/theme';

const HeaderContainer = styled.div`
	width: 100%;
	height: var(--header-height);
	padding: 0 30px 0 15px;
	background-color: ${theme.cover.background};
	display: flex;
	align-items: center;
	justify-content: flex-start;
	position: fixed;
	top: 0;
	z-index: 10;

	*:first-child {
		margin-right: 15px;
	}
`;

const PageCover = styled.div`
	width: 100vw;
	height: 100vh;
	position: absolute;
	top: 0;
	left: ${({ menuClosed }) => (menuClosed ? '-100vw' : '0px')}; ;
`;

const Menu = styled.div`
	--menu-width: 20vw;
	font-size: 1rem;
	color: ${theme.menuBar.text};
	height: calc(100vh - var(--header-height));
	width: var(--menu-width);
	min-width: 250px;
	padding: 20px 20px 0 15px;
	background-color: ${theme.menuBar.background};
	border-right: 1px solid ${theme.cover.background};
	position: absolute;
	top: var(--header-height);
	left: ${({ menuClosed }) =>
		menuClosed ? 'calc(0px - var(--menu-width))' : '0px'};
	transition: left 0.5s;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;

	a {
		color: inherit;
		margin-bottom: 1rem;
	}

	a:visited {
		color: inherit;
	}

	*:nth-child(n + 2) {
		margin-left: 1rem;
	}

	@media (max-width: 500px) {
		--menu-width: 100vw;
	}
`;

const MenuHeader = styled.h2`
	font-size: 1.2rem;
	margin-bottom: 1rem;
`;

const LogoutButton = styled.button`
	font-size: inherit;
	color: inherit;
	text-decoration: underline;
	background-color: transparent;
	border: none;
	padding: 0px;
	cursor: pointer;
`;

export { HeaderContainer, PageCover, Menu, MenuHeader, LogoutButton };
