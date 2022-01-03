import styled from 'styled-components';
import theme from '../../styles/theme';

const InformationContainerStyle = styled.div`
	font-size: 1rem;
	color: ${theme.informationContainer.text};
	width: 100%;
	margin-bottom: 10px;
	padding: 15px 25px;
	background-color: ${theme.informationContainer.background};
	border: 1px solid ${theme.informationContainer.border};
	border-radius: 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;

	span:last-child {
		margin-left: 5px;
	}
`;

export default InformationContainerStyle;
