import React, { useState } from "react";
import { Input, Button, Checkbox, Alert } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

import '../styles/SignupScreen.css';

const SignupScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleAgreeTermsChange = (e) => {
        setAgreeTerms(e.target.checked);
    };

    const handleSubmit = () => {
        setShowAlert(false);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailValid = emailRegex.test(email);
        const isPasswordMatch = password === confirmPassword;
        const isPasswordValid = password.length >= 6;
        const isUsernameValid = username.length >= 3;

        if(emailValid && isPasswordMatch && isPasswordValid && agreeTerms && isUsernameValid){
            console.log('Username:', username);
            console.log('Email:', email);
            console.log('Password:', password);
            console.log('Confirm Password:', confirmPassword);
            console.log('Agree Terms:', agreeTerms);
            navigate('/log-in');

        }else{
            setShowAlert(true);
            console.log('error');
        }
    };

    return(
        <div className="register-form-container">
            <h2 className="register-form-header">Sign Up</h2>

            {showAlert && (
                <Alert
                    className="register-form-alert"
                    message="Error"
                    description="Please make sure you have selected the terms and conditions and entered a valid email address
                    and confirmed your password."
                    type="error"
                    showIcon
                    closable
                />
            )}

            <label htmlFor="username" className="signup-page-label">
                Username:
            </label>
            <Input
                id="username"
                value={username}
                onChange={handleUsernameChange}
                className="signup-page-input"
            />

            <label htmlFor="email" className="signup-page-label">
                Email:
            </label>
            <Input
                id="email"
                value={email}
                onChange={handleEmailChange}
                className="signup-page-input"
            />

            <label htmlFor="password" className="signup-page-label">
                Password:
            </label>
            <Input.Password
                id="password"
                value={password}
                onChange={handlePasswordChange}
                className="signup-page-input"
            />

            <label htmlFor="passwordAgain" className="signup-page-label">
                Password Again:
            </label>
            <Input.Password
                id="passwordAgain"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                className="signup-page-input"
            />

            <Checkbox
                checked={agreeTerms}
                onChange={handleAgreeTermsChange}
                className="register-form-checkbox"
            >
                I agree to the <Link to={'/'} className="register-form-login-link-text">terms and services</Link>
            </Checkbox>

            <Button type="primary" onClick={handleSubmit} className="register-form-button">
                Register
            </Button>

            <div className="register-form-login-link">
                Already a member? <Link to="/log-in" className="register-form-login-link-text">Login here</Link>
            </div>
        </div>
    )
}

export default SignupScreen;