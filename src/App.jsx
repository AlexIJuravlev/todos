import { useState } from 'react';
import './index.css';
import { useUpdateTask, useGetTask, useRemoveTask, useAddTask } from './hooks';
import { useFilterAndSort } from './Todo-Item';

export const App = () => {
	const [refreshFlag, setRefreshFlag] = useState(false);
	const [isSort, setIsSort] = useState(true);
	const [searchTern, setSearchTern] = useState('');
	const refreshTask = () => setRefreshFlag(!refreshFlag);


	const { todos, isLoading } = useGetTask(refreshFlag);
	const {updateTaskUser} = useUpdateTask(refreshTask);
	const {removeTaskUser} = useRemoveTask(refreshTask);
	const {requestAddTask, valueTask, setValueTask} = useAddTask(refreshTask);
	const { filterTodos } = useFilterAndSort(todos, searchTern, isSort);



	const userTodoList = filterTodos.map(({ id, title, completed }, index) => (
		<li className='todos' key={id}>
			<span className='todos__taskNumber'>{index + 1} </span>
			<label> {title} </label>
			<input
				type='checkbox'
				checked={completed}
				onChange={(event) => {
					const updateTodo = { completed: event.target.checked, title };
					updateTaskUser(id, updateTodo);
				}}
			/>
			<button className='deleteBtn' onClick={() => removeTaskUser(id)}>Удалить</button>
		</li>
	));

	const addNewTask = (
		<form onSubmit={requestAddTask} className='form_addTask'>
			<input
				placeholder='Новая задача...'
				className='form_input'
				type='text'
				value={valueTask}
				onChange={({ target }) => setValueTask(target.value)}
			></input>
			<button type='submit' className='form_btn'>
				Добавить задачу
			</button>
		</form>
	);

	return (
		<>
			<div className='main'>
				{addNewTask}
				<li className='search'>
					<span className='searchByWord'>
						<input
							className='searchByWord_input'
							type='text'
							placeholder='Живой поиск...'
							value={searchTern}
							onChange={(e) => {
								setSearchTern(e.target.value);
							}}
						/>
					</span>
					<button
						className={isSort ? 'sort' : 'sortActive'}
						onClick={() => setIsSort(!isSort)}
					>
						От А до Я
					</button>
				</li>
				{isLoading ? <div className='loader'></div> : userTodoList}
			</div>
		</>
	);
};
