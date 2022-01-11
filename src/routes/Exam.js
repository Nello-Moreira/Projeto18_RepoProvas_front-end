import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageWithHeader from '../components/containers/PageWithHeader';
import Select from '../components/forms/Select';
import StandardForm from '../components/forms/StandardForm';
import SubmitButton from '../components/forms/SubmitButton';
import TextInput from '../components/forms/TextInput';
import UserContext from '../contexts/UserContext';
import {
	getAllCourses,
	getExamsCategories,
	getProfessors,
	getSubjects,
	postExam,
} from '../services/dataAPI';
import routes from './routes';

export default function Exam() {
	const { user } = useContext(UserContext);
	const navigate = useNavigate();

	const [loading, setLoading] = useState(false);
	const [courseId, setCourseId] = useState(null);
	const [inputs, setInputs] = useState({
		name: '',
		categoryId: 0,
		professorId: 0,
		subjectId: 0,
		fileUrl: '',
	});

	function formSubmit(event) {
		event.preventDefault();
		console.log(inputs);
		setLoading(true);

		if (inputs.name.length === 0) {
			setLoading(false);
			return alert('É necessário fornecer um nome para a prova');
		}
		if (inputs.fileUrl.length === 0) {
			setLoading(false);
			return alert('É necessário fornecer um url com a prova');
		}
		if (!inputs.categoryId || !inputs.professorId || !inputs.subjectId) {
			setLoading(false);
			return alert('Selecione todos os campos');
		}

		postExam({ exam: inputs, token: user.token })
			.then(response => {
				alert('Prova adicionada');
				navigate(routes.allCourses);
			})
			.catch(error => {
				alert(
					'Houve um erro ao salvar a prova. Por favor, tente novamente.'
				);
				setLoading(false);
			});
	}

	return (
		<PageWithHeader margin={'calc(var(--header-height) + 1.5rem) 0 0'}>
			<StandardForm
				formLabel='Nova prova'
				onSubmit={formSubmit}
				margin='0px'
			>
				<TextInput
					label='Nome'
					placeholder='2020.1'
					value={inputs.name}
					valueModifier={event =>
						loading
							? null
							: setInputs({
									...inputs,
									name: event.target.value,
							  })
					}
					type='text'
					loading={loading}
				/>

				<TextInput
					label='Url'
					placeholder='Url do arquivo'
					value={inputs.fileUrl}
					valueModifier={event =>
						loading
							? null
							: setInputs({
									...inputs,
									fileUrl: event.target.value,
							  })
					}
					type='url'
					loading={loading}
				/>

				<Select
					label='Categoria'
					loading={loading}
					APIFunction={() => getExamsCategories(user.token)}
					setSelectedValue={id =>
						setInputs({ ...inputs, categoryId: id })
					}
				/>

				<Select
					label='Curso'
					loading={loading}
					APIFunction={() => getAllCourses(user.token)}
					setSelectedValue={setCourseId}
				/>

				{courseId ? (
					<>
						<Select
							label='Disciplina'
							loading={loading}
							APIFunction={() =>
								getSubjects({
									id: courseId,
									token: user.token,
								})
							}
							setSelectedValue={id =>
								setInputs({ ...inputs, subjectId: id })
							}
						/>
						<Select
							label='Professor'
							loading={loading}
							APIFunction={() =>
								getProfessors({
									id: courseId,
									token: user.token,
								})
							}
							setSelectedValue={id =>
								setInputs({ ...inputs, professorId: id })
							}
						/>
					</>
				) : (
					''
				)}

				<SubmitButton loading={loading} type='submit'>
					Entrar
				</SubmitButton>
			</StandardForm>
		</PageWithHeader>
	);
}
