import { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Button from '../../components/button/Button'
import { Link, useNavigate } from 'react-router-dom'
import homebg from '../../assets/home_bg.png'
import logo from '../../assets/logo.png'
import './home.scss'
import axios from 'axios'
import { getUser } from '../../store/userSlice';

const Home = () => {
	const [user, setUser] = useState(getUser())
    const navigate = useNavigate();
	console.log(user);
	return (
		<>
		{
			user ? (
				<div className="container">
					<Navbar/>
					<div className="home">
						<div className="home__bg">
							<img src={homebg} alt="" />
						</div>
						<div className="home__content">
							<h3>Let's Talk Together.</h3>
							<p>Connect easily with friends and family using our messaging platform.</p>
						</div>
						<Button
							className="home__btn"
						>	
							<Link to="/chats">
								<p>Chat Now</p>
								<img src={logo} alt="" />
							</Link>
						</Button>
					</div>
				
				</div>
			) : (
				<div>Lag</div>
			)
		}
		</>
	)
}

export default Home