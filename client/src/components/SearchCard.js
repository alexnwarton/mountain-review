import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
import '../assets/css/SearchCard.css'

const SearchCard = ({ resort }) => {
	const value = Math.floor(Math.random() * 5);

	return (
		<Box sx={{
			width:1100,
			height:300,
			backgroundColor:'white',
			margin: 'auto',
			marginBottom: '15%'
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