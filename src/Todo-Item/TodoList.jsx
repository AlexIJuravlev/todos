import { TodoItem } from "./TodoItem"

export const TodoList = ({ arr, updateTaskUser, removeTaskUser }) => (
	<ul>
		{arr.map((todo, index) => (
			<TodoItem
				key={todo.id}
				{...todo}
				index={index}
				updateTaskUser={updateTaskUser}
				removeTaskUser={removeTaskUser}
			/>
		))}
	</ul>
);
