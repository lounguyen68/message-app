import { useState } from 'react'
import Input from '../../components/input/Input'
import Button from '../../components/button/Button'
import { Link } from 'react-router-dom'
import './signup.scss'

const Signup = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const handleSignup = () => {}

    return (
        <div className="signup">
                <div className="signup__form">
                    <h3>Email</h3>
                    <Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
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
                    <h3>Confirm password</h3>
                    <Input
                        type="password"
                        placeholder="Confirm password"
                        value={password2}
                        onChange={e => setPassword2(e.target.value)}
                    />
                    <Button
                        className="btn__signup"
                        onClick={handleSignup}
                    >
                        Sign Up
                    </Button>
                    <div className='option'>
                        <p>
                            Have an account?
                            <Link to="/login"> Login</Link>
                        </p>
                    </div>
                </div>
            </div>
    )
}

export default Signup