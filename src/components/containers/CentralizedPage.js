import styled from 'styled-components';

const CentralizedPage = styled.div`
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
`;

export default CentralizedPage;
