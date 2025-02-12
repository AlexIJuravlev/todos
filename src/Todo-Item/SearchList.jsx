export const SearchList = ({ searchTern, setSearchTern, setIsSort, isSort }) => (
	<li className='search'>
		<span className='searchByWord'>
			<input
				className='searchByWord_input'
				type='text'
				placeholder='Живой поиск...'
				value={searchTern}
				onChange={(e) => {
					setSearchTern(e.target.value);
				}}
			/>
		</span>
		<button
			className={isSort ? 'sort' : 'sortActive'}
			onClick={() => setIsSort(!isSort)}
		>
			От А до Я
		</button>
	</li>
);
