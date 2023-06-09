import Button from '../button/Button'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './navbar.scss'
// import { AiOutlineHome } from '../../assets/boxicons-2.0.7/css/boxicons.min.css'
const Navbar = () => { 
    return (
        <div className="navbar">
            <Link to="/">
                <Button
                    className ="logo"
                >   
                    <div className="logoimg"><img src={logo} alt="" /></div>
                </Button>
            </Link>
            <Link to="/">
                <Button
                    className="btn__home"
                >
                    <div className="btn__icon"><i class='bx bx-home' ></i></div>
                    <div className='btn__name'>Home</div>
                </Button>
            </Link>
            <Link to="/chats">
                <Button
                    className="btn__home"
                >
                    <div className="btn__icon"><i class='bx bx-chat'></i></div>
                    <div className='btn__name'>Chats</div>
                </Button>
            </Link>
            <Link to="/friends">
                <Button
                    className="btn__home"
                >
                    <div className="btn__icon"><i class='bx bx-group' ></i></div>
                    <div className='btn__name'>Friends</div>
                </Button>
            </Link>
        </div>
    )
}

export default Navbar