export const InputCheck = ({ completed, title, updateTaskUser, id }) => (
	<input
		type='checkbox'
		checked={completed}
		onChange={(event) => {
			const updateTodo = { completed: event.target.checked, title };
			updateTaskUser(id, updateTodo);
		}}
	/>
);
