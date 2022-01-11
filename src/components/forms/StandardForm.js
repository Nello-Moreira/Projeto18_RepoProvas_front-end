import styled from 'styled-components';
import theme from '../../styles/theme';

export default function StandardForm({ formLabel, onSubmit, children }) {
	return (
		<FormStyle onSubmit={onSubmit}>
			<FormLabel>{formLabel}</FormLabel>
			{children}
		</FormStyle>
	);
}

const FormStyle = styled.form`
	width: 50vw;
	margin-bottom: 50px;
	padding: 1.5rem 1rem;
	background-color: ${theme.main.background};
	border: 1px solid ${theme.form.border};
	border-radius: 10px;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;

	input,
	select {
		margin-bottom: 1rem;
	}

	@media (max-width: 1000px) {
		width: 70vw;
	}

	@media (max-width: 600px) {
		height: 100vh;
		width: 100vw;
		border-radius: 0px;
		border: none;
	}
`;

const FormLabel = styled.p`
	font-size: 2rem;
	color: ${theme.form.border};
	background-color: ${theme.main.background};
	position: absolute;
	top: -1rem;
	left: 15px;
	padding: 0 5px;

	@media (max-width: 600px) {
		position: initial;
	}
`;
