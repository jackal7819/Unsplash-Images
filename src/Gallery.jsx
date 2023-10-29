import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useGlobalContext } from './Context';

const URL = import.meta.env.VITE_API_URL;
const KEY = import.meta.env.VITE_API_KEY;

const Gallery = () => {
	const { searchTerm } = useGlobalContext();
	
	const { data, isLoading, isError } = useQuery({
		queryKey: ['images', searchTerm],
		queryFn: async () => {
			const result = await axios.get(
				`${URL}client_id=${KEY}&query=${searchTerm}`
			);
			return result.data;
		},
	});

	if (isLoading) {
		return (
			<section className='image-container'>
				<h4 className='title'>Loading...</h4>
			</section>
		);
	}

	if (isError) {
		return (
			<section className='image-container'>
				<h4 className='title'>There was an error</h4>
			</section>
		);
	}

	if (data.results.length < 1) {
		return (
			<section className='image-container'>
				<h4 className='title'>No results found...</h4>
			</section>
		);
	}

	return (
		<section className='image-container'>
			{data.results.map((image) => (
				<img
					src={image?.urls?.regular}
					alt={image.alt_description}
					key={image.id}
					className='img'
				/>
			))}
		</section>
	);
};

export default Gallery;
