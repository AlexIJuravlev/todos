import './index.css';
import { MainPage, ItemPage, ErrorLonding } from './Page';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='todos/:id' element={<ItemPage />} />
				<Route path='*' element={<ErrorLonding />} />
			</Routes>
		</>
	);
};
