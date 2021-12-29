import { createGlobalStyle } from 'styled-components';
import './fonts.css';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
	:root {
		font-size: 20px;
		font-family: 'Roboto', sans-serif;
		--header-height: 50px;
		
		* {
			box-sizing: border-box;
		}
	}
	
	body #root{
		min-height: 100vh;
		background-color: ${theme.main.backgroundColor};
	}
`;

export default GlobalStyle;
