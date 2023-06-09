import Button from '../button/Button'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './navbar.scss'

const menuNav = [
    {
        path: '/',
        display: 'Home',
        icon: 'home',
    },
    {
        path: '/chats',
        display: 'Chats',
        icon: 'chat',
    },
    {
        path: '/friends',
        display: 'Friends',
        icon: 'group',
    },
]

const Navbar = () => { 

    const { pathname } = useLocation();
    const active = menuNav.findIndex((e) => e.path === pathname)
    console.log(active);
    return (
        <div className="navbar">
            <Link to="/">
                <div className ="logo">   
                   <img src={logo} alt="" />
                </div>
            </Link>
            {
                menuNav.map((e,i) =>{
                    return (
                        <Link to={e.path} key={i}>
                            <Button
                                className={`btn__${e.display} ${active === i ? 'active' : ''}`}
                            >
                                <div className="btn__icon"><i class={`bx bx${active === i ? 's' : ''}-${e.icon}`} ></i></div>
                                <div className='btn__name'>{e.display}</div>
                            </Button>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default Navbar