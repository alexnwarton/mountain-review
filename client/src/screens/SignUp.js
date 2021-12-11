import { Link } from 'react-router-dom';
import { useState } from 'react';

const SignUp = ({ handleSignUp }) => {
	const [userInfo, setUserInfo] = useState({
		username: '',
		email: '',
		password: ''
	})

	const { username, email, password} = userInfo;

	const handleChange = (ev) => {
		const { name, value } = ev.target;
		setUserInfo((prevState) => ({
			...prevState,
			[name]: value,
		}))
	}

	return (
		<form onSubmit={(ev) => {
			ev.preventDefault();
			handleSignUp(userInfo);
		}}>
			<label>username:</label>
			<input 
				type='text'
				name='username'
				value={username}
				onChange={handleChange}
			/>
			<br />
			<label>email:</label>
			<input 
				type='text'
				name='email'
				value={email}
				onChange={handleChange}
			/>
			<br />
			<label>password:</label>
			<input 
				type='password'
				name='password'
				value={password}
				onChange={handleChange}
			/>
			<br />
			<input type='submit' value='Sign In'/>
			<p>Already have an account?<Link to='/sign-in'>Sign In</Link></p>
		</form>
	)
}

export default SignUp;