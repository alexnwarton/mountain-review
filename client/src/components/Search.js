import Fuse from 'fuse.js';
import { useState, useEffect } from 'react';
import SearchResults from '../screens/SearchResults';

const Search = ({ resorts }) => {
	const [query, setQuery] = useState("");
	const foundResorts = [];

	const fuse = new Fuse(resorts, {
		keys: [
			'name',
			'city',
			'state',
			'country'
		],
		includeScore: true,
	})

	const searchResorts = (ev) => {
		setQuery(ev)
	}

	const searchResults = fuse.search(query)
	searchResults.map((result) => {
		if(result.score = 0.1) {
			foundResorts.push(result);
		}
		return foundResorts;
	})

	

	return (
		<div>
			<SearchResults resorts={foundResorts}/>
		</div>
	)
}

export default Search;