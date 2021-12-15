import Rating from '@mui/material/Rating';
import { useState } from 'react';
import '../assets/css/CreateReview.css';

const CreateReview = ({ user, resort, handleCreateReview }) => {
	const [starRating, setRating] = useState('')
	const [newReview, setNewReview] = useState({
		title: '',
		rating: parseInt(starRating),
		body: '',
		user_id: user.id,
		resort_id: resort
	})

	const { title, body } = newReview;

	const handleChange = (ev) => {
		const { name, value } = ev.target;
		setNewReview((prevState) => ({
			...prevState,
			[name]: value
		}))
	}
	
	return (
		<form className='create-review' onSubmit={(ev) => {
			ev.preventDefault();
			setRating(starRating)
			handleCreateReview(resort, newReview)}}
		>
			<label className='create-label'>title</label>
			<input 
				type='text'
				name='title'
				value={title}
				onChange={handleChange}
			/>
			<label className='create-label'>rating</label>
			<Rating 
				name='average-rating'
				value={parseInt(starRating)}
				onChange={(ev, newValue) => {
					setNewReview((prevState) => ({
						...prevState,
					 rating: newValue }))
					setRating(newValue)
				}}
			/>
			<label className='create-label'>body</label>
			<textarea 
				type='textarea'
				rows='15'
				cols='10'
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
			<button className='create-review-button'>Submit Review</button>
		</form>
	)
}

export default CreateReview;