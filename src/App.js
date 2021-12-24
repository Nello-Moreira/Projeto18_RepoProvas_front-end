import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';

import GlobalStyle from './styles/GlobalStyles';

import UserContext from './contexts/UserContext';

import routes from './routes/routes';
import ProtectedRoute from './routes/ProtectedRoute';
import Home from './routes/Home';
import Login from './routes/Login';
import SignUp from './routes/SignUp';
import AllCourses from './routes/AllCourses';
import Course from './routes/Course';
import Teacher from './routes/Teacher';
import Subject from './routes/Subject';
import Exam from './routes/Exam';

export default function App() {
	const [user, setUser] = useState({
		name: null,
		token: null,
	});

	return (
		<>
			<GlobalStyle />
			<UserContext.Provider value={{ user, setUser }}>
				<BrowserRouter>
					<Routes>
						<Route path={routes.login} element={<Login />} />

						<Route path={routes.signUp} element={<SignUp />} />

						<Route
							path={routes.allCourses}
							element={
								<ProtectedRoute>
									<AllCourses />
								</ProtectedRoute>
							}
						/>

						<Route
							path={routes.course}
							element={
								<ProtectedRoute>
									<Course />
								</ProtectedRoute>
							}
						/>

						<Route
							path={routes.teacher}
							element={
								<ProtectedRoute>
									<Teacher />
								</ProtectedRoute>
							}
						/>

						<Route
							path={routes.subject}
							element={
								<ProtectedRoute>
									<Subject />
								</ProtectedRoute>
							}
						/>

						<Route
							path={routes.exam}
							element={
								<ProtectedRoute>
									<Exam />
								</ProtectedRoute>
							}
						/>

						<Route path={routes.home} element={<Home />} />

						<Route
							path='*'
							element={<Navigate to={routes.home} />}
						/>
					</Routes>
				</BrowserRouter>
			</UserContext.Provider>
		</>
	);
}
