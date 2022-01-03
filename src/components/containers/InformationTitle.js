import styled from 'styled-components';
import theme from '../../styles/theme';
import InformationContainerStyle from './InformationContainerStyle';

export default function InformationTitle({ firstColumn, secondColumn }) {
	return (
		<TitleContainer>
			<span>{firstColumn}</span>
			<span>{secondColumn}</span>
		</TitleContainer>
	);
}

const TitleContainer = styled(InformationContainerStyle)`
	font-size: 1.5rem;
	color: ${theme.informationTitle.text};
	margin-bottom: 10px;
	background-color: ${theme.informationTitle.background};
	border: none;
	border-bottom: 1px solid ${theme.informationTitle.border};
	border-radius: 0px;
	cursor: default;
`;
