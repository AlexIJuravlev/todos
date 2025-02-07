import { useState } from 'react';

export const useAddTask = (refreshTask) => {
	const [valueTask, setValueTask] = useState('');

	const requestAddTask = (event) => {
		event.preventDefault();

		fetch('http://localhost:3004/todos', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				title: valueTask,
				completed: false,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log(`Задача ${valueTask} добавлена`, response);
				refreshTask();
				setValueTask('');
			})
			.catch((error) => console.error('Ошибка в получение данных', error));
	};

	return {
		requestAddTask,
		valueTask,
		setValueTask,
	};
};
