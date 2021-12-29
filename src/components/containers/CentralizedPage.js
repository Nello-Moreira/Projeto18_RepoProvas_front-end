import styled from 'styled-components';
import theme from '../../styles/theme';

const CentralizedPage = styled.div`
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: ${({ flexDirection }) => flexDirection || 'column'};

	a {
		color: ${theme.input.label};
	}

	a:visited {
		color: ${theme.input.label};
	}
`;

export default CentralizedPage;
