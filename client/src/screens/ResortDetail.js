import Rating from '@mui/material/Rating';
import { Switch, Route, Link, useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { createReview, getOneResort } from '../services/resorts';
import { updateReview, deleteReview } from '../services/reviews';
import CreateReview from '../screens/CreateReview';
import EditReview from '../screens/EditReview';
import '../assets/css/ResortDetail.css';

const ResortDetail = ({ user, routePath, setPath }) => {
	const [resort, setResort] = useState([]);
	const [value, setValue] = useState(0);
	const { id } = useParams();
	const history = useHistory();

	useEffect(() => {
		const fetchResort = async () => {
			const selectResort = await getOneResort(id);
			setResort(selectResort);
			averageRating(selectResort)
		}	
		setPath('/resorts/:id')
		fetchResort();
	}, [id, setPath])

	// right now this redirects to main resorts page.
	// try to have it redirect to the resort detail page while still loading all the info.
	const handleCreateReview = async (resortId, formData) => {
		const newReview = await createReview(resortId, formData);
		setResort((prevState) => [prevState, newReview]);
		history.push(`/resorts`);
	}

	const handleUpdateReview = async (resortId, reviewId, formData) => {
		const updatedReview = await updateReview(resortId, reviewId, formData);
		setResort((prevState) => [prevState, updatedReview]);
		history.push(`/resorts`);
	}

	const handleDeleteReview = async (resortId, reviewId) => {
		await deleteReview(resortId, reviewId);
		history.push(`/resorts`);
	}

	const averageRating = (resort) => {
		let sum = 0;
		let counter = 0;
		resort.reviews.forEach((review) => {
			sum += review.rating
			counter++;
		})
		setValue(sum / counter);
	}

	return (
		<div className='resort-detail'>
			<div className='resort-info'>
				<div className='resort-text'>
					<h3 className='resort-detail-name'>{resort.name}</h3>
					<h4 className='resort-detail-location'>{resort.city}, {resort.state}, {resort.country}</h4>
					<Rating 
						name='average-rating'
						value={value}
						readOnly
					/>
					<p>{resort.description}</p>
				</div>
				<img className='resort-detail-image' src={resort.img_url} alt={resort.name} />	
			</div>
			{	user ? 
				<Link className='add-review-button' to={`/resorts/${id}/create-review`}> 
					Add Review
				</Link>
				:
				<Link className='add-review-button' to='/sign-in'>Sign in to add review</Link>
			}
			<div className='review'>
				{ resort.reviews ?
					resort.reviews.map((review, key) => (
						<div key={key}>
							<h5 className='review-title'>{review.title}</h5>
							<Rating
								name='rating'
						        value={review.rating}
						        readOnly
							/>
							<p className='review-body'>{review.body}</p>
							{ user && review.user_id === user.id ?
								<Link className='edit-review-button' to={`/resorts/${id}/edit-review/${review.id}`}> 
									Edit Review
								</Link> : ''
							}
						</div>
					)) :
					<p>Loading</p>
				}
			</div>
			<Switch>
				<Route path={`/resorts/${id}/create-review`}>
					<CreateReview user={user} handleCreateReview={handleCreateReview} resort={id} rating={value} setValue={setValue}/>
				</Route>
				<Route path={`/resorts/${id}/edit-review/:id`}>
					<EditReview user={user} resort={resort} handleUpdateReview={handleUpdateReview} handleDeleteReview={handleDeleteReview} resortId={id} starRating={value} setValue={setValue}/>
				</Route>
			</Switch>
		</div>
	)
}

export default ResortDetail;