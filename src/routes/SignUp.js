import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import routes from '../routes/routes';
import CentralizedPage from '../components/containers/CentralizedPage';
import StandardForm from '../components/forms/StandardForm';
import SubmitButton from '../components/forms/SubmitButton';
import TextInput from '../components/forms/TextInput';
import { postSignUp } from '../services/dataAPI';
import { signUpErrors } from '../services/responseErrors';

export default function SignUp() {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const [inputs, setInputs] = useState({
		name: '',
		email: '',
		password: '',
		passwordConfirm: '',
	});

	function formSubmit(event) {
		event.preventDefault();

		if (loading) {
			return;
		}

		setLoading(true);

		if (inputs.password !== inputs.passwordConfirm) {
			alert(
				'As senhas inseridas não conferem. Por favor, insira as senhas novamente.'
			);
			setInputs({ ...inputs, password: '', passwordConfirm: '' });
			setLoading(false);
			return;
		}

		if (
			!inputs.name ||
			!inputs.email ||
			!inputs.password ||
			!inputs.passwordConfirm
		) {
			alert('Preencha todos os campos');
			setLoading(false);
			return;
		}

		postSignUp({
			name: inputs.name,
			email: inputs.email,
			password: inputs.password,
		})
			.then(response => {
				alert('Usuário cadastrado com sucesso.');
				navigate(routes.login);
				setLoading(false);
			})
			.catch(error => {
				alert(signUpErrors(error));
				setLoading(false);
			});
	}

	return (
		<CentralizedPage>
			<StandardForm formLabel='Cadastro' onSubmit={formSubmit}>
				<TextInput
					label='Nome'
					placeholder='Nome'
					value={inputs.name}
					valueModifier={event =>
						loading
							? null
							: setInputs({ ...inputs, name: event.target.value })
					}
					loading={loading}
				/>

				<TextInput
					label='Email'
					placeholder='exemplo@exemplo.com'
					value={inputs.email}
					valueModifier={event =>
						loading
							? null
							: setInputs({
									...inputs,
									email: event.target.value,
							  })
					}
					type='email'
					loading={loading}
				/>

				<TextInput
					label='Senha'
					placeholder='Senha'
					value={inputs.password}
					valueModifier={event =>
						loading
							? null
							: setInputs({
									...inputs,
									password: event.target.value,
							  })
					}
					type='password'
					loading={loading}
				/>

				<TextInput
					label='Confirme a senha'
					placeholder='Confirme a senha'
					value={inputs.passwordConfirm}
					valueModifier={event =>
						loading
							? null
							: setInputs({
									...inputs,
									passwordConfirm: event.target.value,
							  })
					}
					type='password'
					loading={loading}
				/>

				<SubmitButton loading={loading} type='submit'>
					Cadastrar
				</SubmitButton>
			</StandardForm>
		</CentralizedPage>
	);
}
