import './TodoItem.css'
import { NavLink } from 'react-router-dom';


export const BtnBack = () => (
	<NavLink to='/'>
		<button className='backBtn'>Назад</button>
	</NavLink>
);
