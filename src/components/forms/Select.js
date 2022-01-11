import { useEffect, useState } from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import LabelStyle from './LabelStyle';

export default function Select({
	label,
	loading,
	APIFunction,
	setSelectedValue,
}) {
	const [options, setOptions] = useState([]);

	useEffect(() => {
		APIFunction()
			.then(response => {
				const nullOption = { id: null, name: 'Opção' };
				setOptions([nullOption, ...response.data]);
			})
			.catch(error => {
				if (error.message === 'Network Error') {
					return alert('O servidor está fora do ar');
				}

				alert(`Não foi possivel carregar: ${label}`);
			});
	}, [APIFunction]);

	return (
		<>
			<LabelStyle htmlFor={label}>{label}</LabelStyle>
			<SelectStyle
				name={label}
				id={label}
				disabled={loading}
				onChange={event => setSelectedValue(Number(event.target.value))}
			>
				{options.map(option => (
					<option value={option.id}>{option.name}</option>
				))}
			</SelectStyle>
		</>
	);
}

const SelectStyle = styled.select`
	font-size: 1rem;
	color: ${theme.input.text};
	width: 100%;
	padding: 0.5rem 0.5rem;
	margin-top: 0.2rem;
	background-color: ${theme.input.background};
	border: 1px solid ${theme.input.border};
	border-radius: 5px;
	outline: none;

	:disabled {
		color: ${theme.input.loadingText};
		background-color: ${theme.input.loadingBackground};
	}
`;
