import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../contexts/UserContext';
import { getProfessorExams } from '../services/dataAPI';
import CircleLoader from '../components/loaders/CircleLoader';
import PageWithHeader from '../components/containers/PageWithHeader';
import InformationTitle from '../components/containers/InformationTitle';
import SingleColumnPage from '../components/containers/SingleColumnPage';
import ExamsContainer from '../components/containers/ExamsContainer';

export default function Teacher() {
	const { user } = useContext(UserContext);
	const { id } = useParams();
	const [exams, setExams] = useState(null);

	useEffect(() => {
		getProfessorExams({ professorId: id, token: user.token })
			.then(response => {
				setExams(response.data || []);
			})
			.catch(() => {});
	}, []);

	return !exams ? (
		<CircleLoader />
	) : (
		<PageWithHeader>
			<SingleColumnPage>
				<InformationTitle firstColumn='Provas' />

				{exams.length > 0 ? (
					<ExamsContainer exams={exams} isSubjectPage={false} />
				) : (
					<p>Nenhuma prova encontrada </p>
				)}
			</SingleColumnPage>
		</PageWithHeader>
	);
}
