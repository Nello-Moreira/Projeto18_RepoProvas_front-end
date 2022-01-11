import sortAlphabetically from '../../helpers/sort';
import CategoryTitle from '../CategoryTitle';
import ExamLink from './ExamLink';

export default function ExamsContainer({ exams, isSubjectPage }) {
	const categories = {};

	exams.forEach(exam => {
		if (categories[exam.category]) {
			return categories[exam.category].push(exam);
		}
		categories[exam.category] = [exam];
	});

	return Object.keys(categories)
		.sort(sortAlphabetically)
		.map(category => (
			<section key={category}>
				<CategoryTitle key={category}>{category}</CategoryTitle>

				{categories[category].map(exam => (
					<ExamLink
						name={exam.name}
						fileUrl={exam.fileUrl}
						secondaryInformation={
							isSubjectPage
								? `Professor: ${exam.professor}`
								: `Disciplina: ${exam.subject}`
						}
						key={exam.id}
					/>
				))}
			</section>
		));
}
