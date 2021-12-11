import { Link } from 'react-router-dom';

const ResortCard = ({ resort }) => {
	return (
		<div className='resort-card'>
			<Link to={`/resorts/${resort.id}`}>
				<img src={resort.img_url} alt={resort.name}/>
				<p>{resort.name}</p>
			</Link>
		</div>
	)
}

export default ResortCard;