import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {Input, Button, Alert} from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { signIn } from '../store/actions/AuthAction';

import '../styles/LoginScreen.css';

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [authFail, setAuthFail] = useState(false);
    const [validAlert, setValidAlert] = useState(false);

    const dispatch = useDispatch();
    const { users } = useSelector(state => state);
    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        setValidAlert(false);
        if(username.length >=3 && password.length >= 6) {
            setAuthFail(false);
            dispatch(signIn(username, password));

            if(users.some(user => user.username === username && user.password === password )){
                console.log('auth');
                navigate('/dashboard', { state: { name: username } });
            }else {
                console.log('not auth')
                setAuthFail(true);
            }
        }else{
            setValidAlert(true);
        }
    };

    return(
        <div className="login-page-container">
            <h2 className="login-page-title">Login</h2>

            {authFail && (
                <Alert
                    className="login-form-alert"
                    message="Error"
                    description="Auth fail username or password invalid. Please register as new user"
                    type="error"
                    showIcon
                    closable
                />
            )}

            {validAlert && (
                <Alert
                    className="login-form-alert"
                    message="Error"
                    description="please enter valid username or password"
                    type="error"
                    showIcon
                    closable
                />
            )}

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