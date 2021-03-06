import InformationTitle from './InformationTitle';
import InformationContainer from './InformationContainer';
import routes from '../../routes/routes';
import { useNavigate } from 'react-router-dom';
import CategoryTitle from '../CategoryTitle';

export default function SubjectsContainer({ subjects }) {
	const navigate = useNavigate();
	const seasons = {};

	if (subjects.length > 0) {
		subjects.forEach(subject => {
			if (seasons[subject.season]) {
				return seasons[subject.season].push(subject);
			}
			seasons[subject.season] = [subject];
		});
	}

	return (
		<div>
			<InformationTitle
				firstColumn={'Disciplinas'}
				secondColumn={'Provas'}
			/>

			{subjects.length > 0 ? (
				Object.keys(seasons).map((season, i) => (
					<section key={i}>
						<CategoryTitle key={season}>
							Período: {season}
						</CategoryTitle>

						{seasons[season].map(subject => (
							<InformationContainer
								firstColumn={subject.name}
								secondColumn={subject.examsQuantity}
								onClick={() =>
									navigate(
										routes.subject.replace(
											':id',
											subject.id
										)
									)
								}
								key={subject.id}
							/>
						))}
					</section>
				))
			) : (
				<p>Nenhuma disciplina encontrada</p>
			)}
		</div>
	);
}
