import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CentralizedPage from '../components/containers/CentralizedPage';
import StandardForm from '../components/forms/StandardForm';
import SubmitButton from '../components/forms/SubmitButton';
import TextInput from '../components/forms/TextInput';
import CircleLoader from '../loaders/CircleLoader';
import routes from './routes';
import { postLogin, checkToken } from '../services/dataAPI';
import { loginErrors } from '../services/responseErrors';
import { saveUser, loadUser } from '../helpers/localStorageHandler';
import UserContext from '../contexts/UserContext';

export default function Login() {
	const navigate = useNavigate();
	const { setUser } = useContext(UserContext);
	const [firstLoad, setFirstLoad] = useState(true);
	const [loading, setLoading] = useState(false);
	const [inputs, setInputs] = useState({
		email: '',
		password: '',
	});

	useEffect(() => {
		const storedUser = loadUser();
		if (storedUser) {
			checkToken({ token: storedUser.token })
				.then(response => {
					setFirstLoad(false);

					if (response.data.valid) {
						setUser(storedUser);
						navigate(routes.allCourses);
					}
				})
				.catch(() => {
					setFirstLoad(false);
				});
		}
	}, []);

	function formSubmit(event) {
		event.preventDefault();

		if (loading) {
			return;
		}

		setLoading(true);

		if (!inputs.email || !inputs.password) {
			alert('Preencha todos os campos');
			setLoading(false);
			return;
		}

		postLogin(inputs)
			.then(response => {
				saveUser(response.data);
				setUser(response.data);
				navigate(routes.allCourses);
			})
			.catch(error => {
				alert(loginErrors(error));
				setLoading(false);
			});
	}

	return (
		<CentralizedPage>
			{firstLoad ? (
				<CircleLoader />
			) : (
				<StandardForm formLabel='Login' onSubmit={formSubmit}>
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

					<SubmitButton loading={loading} type='submit'>
						Entrar
					</SubmitButton>
				</StandardForm>
			)}
		</CentralizedPage>
	);
}
