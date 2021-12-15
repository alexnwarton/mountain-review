import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../assets/css/SignUp.css';

const SignUp = ({ handleSignUp, routePath, setPath }) => {
	const [userInfo, setUserInfo] = useState({
		username: '',
		email: '',
		password: '',
		is_admin: false
	})
	setPath('/sign-up');
	const { username, email, password} = userInfo;

	const handleChange = (ev) => {
		const { name, value } = ev.target;
		setUserInfo((prevState) => ({
			...prevState,
			[name]: value,
		}))
	}

	return (
		<Box sx={{
			width:550,
			height:600,
			backgroundColor:'white',
			margin: 'auto'
		}}>
			<h2 className='sign-up-header'>Sign Up</h2>
			<form className='sign-up-form' onSubmit={(ev) => {
				ev.preventDefault();
				handleSignUp(userInfo);
			}}>
				<label className='hidden-label'>username:</label>
				<input 
					type='text'
					name='username'
					placeholder='username'
					value={username}
					onChange={handleChange}
				/>
				<label className='hidden-label'>email:</label>
				<input 
					type='text'
					name='email'
					placeholder='email'
					value={email}
					onChange={handleChange}
				/>
				<label className='hidden-label'>password:</label>
				<input 
					type='password'
					name='password'
					placeholder='password'
					value={password}
					onChange={handleChange}
				/>
				<input className='sign-up-button' type='submit' value='Sign Up'/>
				<p className='sign-in-blurb'>Already have an account? <Link className='sign-in-link' to='/sign-in'>Sign In</Link></p>
			</form>
		</Box>
	)
}

export default SignUp;