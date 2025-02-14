import { NavLink } from "react-router-dom";
import './TodoItem.css'



export const TodoItem = ({ id, index, title }) => {
	return (
		<NavLink to={`/todos/${id}`} className='navLink'>
			<li className='todos' key={id}>
				<span className='todos__taskNumber'>{index + 1} </span>
				<label> {title} </label>
			</li>
		</NavLink>
	);
}
