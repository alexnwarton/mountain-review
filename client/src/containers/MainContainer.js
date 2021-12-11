import { Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getResorts, getOneResort } from '../services/resorts';

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
		</div>
	)
}

export default MainContainer;