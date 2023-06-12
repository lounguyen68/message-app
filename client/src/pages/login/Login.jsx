import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input'
import { useDispatch } from 'react-redux';
import { login } from '../../store/userSlice';
import { useNavigate } from 'react-router-dom';
import './login.scss';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = () => {
        let user = {username, password}
        dispatch(login(user))
            .then(result => {
                if (result.payload) {
                    setUsername('');
                    setPassword('');
                    navigate('/');
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
            
                <Button
                    className="btn__login"
                    onClick={handleLogin}
                >
                    Login
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