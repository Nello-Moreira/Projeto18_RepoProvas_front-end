import styled from 'styled-components';

const SingleColumnPage = styled.div`
	width: 80%;

	> * {
		margin-bottom: 10px;
	}

	@media (max-width: 700px) {
		width: 95%;
	}
`;

export default SingleColumnPage;
