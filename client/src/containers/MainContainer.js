import { Switch, Route, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getResorts, getOneResort } from '../services/resorts';
import { createReview } from '../services/reviews';
import Search from '../components/Search';
import CreateReview from '../screens/CreateReview';
import Resorts from '../screens/Resorts';
import ResortDetail from '../screens/ResortDetail';
import SearchResults from '../screens/SearchResults';

const MainContainer = ({ user }) => {
	const [resorts, setResorts] = useState([]);
	const history = useHistory();

	useEffect(() => {
		const fetchResorts = async () => {
			const resortData = await getResorts();
			setResorts(resortData);
		}
		fetchResorts();
	}, [])

	const handleCreateReview = async (formData, resortId) => {
		const newReview = await createReview(formData);
		setResorts((prevState) => [...prevState, newReview]);
		history.push(`/resorts/${resortId}`);
	}

	const handleSearch = (ev) => {

	}

	return (
		<div className='main-container'>
			
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
				<Route path='/create-review' exact>
					<CreateReview user={user} handleCreateReview={handleCreateReview}/>
				</Route>
				
			</Switch>
		</div>
	)
}

export default MainContainer;