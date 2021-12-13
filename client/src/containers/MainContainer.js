import Fuse from 'fuse.js';
import { Link, Switch, Route, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { createReview, getResorts, getOneResort } from '../services/resorts';
//import { createReview } from '../services/reviews';
import Search from '../components/Search';
// import CreateReview from '../screens/CreateReview';
import Resorts from '../screens/Resorts';
import ResortDetail from '../screens/ResortDetail';
import SearchResults from '../screens/SearchResults';

const MainContainer = ({ user }) => {
	const [resorts, setResorts] = useState([]);
	const history = useHistory();
	const [query, setQuery] = useState("");
	const [foundResorts, setFoundResorts] = useState([]);

	useEffect(() => {
		const fetchResorts = async () => {
			const resortData = await getResorts();
			setResorts(resortData);
		}
		fetchResorts();
	}, [])

	const handleCreateReview = async (formData, resortId) => {
		const newReview = await createReview(resortId, formData);
		setResorts((prevState) => [...prevState, newReview]);
		history.push(`/resorts/${resortId}`);
	}

	const handleSearch = (query) => {
	
		
		const fuse = new Fuse(resorts, {
			keys: [
				'name',
				'city',
				'state',
				'country'
			],
			includeScore: true,
		})	

		const searchResults = fuse.search(query)
		searchResults.map((result) => {
			if(result.score <= 0.1) {
				if(foundResorts.includes(result)) {
					console.log(foundResorts)
				}
				foundResorts.push(result);
				
				
			}
			let test = foundResorts.includes(result.item.id);
				console.log(test)
			return foundResorts;
		})
	}
	

	const searchResorts = (ev) => {
		setQuery(ev)
	}

	return (
		<div className='main-container'>
		
			<input 
				type='text'
				name='search'
				value={query}
				onChange={(ev) => searchResorts(ev.target.value)}
			/>
			<Link to='/search-results'>Search</Link>

			<Switch>
				<Route path='/search-results'>
					<Search resorts={foundResorts} handleSearch={handleSearch} query={query}/>
				</Route>
				<Route path='/resorts' exact>
					<Resorts resorts={resorts} />
				</Route>
				<Route path='/resorts/:id'>
					<ResortDetail resorts={resorts} user={user} />
				</Route>
				{/*<Route path='resorts/:id/create-review'>
					<CreateReview user={user} handleCreateReview={handleCreateReview}/>
				</Route>*/}
				
			</Switch>
		</div>
	)
}

export default MainContainer;