import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../contexts/UserContext';
import { getSubjectExams } from '../services/dataAPI';
import CircleLoader from '../loaders/CircleLoader';
import PageWithHeader from '../components/containers/PageWithHeader';
import InformationTitle from '../components/containers/InformationTitle';
import SingleColumnPage from '../components/containers/SingleColumnPage';
import ExamsContainer from '../components/containers/ExamsContainer';

export default function Subject() {
	const { user } = useContext(UserContext);
	const { id } = useParams();
	const [exams, setExams] = useState(null);

	useEffect(() => {
		getSubjectExams({ subjectId: id, token: user.token })
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
					<ExamsContainer exams={exams} isSubjectPage={true} />
				) : (
					<p>Nenhuma prova encontrada </p>
				)}
			</SingleColumnPage>
		</PageWithHeader>
	);
}
