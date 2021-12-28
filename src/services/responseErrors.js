import statusCode from './statusCodes';

const signUpErrors = error => {
	if (error.message === 'Network Error') {
		return 'O servidor está fora do ar';
	}

	const responseMessages = {};
	responseMessages[statusCode.badRequest] =
		'Preencha todos os campos corretamente';
	responseMessages[statusCode.conflict] = 'Este e-mail já está em uso';

	if (!responseMessages[error.response.status]) {
		return 'Houve um erro ao realizar o cadastro. Por favor, tente novamente.';
	}
	return responseMessages[error.response.status];
};

const loginErrors = error => {
	if (error.message === 'Network Error') {
		return 'O servidor está fora do ar';
	}

	const responseMessages = {};
	responseMessages[statusCode.badRequest] =
		'Preencha todos os campos corretamente';
	responseMessages[statusCode.notFound] = 'E-mail ou senha incorreto';

	if (!responseMessages[error.response.status]) {
		return 'Houve um erro ao realizar o login. Por favor, tente novamente.';
	}
	return responseMessages[error.response.status];
};

export { signUpErrors, loginErrors };
