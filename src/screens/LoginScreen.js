import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input, Button } from 'antd';

import '../styles/LoginScreen.css';

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        //dashboard
        console.log('Login');
    };

    return(
        <div className="login-page-container">
            <h2 className="login-page-title">Login</h2>

            <label htmlFor="username" className="login-page-label">
                Username:
            </label>
            <Input
                id="username"
                value={username}
                onChange={handleUsernameChange}
                className="login-page-input"
            />

            <label htmlFor="password" className="login-page-label">
                Password:
            </label>
            <Input.Password
                id="password"
                value={password}
                onChange={handlePasswordChange}
                className="login-page-input"
            />

            <div className="login-page-button-container">
                <Button type="primary" onClick={handleLogin} className="login-page-button">
                    Login
                </Button>

                <Link to="/register" className="login-page-register-link">
                    Register
                </Link>
            </div>
        </div>
    )
}

export default LoginScreen;