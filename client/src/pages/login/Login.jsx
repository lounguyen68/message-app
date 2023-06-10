import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input'
import './login.scss';

const Login = () => {
    const handleLogin = () => {}

    return (
        <div className="login">
            <div className="login__form">
                <h3>Username</h3>
                <Input
                    type="text"
                    placeholder="Username"
                />
                <h3>Password</h3>
                <Input
                    type="password"
                    placeholder="Password"
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