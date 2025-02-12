export const Add = ({requestAddTask, valueTask, setValueTask}) =>{
	return (
		<form onSubmit={requestAddTask} className='form_addTask'>
			<input
				placeholder='Новая задача...'
				className='form_input'
				type='text'
				value={valueTask}
				onChange={({target}) => {
					setValueTask(target.value)
				}
			}
			></input>
			<button type='submit' className='form_btn'>
				Добавить задачу
			</button>
		</form>
	)
}
