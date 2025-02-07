import { useEffect, useState } from "react";


export const useGetTask = (refreshFlag) => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		fetch('http://localhost:3004/todos')
			.then((loaded) => loaded.json())
			.then((loadedTodos) => {
				setTodos(loadedTodos);
			})
			.catch((error) => console.error('Ошибка в получение данных', error))
			.finally(() => setIsLoading(false));
	}, [refreshFlag]);

	return {
		todos,
		isLoading
	}
};
