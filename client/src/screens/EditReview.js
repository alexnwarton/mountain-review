import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getOneResortReview } from '../services/reviews';

const EditReview = ({ user, resort, handleUpdateReview, handleDeleteReview }) => {
	const [review, setReview] = useState({
		title: '',
		rating: '',
		body: '',
		user_id: user.id,
		resort_id: resort.id
	})
	let { id } = useParams();

	const { title, rating, body, user_id, resort_id } = review;

	useEffect(() => {
		const fetchReview = () => {
			let selected = resort.reviews.find((review) => review.id == Number(id))
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
		<form onSubmit={(ev) => {
			ev.preventDefault();
			handleUpdateReview(resort.id, id)}}
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
			<input 
				type='textarea'
				name='body'
				value={body}
				onChange={handleChange}
			/>
			<input 
				type='text'
				name='user_id'
				value={user.id}
				readOnly='readonly'
				onChange={handleChange}
			/>
			<input 
				type='text'
				name='resort_id'
				value={resort.id}
				readOnly='readonly'
				onChange={handleChange}
			/>
			<button>Submit</button>
			<button onClick={handleDelete}>Delete Review</button>
		</form>
	)
}

export default EditReview;