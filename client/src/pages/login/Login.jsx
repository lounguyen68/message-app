import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../store/auth/authActions';
import { useNavigate } from 'react-router-dom';
import './login.scss';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { loading, userInfo, error } = useSelector((state) => state.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (userInfo.id) {
          navigate('/')
        }
      }, [navigate, userInfo])

    const handleLogin = () => {
        dispatch(loginUser({username, password}))
            .then(result => {
                if (result.payload) {
                    setUsername('');
                    setPassword('');
                }
            })
    }

    return (
        <div className="login">
            <div className="login__form">
                <h3>Username</h3>
                <Input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <h3>Password</h3>
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <div className="login__error" style={error ? {backgroundColor: "#ffffff"} : null}>
                    <p>{error ? error : null}</p>
                </div>
            
                <Button
                    className="btn__login"
                    onClick={handleLogin}
                >
                    {loading ? 'Loading...' : 'Login'}
                </Button>

                <div className='option'>
                    <p>
                        Don't have an account? 
                        <Link to="/signup"> Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login