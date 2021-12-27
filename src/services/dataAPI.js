import axios from 'axios';

const axiosBase = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
});

const postSignUp = signUpBody => axiosBase.post('/sign-up', signUpBody);

export { postSignUp };
