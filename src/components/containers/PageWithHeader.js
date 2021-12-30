import styled from 'styled-components';
import Header from '../header/Header';

export default function PageWithHeader({ children }) {
	return (
		<>
			<Header />
			<PageContentContainer>{children}</PageContentContainer>
		</>
	);
}

const PageContentContainer = styled.div`
	margin-top: var(--header-height);
	display: flex;
	flex-direction: column;
	align-items: center;
`;
