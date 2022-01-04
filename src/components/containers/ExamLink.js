import styled from 'styled-components';
import theme from '../../styles/theme';

export default function ExamLink({
	name,
	fileUrl = '#',
	secondaryInformation,
}) {
	return (
		<ExamLinkStyle href={fileUrl} target='_blank'>
			<span>{name}</span>
			<span>{secondaryInformation}</span>
		</ExamLinkStyle>
	);
}

const ExamLinkStyle = styled.a`
	font-size: 1rem;
	color: ${theme.informationContainer.text};
	text-decoration: none;
	width: 100%;
	margin-bottom: 10px;
	padding: 15px 25px;
	background-color: ${theme.informationContainer.background};
	border: 1px solid ${theme.informationContainer.border};
	border-radius: 20px;
	display: flex;
	flex-direction: column;
	cursor: pointer;

	span:first-child {
		margin-bottom: 1rem;
	}
`;
