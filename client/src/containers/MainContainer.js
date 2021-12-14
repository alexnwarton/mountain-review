import Fuse from 'fuse.js';
import { Link, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {  getResorts } from '../services/resorts';
import Resorts from '../screens/Resorts';
import ResortDetail from '../screens/ResortDetail';
import SearchResults from '../screens/SearchResults';
import HomePage from '../screens/HomePage';
import '../assets/css/MainContainer.css';

const MainContainer = ({ user }) => {
	const [resorts, setResorts] = useState([]);
	const [query, setQuery] = useState('');
	const foundResorts = [];

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
          			<HomePage />
          			<input 
          				className='search-bar'
						type='text'
						placeholder='search'
						name='search'
						value={query}
						onChange={(ev) => searchResorts(ev.target.value)}
					/>
					<Link className='search-button' to='/search-results'>Search</Link>
					<Link className='view-all' to='/resorts'>View all resorts</Link>
          		</Route>

				<Route path='/search-results'>
					<SearchResults resorts={foundResorts} query={query} setQuery={setQuery}/>
				</Route>
				<Route path='/resorts' exact>
					<Resorts resorts={resorts} />
				</Route>
				<Route path='/resorts/:id'>
					<ResortDetail resorts={resorts} user={user} />
				</Route>
			</Switch>
		</div>
	)
}

export default MainContainer;