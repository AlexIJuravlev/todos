import { useState, useEffect } from 'react';
import './index.css';

export const App = () => {
	const [todos, setTodos] = useState([])

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((loaded) => loaded.json())
			.then((loadedTodos) => {
				setTodos(loadedTodos)
			})
	}, []);

	const todoListId = todos.filter((todo) => todo.userId === 1)
	const userTodoList = todoListId.map(({ id, title, completed }) => (
		<div className='todos' key={id}>
			<div className='todos__task'>
				<span className='todos__taskNumber'>{id}</span>
				<span className='todos__title'> - {title}</span>
				<input type='checkbox' checked={completed} />
			</div>
		</div>
	));

	return (
		<>
			<div className='main'>{userTodoList}</div>
		</>
	);
};
