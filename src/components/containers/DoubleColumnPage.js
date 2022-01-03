import styled from 'styled-components';

const DoubleColumnPage = styled.div`
	width: 95%;
	display: flex;
	justify-content: space-between;

	> div {
		width: 48%;
	}

	@media (max-width: 900px) {
		flex-direction: column;

		> div {
			width: 100%;
			margin-bottom: 35px;
		}
	}
`;

export default DoubleColumnPage;
