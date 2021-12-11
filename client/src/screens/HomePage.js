import { Link } from 'react-router-dom';

const HomePage = () => {
	return (
		<div>
			<h1>Mountain Review</h1>
			<Link to='/resorts'>View all resorts</Link>
		</div>
	)
}

export default HomePage;