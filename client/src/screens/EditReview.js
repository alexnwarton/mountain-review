import { useState, useEffect } from 'react';
import { getOneResortReview } from '../services/reviews';

const EditReview = ({ user, resort, handleUpdateReview, handleDeleteReview }) => {
	const [review, setReview] = useState({
		title: '',
		rating: '',
		body: '',
		user_id: user.id,
		resort_id: resort
	})

	const { title, rating, body, user_id, resort_id } = review;

	useEffect(() => {
		const fetchReview = async () => {
			let selected = await getOneResortReview(resort, review.resort_id)
			console.log(selected);
		}
		
		//console.log(review)
	}, [])


	const handleChange = (ev) => {
		const { name, value } = ev.target;
		setReview((prevState) => ({
			...prevState,
			[name]: value
		}))
	}

	const handleDelete = (ev) => {
		handleDeleteReview(resort, review.id)
	}
	

	return (
		<form onSubmit={(ev) => {
			ev.preventDefault();
			handleUpdateReview(resort, review)}}
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
				value={resort}
				readOnly='readonly'
				onChange={handleChange}
			/>
			<button>Submit</button>
			<button onClick={handleDelete}>Delete Review</button>
		</form>
	)
}

export default EditReview;