import ResortCard from '../components/ResortCard';
import '../assets/css/Resorts.css';

const Resorts = ({ resorts, routePath, setPath }) => {
	setPath('/resorts')
	return (
		<div className='all-resorts-info'>
			<h2 className='all-resorts'>All Resorts</h2>
			<div className='all-resorts-container'>
				{resorts.map((resort, key) => (
					<ResortCard resort={resort} key={key}/>
				))}
			</div>
		</div>
	)
}

export default Resorts;