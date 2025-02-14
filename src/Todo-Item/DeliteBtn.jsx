import { NavLink } from "react-router-dom"

export const DeleteBtn = ({ removeTaskUser, id }) => (
	<NavLink to={'/'}>
		<button className='deleteBtn' onClick={() => removeTaskUser(id)}>
			Удалить
		</button>
	</NavLink>
);
