import { useNavigate, useParams } from 'react-router-dom';
import styles from './itemPage.module.css'
import { useEffect, useState } from 'react';
import { InputCheck, DeleteBtn, BtnBack } from '../Todo-Item';
import { useUpdateTask, useRemoveTask } from '../hooks';


export const ItemPage = () => {
	const [refreshFlag, setRefreshFlag] = useState(false);
	const refreshTask = () => setRefreshFlag(!refreshFlag);

	const { updateTaskUser } = useUpdateTask(refreshTask);
	const { removeTaskUser } = useRemoveTask(refreshTask);

	const { id } = useParams();
	const [todo, setTodo] = useState([])
	const navigate = useNavigate()

	useEffect(() => {
		fetch(`http://localhost:3004/todos/${id}`)
		.then((response) => {
			if(!response.ok){
				if(response.status === 404){
					navigate('/404');
					throw new Error(`Ошибка в получение данных: ${response.status}`)
				}
			}
			return response.json()
		})
		.then((data) => setTodo(data))
		.catch((error) => console.log(error))
	},[id, todo, navigate])

	if(!todo){
		return <div className={styles.loader}></div>;
	}

	return (
		<div>
			<li className={styles.todos}>
				<BtnBack/>
				<label > {todo.title} </label>
				<InputCheck
					completed={todo.completed}
					title={todo.title}
					updateTaskUser={updateTaskUser}
					id={id}
				/>
				<DeleteBtn removeTaskUser={removeTaskUser} id={id} />
			</li>
		</div>
	);
};
