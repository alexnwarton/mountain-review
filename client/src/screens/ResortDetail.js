import { Switch, Route, Link, useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { createReview, getOneResort } from '../services/resorts';
import { updateReview, deleteReview } from '../services/reviews';
import CreateReview from '../screens/CreateReview';
import EditReview from '../screens/EditReview';
import '../assets/css/ResortDetail.css';

const ResortDetail = ({ user }) => {
	const [resort, setResort] = useState([]);
	const { id } = useParams();
	const history = useHistory();

	useEffect(() => {
		const fetchResort = async () => {
			const selectResort = await getOneResort(id);
			setResort(selectResort);
		}	
		fetchResort();
	}, [id])

	const handleCreateReview = async (resortId, formData) => {
		const newReview = await createReview(resortId, formData);
		setResort((prevState) => [prevState, newReview]);
		history.push(`/resorts/${resortId}`);
	}

	const handleUpdateReview = async (resortId, reviewId, formData) => {
		const newReview = await updateReview(resortId, reviewId, formData);
		setResort((prevState) => [...prevState, newReview]);
		history.push(`/resorts/${resortId}`);
	}

	const handleDeleteReview = async (resortId, reviewId) => {
		await deleteReview(resortId, reviewId);
		history.push(`/resorts/${resortId}`);
	}

	return (
		<div className='resort-detail'>
			<h3>{resort.name}</h3>
			<h4>{resort.city}, {resort.state}, {resort.country}</h4>
			<h1 className='stars'>PUT STAR RATINGS HERE!!!!</h1>
			<p>{resort.description}</p>
			<img src={resort.img_url} alt={resort.name} />
			<div className='review'>
				{ resort.reviews ?
					resort.reviews.map((review, key) => (
						<div key={key}>
							<h5>{review.title}</h5>
							<h2>{review.rating}</h2>
							<p>{review.body}</p>
							{ review.user_id === user.id ?
								<Link className='edit-review-button' to={`/resorts/${id}/edit-review`}> 
									Edit Review
								</Link> : ""
							}
						</div>
					)) :
					<p>Loading</p>
				}
			</div>
			<Switch>
				<Route path={`/resorts/${id}/create-review`}>
					<CreateReview user={user} handleCreateReview={handleCreateReview} resort={id}/>
				</Route>
				<Route path={`/resorts/${id}/edit-review`}>
					<EditReview user={user} handleUpdateReview={handleUpdateReview} handleDeleteReview={handleDeleteReview} resort={id}/>
				</Route>
			</Switch>
			{	user ? 
				<Link className='add-review-button' to={`/resorts/${id}/create-review`}> 
					Add Review
				</Link>
				:
				<Link to='/sign-in'>Sign In</Link>
			}
			
		</div>
	)
}

export default ResortDetail;