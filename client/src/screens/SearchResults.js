
import SearchCard from '../components/SearchCard';
import '../assets/css/SearchResults.css';

const SearchResults = ({ resorts, query, setQuery }) => {
	
	return (
		<div>
			<h2 className='search-resorts'>Search Results</h2>
			{resorts.map((resort, key) => (
				<SearchCard resort={resort} id={key}/>
			))}
		</div>
	)
}

export default SearchResults;