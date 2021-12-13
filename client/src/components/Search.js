import Fuse from 'fuse.js';
import { useState, useEffect } from 'react';
import SearchResults from '../screens/SearchResults';

const Search = ({ resorts, query, handleSearch }) => {
// 	const [foundResorts, setFoundResorts] = useState([]);

// 	const fuse = new Fuse(foundResorts, {
// 		keys: [
// 			'name',
// 			'city',
// 			'state',
// 			'country'
// 		],
// 		includeScore: true,
// 	})
// 	useEffect(() => {
// 		const searchResults = fuse.search(query)
// 	searchResults.map((result) => {
// 		if(result.score = 0.1) {
// 			foundResorts.push(result);
// 		}
// 		return foundResorts;
// 	})
// }, [])
	
	const foundResorts = handleSearch(query);
	console.log(foundResorts)
	
	return (
		<div>
			<SearchResults resorts={resorts}/>
		</div>
	)
}

export default Search;