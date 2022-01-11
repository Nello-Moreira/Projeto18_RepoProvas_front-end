import styled from 'styled-components';
import theme from '../../styles/theme';
import LabelStyle from './LabelStyle';

export default function TextInput({
	label,
	placeholder = 'input',
	value,
	valueModifier,
	type = 'text',
	required = true,
	loading = false,
}) {
	return (
		<>
			<LabelStyle htmlFor={label}>{label}</LabelStyle>
			<InputStyle
				id={label}
				name={label}
				value={value}
				onChange={valueModifier}
				placeholder={placeholder}
				type={type}
				required={required}
				$autoComplete={true}
				disabled={loading}
			/>
		</>
	);
}

const InputStyle = styled.input`
	font-size: 1rem;
	color: ${theme.input.text};
	width: 100%;
	padding: 0.5rem 0.5rem;
	margin-top: 0.2rem;
	background-color: ${theme.input.background};
	border: 1px solid ${theme.input.border};
	border-radius: 5px;
	outline: none;

	::placeholder {
		color: ${theme.input.placeholder};
	}

	:disabled {
		color: ${theme.input.loadingText};
		background-color: ${theme.input.loadingBackground};
	}
`;
