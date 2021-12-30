import { useContext, useEffect, useState } from 'react';
import UserContext from '../contexts/UserContext';
import CircleLoader from '../loaders/CircleLoader';
import { getAllCourses } from '../services/dataAPI';
import PageWithHeader from '../components/containers/PageWithHeader';
import InformationTitle from '../components/containers/InformationTitle';
import SingleColumnPage from '../components/containers/SingleColumnPage';
import AllCoursesContent from '../components/AllCoursesContent';

export default function AllCourses() {
	const [firstLoad, setFirstLoad] = useState(true);
	const { user } = useContext(UserContext);

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
