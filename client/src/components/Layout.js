import Nav from './Nav';
import Footer from './Footer';
import '../assets/css/Layout.css';

const Layout = ({ user, handleSignOut, children }) => {
	return (
		<div className='layout'>
			<Nav user={user} handleSignOut={handleSignOut} />
			<div className='layout-children'>
				{children}
			</div>
			<Footer />
		</div>
	)
}

export default Layout;