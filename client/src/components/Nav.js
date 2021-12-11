import { Link } from 'react-router-dom';
import '../assets/css/Nav.css';

const Nav = ({ user, handleSignOut }) => {
	return (
		<nav className='main-nav'>
			<Link className='logo' to='/'>MR</Link>
			{ user ? 
				<div className='user-greeting'>
					<p>Welcome, {user.username}</p>
					<button onClick={handleSignOut}>Sign Out</button>
				</div>
				:
				<Link className='sign-in' to='/sign-in'>Sign In</Link>
			}
		</nav>
	)
}

export default Nav;