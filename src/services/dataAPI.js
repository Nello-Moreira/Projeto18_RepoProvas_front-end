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

export {
	postSignUp,
	postLogin,
	checkToken,
	postLogout,
	getAllCourses,
	getSubjects,
	getProfessors,
};
