import { useNavigate } from 'react-router-dom';
import routes from '../../routes/routes';
import InformationContainer from './InformationContainer';
import InformationTitle from './InformationTitle';

export default function ProfessorsContainer({ professors }) {
	const navigate = useNavigate();

	return (
		<div>
			<InformationTitle
				firstColumn={'Professores'}
				secondColumn={'Provas'}
			/>

			{professors.length > 0 ? (
				professors.map(professor => (
					<InformationContainer
						firstColumn={professor.name}
						secondColumn={professor.examsQuantity}
						onClick={() =>
							navigate(
								routes.teacher.replace(':id', professor.id)
							)
						}
						key={professor.id}
					/>
				))
			) : (
				<p>Nenhum professor encontrado</p>
			)}
		</div>
	);
}
