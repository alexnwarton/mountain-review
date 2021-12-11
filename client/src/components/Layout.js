import Nav from './Nav';
import Footer from './Footer';

const Layout = ({ user, handleSignOut, children }) => {
	return (
		<div>
			<Nav user={user} handleSignOut={handleSignOut} />
			<div className='layout-children'>
				{children}
			</div>
			<Footer />
		</div>
	)
}

export default Layout;