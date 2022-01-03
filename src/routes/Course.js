import { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DoubleColumnPage from '../components/containers/DoubleColumnPage';
import InformationContainer from '../components/containers/InformationContainer';
import InformationTitle from '../components/containers/InformationTitle';
import PageWithHeader from '../components/containers/PageWithHeader';
import ProfessorsContainer from '../components/containers/ProfessorsContainer';
import SingleColumnPage from '../components/containers/SingleColumnPage';
import SubjectsContainer from '../components/containers/SubjectsContainer';
import UserContext from '../contexts/UserContext';
import CircleLoader from '../loaders/CircleLoader';
import { getProfessors, getSubjects } from '../services/dataAPI';
import routes from './routes';

export default function Course() {
	const { user } = useContext(UserContext);
	const { id } = useParams();
	const [subjects, setSubjects] = useState(null);
	const [professors, setProfessors] = useState(null);

	useEffect(() => {
		getSubjects({ id, token: user.token })
			.then(response => {
				setSubjects(response.data);
			})
			.catch(() => {});

		getProfessors({ id, token: user.token })
			.then(response => {
				setProfessors(response.data);
			})
			.catch(() => {});
	}, []);

	return (
		<>
			{!(subjects && professors) ? (
				<CircleLoader />
			) : (
				<PageWithHeader>
					<DoubleColumnPage>
						<SubjectsContainer subjects={subjects} />
						<ProfessorsContainer professors={professors} />
					</DoubleColumnPage>
				</PageWithHeader>
			)}
		</>
	);
}
