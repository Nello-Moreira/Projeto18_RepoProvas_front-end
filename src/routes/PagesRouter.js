import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import routes from './routes';
import ProtectedRoute from './ProtectedRoute';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import AllCourses from './AllCourses';
import Course from './Course';
import Teacher from './Teacher';
import Subject from './Subject';
import Exam from './Exam';

export default function PagesRouter() {
	return (
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

				<Route path='*' element={<Navigate to={routes.home} />} />
			</Routes>
		</BrowserRouter>
	);
}
