export const TodoItem = ({ id, index, title, completed, updateTaskUser, removeTaskUser}) => (
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
		<button className='deleteBtn' onClick={() => removeTaskUser(id)}>
			Удалить
		</button>
	</li>
);
