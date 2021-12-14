import Rating from '@mui/material/Rating';
import { useState } from 'react';

const CreateReview = ({ user, resort, handleCreateReview }) => {
	const [starRating, setRating] = useState(4)
	const [newReview, setNewReview] = useState({
		title: '',
		rating: starRating,
		body: '',
		user_id: user.id,
		resort_id: resort
	})

	const { title, rating, body } = newReview;

	const handleChange = (ev) => {
		const { name, value } = ev.target;
		setNewReview((prevState) => ({
			...prevState,
			[name]: value
		}))
	}
	

	return (
		<form onSubmit={(ev) => {
			ev.preventDefault();
			handleCreateReview(resort, newReview)}}
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
			<Rating 
				name='average-rating'
				value={rating}
				onChange={(ev, newValue) => {
					setRating(newValue)
				}}
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
				type='hidden'
				name='user_id'
				value={user.id}
				onChange={handleChange}
			/>
			<input 
				type='hidden'
				name='resort_id'
				value={resort}
				onChange={handleChange}
			/>
			<button>Submit</button>
		</form>
	)
}

export default CreateReview;