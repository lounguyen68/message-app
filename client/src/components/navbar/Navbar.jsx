import { useEffect } from 'react'
import Button from '../button/Button'
import { Link, useLocation, useNavigate} from 'react-router-dom'
import logo from '../../assets/logo.png'
import './navbar.scss'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../../store/auth/authActions'
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
    {
        path: '/search',
        display: 'Search',
        icon: 'search',
    }
]

const Navbar = () => { 
    const { loading, userInfo, userToken, error } = useSelector((state) => state.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { pathname } = useLocation();
    useEffect(() => {
      if (!userInfo.id && pathname !== '/'){
        navigate('/login')
      }
    }, [navigate, userInfo])
    

    const handleLogout = () => {
        dispatch(logoutUser({token: userToken}))
    }
    const active = menuNav.findIndex((e) => e.path === pathname)
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
                            <Link to={userInfo.id && e.path !== '/' ? e.path : '/login'} key={i}>
                                <Button
                                    className={`btn__${e.display} ${active === i ? 'active' : ''}`}
                                >
                                    <div className="btn__icon"><i className={`bx bx${active === i ? 's' : ''}-${e.icon}`} ></i></div>
                                    <div className='btn__name'>{e.display}</div>
                                </Button>
                            </Link>
                        )
                    })
                }
                {userInfo.id ? <div>
                    <Button
                    className={`btn__logout`}
                    onClick={handleLogout}
                    >
                        <div className="btn__icon"><i className='bx bx-log-out'></i></div>
                        <div className='btn__name'>Logout</div>
                    </Button>
                </div> : null}
            </div>
    )
}

export default Navbar