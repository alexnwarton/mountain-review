import { Link } from 'react-router-dom';
import '../assets/css/HomePage.css';

const HomePage = () => {
	return (
		<div>
			<h1>Mountain Review</h1>
			<Link to='/resorts'>View all resorts</Link>
		</div>
	)
}

export default HomePage;