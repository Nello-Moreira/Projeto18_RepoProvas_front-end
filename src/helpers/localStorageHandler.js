const localStorageKey = 'repoprovas_user';

const saveUser = user => {
	localStorage.setItem(localStorageKey, JSON.stringify(user));
};

const loadUser = () => {
	const storedUser = localStorage.getItem(localStorageKey);
	return JSON.parse(storedUser);
};

const removeUser = () => {
	localStorage.removeItem(localStorageKey);
};

export { saveUser, loadUser, removeUser };
