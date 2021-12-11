import { Link } from 'react-router-dom';
import '../assets/css/Nav.css';

const Nav = () => {
	return (
		<nav>
			<Link className='logo' to='/'>MR</Link>
		</nav>
	)
}

export default Nav;