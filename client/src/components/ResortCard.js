import { Link } from 'react-router-dom';

const ResortCard = ({ resort }) => {
	return (
		<div className='resort-card'>
			<Link className='resort-link' to={`/resorts/${resort.id}`}>
				<img className='resort-image' src={resort.img_url} alt={resort.name}/>
				<p className='resort-name'>{resort.name}</p>
			</Link>
		</div>
	)
}

export default ResortCard;