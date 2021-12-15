import Snowfall from 'react-snowfall';
import '../assets/css/HomePage.css';

const HomePage = () => {

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