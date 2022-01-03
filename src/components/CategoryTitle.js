import styled from 'styled-components';
import theme from '../styles/theme';

const CategoryTitle = styled.h3`
	font-size: 1.2rem;
	color: ${theme.categoryTitle.text};
	padding: 15px 25px;
	background-color: ${theme.categoryTitle.background};
`;

export default CategoryTitle;
