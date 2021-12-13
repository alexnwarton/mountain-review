import ResortCard from '../components/ResortCard';

const SearchResults = ({ resorts, query, setQuery }) => {
	
	return (
		<div>
			<h2 className='all-resorts'>Search Results</h2>
			{resorts.map((resort, key) => (
				<ResortCard resort={resort} id={key}/>
			))}
		</div>
	)
}

export default SearchResults;