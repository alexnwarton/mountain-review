import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getOneResort } from '../services/resorts';

const ResortDetail = ({ resorts, user }) => {
	const [resort, setResort] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		const fetchResort = async () => {
			const selectResort = await getOneResort(id);
			setResort(selectResort);
		}	
		fetchResort();
	}, [id])

	return (
		<div>
			<h3>{resort.name}</h3>
			<h4>{resort.city}, {resort.state}, {resort.country}</h4>
			<h1>PUT STAR RATINGS HERE!!!!</h1>
			<p>{resort.description}</p>
			<img src={resort.img_url} alt={resort.name} />
			<div className='review'>
				{ resort.reviews ?
					resort.reviews.map((review, key) => (
						<div key={key}>
							<h5>{review.title}</h5>
							<h2>{review.rating}</h2>
							<p>{review.body}</p>
						</div>
					)) :
					<p>Loading</p>
				}
			</div>
			<Link className='add-review-button' to='/create-review'> 
				Add Review
			</Link>
		</div>
	)
}

export default ResortDetail;