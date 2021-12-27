import styled from 'styled-components';
import theme from '../../styles/theme';

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
				$loading={loading}
				$autoComplete={true}
			/>
		</>
	);
}

const LabelStyle = styled.label`
	color: ${theme.input.label};
	width: 100%;
`;

const InputStyle = styled.input`
	font-size: 1rem;
	color: ${({ $loading }) =>
		$loading ? theme.input.loadingText : theme.input.text};
	width: 100%;
	padding: 0.5rem 0.5rem;
	margin-top: 0.2rem;
	background-color: ${({ $loading }) =>
		$loading ? theme.input.loadingBackground : theme.input.background};
	border: 1px solid ${theme.input.border};
	border-radius: 5px;
	outline: none;

	::placeholder {
		color: ${theme.input.placeholder};
	}

	:focus {
		color: ${({ $loading }) =>
			$loading ? 'transparent' : theme.input.text};
		text-shadow: ${({ $loading }) =>
			$loading ? `0px 0px 0px ${theme.input.loadingText}` : 'none'};
	}
`;
