import { useState } from 'react';
import GlobalStyle from './styles/GlobalStyles';
import UserContext from './contexts/UserContext';
import PagesRouter from './routes/PagesRouter';

export default function App() {
	const [user, setUser] = useState({
		name: null,
		token: null,
	});

	return (
		<>
			<GlobalStyle />
			<UserContext.Provider value={{ user, setUser }}>
				<PagesRouter />
			</UserContext.Provider>
		</>
	);
}
