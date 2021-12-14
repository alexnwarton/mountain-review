
import { Link } from 'react-router-dom';
import SearchCard from '../components/SearchCard';
import '../assets/css/SearchResults.css';

const SearchResults = ({ resorts, query, setQuery }) => {
	
	return (
		<div>

			<h2 className='search-resorts'>Search Results</h2>
			{ resorts.length >= 1 ? 
				resorts.map((resort, key) => (
				<SearchCard resort={resort} id={key}/>
			))
			: 
			<div>
				<img className='no-results-image' src='https://t4.ftcdn.net/jpg/01/31/50/31/360_F_131503150_0GrJ1mLWKoAfImUrw38289vTXomCPOvF.jpg'/>
				<h3 className='no-results'>No results found</h3>
				<Link className='home-page-link' to='/'>Return Home</Link>
			</div>
			} 
		</div>
	)
}

export default SearchResults;