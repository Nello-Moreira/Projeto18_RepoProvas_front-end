import styled from 'styled-components';
import theme from '../../styles/theme';
import ThreeDotsLoader from '../loaders/ThreeDotsLoader';

export default function SubmitButton({ loading, otherProps, children }) {
	return (
		<ButtonStyle $loading={loading} {...otherProps}>
			{loading ? <ThreeDotsLoader /> : children}
		</ButtonStyle>
	);
}

const ButtonStyle = styled.button`
	font-size: 1rem;
	color: ${theme.button.text};
	padding: 0.7em 1rem;
	background-color: ${theme.button.background};
	border: none;
	border-radius: 5px;
	cursor: ${({ $loading }) => ($loading ? 'default' : 'pointer')};
`;
