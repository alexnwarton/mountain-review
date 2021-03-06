import Fuse from 'fuse.js';
import { Link, Switch, Route, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {  getResorts } from '../services/resorts';
import Resorts from '../screens/Resorts';
import ResortDetail from '../screens/ResortDetail';
import SearchResults from '../screens/SearchResults';
import HomePage from '../screens/HomePage';
import '../assets/css/MainContainer.css';

const MainContainer = ({ user, routePath, setPath }) => {
	const [resorts, setResorts] = useState([]);
	const [query, setQuery] = useState('');
	const foundResorts = [];
	const history = useHistory();

	useEffect(() => {
		const fetchResorts = async () => {
			const resortData = await getResorts();
			setResorts(resortData);
		}
		fetchResorts();
	}, [])

	const searchResorts = (ev) => {
		setQuery(ev)
	}
	
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
			foundResorts.push(result.item);
		}
		return foundResorts;
	})

	return (
		<div className='main-container'>
			<Switch>
				<Route path='/' exact>
          			<HomePage routePath={routePath} setPath={setPath}/>
          			<form onSubmit={(ev) => {
          				ev.preventDefault()
          				history.push('/search-results')
          				}
          			}>
          			<input 
          				className='search-bar'
						type='text'
						placeholder='search'
						name='search'
						value={query}
						onChange={(ev) => searchResorts(ev.target.value)}
					/>
					<Link className='search-button' to='/search-results'>Search</Link>
					</form>
					<Link className='view-all' to='/resorts'>View all resorts</Link>
          		</Route>
				<Route path='/search-results'>
					<SearchResults 
						resorts={foundResorts} 
						query={query} 
						setQuery={setQuery} 
						routePath={routePath} 
						setPath={setPath}
					/>
				</Route>
				<Route path='/resorts' exact>
					<Resorts 
						resorts={resorts} 
						routePath={routePath} 
						setPath={setPath}
					/>
				</Route>
				<Route path='/resorts/:id'>
					<ResortDetail 
						resorts={resorts} 
						user={user} 
						routePath={routePath} 
						setPath={setPath}
					/>
				</Route>
			</Switch>
		</div>
	)
}

export default MainContainer;