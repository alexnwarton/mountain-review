import ResortCard from '../components/ResortCard';
import '../assets/css/Resorts.css';

const Resorts = ({ resorts }) => {
	return (
		<div>
			<h2 className='all-resorts'>All Resorts</h2>
			{resorts.map((resort, key) => (
				<ResortCard resort={resort} key={key}/>
			))}
		</div>
	)
}

export default Resorts;