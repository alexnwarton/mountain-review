import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const SearchCard = ({ resort, averageRating }) => {
	const [value, setValue] = useState(3);

	// const averageRating = (resort) => {
	// 	let sum = 0;
	// 	let counter = 0;
	// 	resort.reviews.forEach((review) => {
	// 		sum += review.rating
	// 		counter++;
	// 	})
	// 	return (sum / counter);
	// }

	// useEffect(() => {
	// 	const findAverage = () => {
	// 		const reviewNum = averageRating(resort);
	// 		setValue(reviewNum);
	// 	}
	// 	findAverage()
	// }, [])

	return (
		<Box sx={{
			width:1100,
			height:300,
			backgroundColor:'white',
			margin: 'auto'
		}}
		className='search-card'>
			<Link className='search-link' to={`/resorts/${resort.id}`}>
				<img className='search-image' src={resort.img_url} alt={resort.name}/>
				<div className='card-data'>
					<h2 className='search-name'>{resort.name}</h2>
					<Rating
						name='rating'
						value={value}
						readOnly
					/>
					<p className='search-description'>{resort.description}</p>
				</div>
			</Link>
		</Box>
	)
}

export default SearchCard;