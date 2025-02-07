export const useRemoveTask = (refreshTask) => {
	const removeTaskUser = (id) => {
		fetch(`http://localhost:3004/todos/${id}`, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' },
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log(response);
				refreshTask();
			})
			.catch((error) => console.error('Ошибка в получение данных', error));
	};

	return {
		removeTaskUser,
	};
};
