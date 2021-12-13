import { useState } from 'react';

const CreateReview = ({ user, resort, handleCreateReview }) => {
	const [newReview, setNewReview] = useState({
		title: '',
		rating: '',
		body: '',
		user_id: user.id,
		resort_id: resort
	})

	const { title, rating, body, user_id, resort_id } = newReview;

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
		</form>
	)
}

export default CreateReview;