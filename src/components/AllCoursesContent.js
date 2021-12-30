import { useNavigate } from 'react-router-dom';
import routes from '../routes/routes';
import InformationContainer from './containers/InformationContainer';

export default function AllCoursesContent({ courses }) {
	const navigate = useNavigate();

	return (
		<>
			{courses ? (
				courses.map(course => (
					<InformationContainer
						firstColumn={course.name}
						onClick={() =>
							navigate(routes.course.replace(':id', course.id))
						}
						key={course.id}
					/>
				))
			) : (
				<p>Nenhum curso encontrado</p>
			)}
		</>
	);
}
