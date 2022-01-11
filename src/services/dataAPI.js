import axios from 'axios';

const axiosBase = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
});

const setAuthorization = token => {
	return {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
};

const postSignUp = signUpBody => axiosBase.post('/sign-up', signUpBody);

const postLogin = loginBody => axiosBase.post('/login', loginBody);

const checkToken = token => axiosBase.post('/session', token);

const postLogout = token =>
	axiosBase.post('/logout', {}, setAuthorization(token));

const getAllCourses = token =>
	axiosBase.get('/courses', setAuthorization(token));

const getSubjects = ({ id, token }) =>
	axiosBase.get(`/courses/${id}/subjects`, setAuthorization(token));

const getProfessors = ({ id, token }) =>
	axiosBase.get(`/courses/${id}/professors`, setAuthorization(token));

const getSubjectExams = ({ subjectId, token }) =>
	axiosBase.get(`/subjects/${subjectId}`, setAuthorization(token));

const getProfessorExams = ({ professorId, token }) =>
	axiosBase.get(`/professors/${professorId}`, setAuthorization(token));

const getExamsCategories = token =>
	axiosBase.get('/exams/categories', setAuthorization(token));

const postExam = ({ exam, token }) =>
	axiosBase.post('/exams', exam, setAuthorization(token));

export {
	postSignUp,
	postLogin,
	checkToken,
	postLogout,
	getAllCourses,
	getSubjects,
	getProfessors,
	getSubjectExams,
	getProfessorExams,
	getExamsCategories,
	postExam,
};
