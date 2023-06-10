import React from 'react'
import Input from '../../components/input/Input'
import Button from '../../components/button/Button'
import { Link } from 'react-router-dom'
import './signup.scss'

const Signup = () => {
    const handleSignup = () => {}

    return (
        <div className="signup">
                <div className="signup__form">
                    <h3>Email</h3>
                    <Input
                        type="email"
                        placeholder="Email"
                    />
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
                    <h3>Confirm password</h3>
                    <Input
                        type="password"
                        placeholder="Confirm password"
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