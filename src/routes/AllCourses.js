import { useContext, useEffect, useState } from 'react';
import UserContext from '../contexts/UserContext';
import CircleLoader from '../components/loaders/CircleLoader';
import { getAllCourses } from '../services/dataAPI';
import PageWithHeader from '../components/containers/PageWithHeader';
import InformationTitle from '../components/containers/InformationTitle';
import SingleColumnPage from '../components/containers/SingleColumnPage';
import AllCoursesContent from '../components/AllCoursesContent';

export default function AllCourses() {
	const { user } = useContext(UserContext);
	const [firstLoad, setFirstLoad] = useState(true);
	const [courses, setCourses] = useState(null);

	useEffect(() => {
		getAllCourses(user.token)
			.then(response => {
				setCourses(response.data);
				setFirstLoad(false);
			})
			.catch(() => {
				alert(
					'Não foi possível carregar os cursos. Por favor, tente novamente'
				);
				setFirstLoad(false);
			});
	}, []);

	return (
		<>
			{firstLoad ? (
				<CircleLoader />
			) : (
				<PageWithHeader>
					<SingleColumnPage>
						<InformationTitle firstColumn='Curso' />
						<AllCoursesContent courses={courses} />
					</SingleColumnPage>
				</PageWithHeader>
			)}
		</>
	);
}
