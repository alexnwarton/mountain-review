import Nav from './Nav';
import Footer from './Footer';

const Layout = ({ children }) => {
	return (
		<div>
			<Nav />
			<div className='layout-children'>
				{children}
			</div>
			<Footer />
		</div>
	)
}

export default Layout;