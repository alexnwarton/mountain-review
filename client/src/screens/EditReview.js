import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../assets/css/EditReview.css';

const EditReview = ({ user, resort, handleUpdateReview, handleDeleteReview }) => {
	const [review, setReview] = useState({
		title: '',
		rating: '',
		body: '',
		user_id: user.id,
		resort_id: resort.id
	})
	let { id } = useParams();

	const { title, rating, body} = review;

	useEffect(() => {
		const fetchReview = () => {
			let selected = resort.reviews.find((review) => review.id === Number(id));
			setReview(selected);
		}
		fetchReview()
	}, [id])


	const handleChange = (ev) => {
		const { name, value } = ev.target;
		setReview((prevState) => ({
			...prevState,
			[name]: value
		}))
	}

	const handleDelete = (ev) => {
		handleDeleteReview(resort.id, review.id)
	}

	return (
		<div className='edit-container'>
			<form className='edit-form' onSubmit={(ev) => {
				ev.preventDefault();
				handleUpdateReview(resort.id, id, review)}}
			>
				<label>title:</label>
				<input 
					type='text'
					name='title'
					value={title}
					onChange={handleChange}
				/>
				<br />
				<label>rating:</label>
				<input 
					type='textarea'
					name='rating'
					value={rating}
					onChange={handleChange}
				/>
				<br />
				<label>body:</label>
				<textarea 
					type='textarea'
					name='body'
					value={body}
					onChange={handleChange}
				/>
				<input 
					type='hidden'
					name='user_id'
					value={user.id}
					readOnly='readonly'
				/>
				<input 
					type='hidden'
					name='resort_id'
					value={resort.id}
					readOnly='readonly'
				/>
				<div className='button-container'>
					<button className='edit-button'>Update Review</button>
					<button className='delete-button' onClick={handleDelete}>Delete Review</button>
				</div>
			</form>
			
		</div>
	)
}

export default EditReview;