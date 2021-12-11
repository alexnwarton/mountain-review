const CreateReview = ({ user, handleCreateReview }) => {
	return (
		<form onSubmit={handleCreateReview()}>
			<label>title:</label>
			<input 
				type='text'
				name='title'
				value=''
			/>
			<br />
			<label>rating:</label>
			<input 
				type='textarea'
				name='body'
				value='TO BE REPLACED WITH STARS'
			/>
			<br />
			<label>body:</label>
			<input 
				type='textarea'
				name='body'
				value=''
			/>
		</form>
	)
}

export default CreateReview;