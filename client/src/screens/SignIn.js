import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../assets/css/SignIn.css';

const SignIn = ({ handleSignIn, routePath, setPath, isError, setIsError }) => {
	const [userInfo, setUserInfo] = useState({
		username: '',
		password: ''
	})

	useEffect(() => {
		setPath('/sign-in')
	}, [setPath])

	const { username, password} = userInfo;

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
			<h2 className='sign-in-header'>Sign In</h2>
			<form className='sign-in-form'onSubmit={(ev) => {
				ev.preventDefault();
				handleSignIn(userInfo);
			}}>
				<label className='hidden-label'>username:</label>
				<input 
					type='text'
					name='username'
					placeholder='username'
					value={username}
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
				<input className='sign-in-button' type='submit' value='Sign In'/>
				<p className='sign-up-blurb'>
					Don't have an account? 
					<Link className='sign-up-link' to='/sign-up' onClick={() => setIsError(false)}>
						Sign Up
					</Link>
				</p>
			</form>
			{ isError ? <p className='error-message'>Invalid credentials. Please try again.</p> : ''}
		</Box>
	)
}

export default SignIn;