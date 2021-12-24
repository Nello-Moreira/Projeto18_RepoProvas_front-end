import { createGlobalStyle } from 'styled-components';
import './fonts.css';

const GlobalStyle = createGlobalStyle`
	:root {
		background-color: #fff;
		font-family: 'Roboto', sans-serif;
		
		* {
			box-sizing: border-box;
		}
	}
`;

export default GlobalStyle;
