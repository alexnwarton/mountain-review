import ResortCard from '../components/ResortCard';

const Resorts = ({ resorts }) => {
	return (
		<div>
			<h2 className='all-resorts'>All Resorts</h2>
			{resorts.map((resort, key) => (
				<ResortCard resort={resort} id={key}/>
			))}
		</div>
	)
}

export default Resorts;