import { useGlobalContext } from './Context';

const SearchForm = () => {
	const { setSearchTerm } = useGlobalContext();

	const handleSubmit = (event) => {
		event.preventDefault();
		const searchValue = event.target.elements.search.value;
		if (!searchValue) {
			return;
		}
		setSearchTerm(searchValue);
	};

	return (
		<section>
			<h1 className='title'>unsplash images</h1>
			<form className='search-form' onSubmit={handleSubmit}>
				<input
					type='text'
					name='search'
					placeholder='Search...'
					className='form-input search-input'
				/>
				<button type='submit' className='btn'>
					search
				</button>
			</form>
		</section>
	);
};

export default SearchForm;
