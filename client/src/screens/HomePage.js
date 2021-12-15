import Snowfall from 'react-snowfall';
import { useEffect } from 'react';
import '../assets/css/HomePage.css';

const HomePage = ({ routePath, setPath }) => {
	useEffect(() => {
		setPath('/')
	}, [setPath])

	return (
		<div className='home-page'>
			<h1>Mountain Review</h1>
			<Snowfall
	        	color='#dee4fd'
	       		snowflakeCount={200}  
     		 />
		</div>
	)
}

export default HomePage;