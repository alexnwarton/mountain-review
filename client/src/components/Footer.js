import '../assets/css/Footer.css';
import logo from '../assets/images/github-image.png'

const Footer = () => {
	return (
		<div>
			<footer>
				<a className='github-link' href='https://github.com/alexnwarton/mountain-review'>
					<img src={logo} alt='https://github.com/alexnwarton/mountain-review'/>
				</a>
			</footer>
		</div>
	)
}

export default Footer;