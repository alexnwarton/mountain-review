import { Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getResorts, getOneResort } from '../services/resorts';
import Search from '../components/Search';
import Resorts from '../screens/Resorts';
import ResortDetail from '../screens/ResortDetail';
import SearchResults from '../screens/SearchResults';

const MainContainer = ({ user }) => {
	const [resorts, setResorts] = useState([]);

	useEffect(() => {
		const fetchResorts = async () => {
			const resortData = await getResorts();
			setResorts(resortData);
		}
		fetchResorts();
	}, [])

	const handleSearch = (ev) => {

	}

	return (
		<div className='main-container'>
			<input 
				type='text'
				
			/>
			<input 
				type='submit'
			/>
			<Switch>
				<Route path='/search-results'>
					<Search resorts={resorts}/>
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