import { Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getResorts, getOneResort } from '../services/resorts';
import Resorts from '../screens/Resorts';

const MainContainer = ({ user }) => {
	const [resorts, setResorts] = useState([]);

	useEffect(() => {
		const fetchResorts = async () => {
			const resortData = await getResorts();
			setResorts(resortData);
		}
		fetchResorts();
	}, [])



	return (
		<div>
			<Switch>
				<Route path='/resorts'>
					<Resorts resorts={resorts}/>
				</Route>
			</Switch>
		</div>
	)
}

export default MainContainer;