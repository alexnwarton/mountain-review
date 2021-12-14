
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
				<h3 className='no-results'>No results found</h3>
				<Link className='home-page-link' to='/'>Return Home</Link>
			</div>
			} 
		</div>
	)
}

export default SearchResults;