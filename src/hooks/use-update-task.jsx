export const useUpdateTask = (refreshTask) => {
	const updateTaskUser = (id, value) => {
		fetch(`http://localhost:3004/todos/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(value),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log(response);
				refreshTask();
			})
			.catch((error) => console.error('Ошибка в получение данных', error));
	};

	return {
		updateTaskUser,
	};
};
