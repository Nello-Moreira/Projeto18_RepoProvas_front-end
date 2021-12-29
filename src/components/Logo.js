import styled from 'styled-components';
import theme from '../styles/theme';

export default function Logo({ fontSize }) {
	return <LogoStyle fontSize={fontSize}>RepoProvas</LogoStyle>;
}

const LogoStyle = styled.h1`
	font-family: 'Pushster', cursive;
	font-size: ${({ fontSize }) => fontSize || '40px'};
	color: ${theme.cover.text};
`;
