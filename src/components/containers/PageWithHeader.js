import styled from 'styled-components';
import Header from '../header/Header';

export default function PageWithHeader({ margin, children }) {
	return (
		<>
			<Header />
			<PageContentContainer margin={margin}>
				{children}
			</PageContentContainer>
		</>
	);
}

const PageContentContainer = styled.div`
	margin: ${({ margin }) => margin || 'var(--header-height)'};
	display: flex;
	flex-direction: column;
	align-items: center;
`;
