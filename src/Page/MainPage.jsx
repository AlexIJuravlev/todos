import { useState } from 'react';
import '../index.css';
import { useGetTask, useAddTask } from '../hooks';
import { useFilterAndSort, Add, SearchList, TodoList } from '../Todo-Item';

export const MainPage = () => {
	const [refreshFlag, setRefreshFlag] = useState(false);
	const [isSort, setIsSort] = useState(true);
	const [searchTern, setSearchTern] = useState('');
	const refreshTask = () => setRefreshFlag(!refreshFlag);

	const { todos, isLoading } = useGetTask(refreshFlag);
	const { requestAddTask, valueTask, setValueTask } = useAddTask(refreshTask);
	const { filterTodos } = useFilterAndSort(todos, searchTern, isSort);

	return (
		<>
			<div className='main'>
				<Add
					requestAddTask={requestAddTask}
					valueTask={valueTask}
					setValueTask={setValueTask}
				/>
				<SearchList
					searchTern={searchTern}
					setSearchTern={setSearchTern}
					setIsSort={setIsSort}
					isSort={isSort}
				/>
				{isLoading ? (
					<div className='loader'></div>
				) : (
					<TodoList
						arr={filterTodos}
					/>
				)}
			</div>
		</>
	);
};
