import { useMemo } from "react";

export const useFilterAndSort = (todos, searchTern, isSort) => {
	const filterTodos = useMemo(() => {
		return [...todos]
			.filter((todo) => todo.title.toLowerCase().includes(searchTern.toLowerCase()))
			.sort((a, b) => {
				const compare = a.title.localeCompare(b.title);
				return isSort ? !compare : compare;
			});
	}, [todos, searchTern, isSort]);

	return {
		filterTodos,
	};
};
