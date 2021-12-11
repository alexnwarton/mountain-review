import { Link } from 'react-router-dom';
import { useState } from 'react';

const SignIn = ({ handleSignIn }) => {
	const [userInfo, setUserInfo] = useState({
		username: '',
		password: ''
	})

	const { username, password} = userInfo;

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
			handleSignIn(userInfo);
		}}>
			<label>username:</label>
			<input 
				type='text'
				name='username'
				value={username}
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
			<p>Don't have an account?<Link to='/register'>Sign Up</Link></p>
		</form>
	)
}

export default SignIn;