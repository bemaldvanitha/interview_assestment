import React, { useState, useCallback } from "react";
import { Button, Checkbox } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { signUp } from '../store/actions/AuthAction';
import CusAlert from "../components/CusAlert";
import CusInput from "../components/CusInput";

import '../styles/SignupScreen.css';

const SignupScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

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

    const handleSubmit = useCallback(() => {
        setShowAlert(false);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailValid = emailRegex.test(email);
        const isPasswordMatch = password === confirmPassword;
        const isPasswordValid = password.length >= 6;
        const isUsernameValid = username.length >= 3;

        if(emailValid && isPasswordMatch && isPasswordValid && agreeTerms && isUsernameValid){
            console.log('register done');
            dispatch(signUp(username, email, password));
            navigate('/log-in');

        }else{
            setShowAlert(true);
            console.log('error');
        }
    },[email, username, password, confirmPassword, agreeTerms]);

    return(
        <div className="register-form-container">
            <h2 className="register-form-header">Sign Up</h2>

            {showAlert && (
                <CusAlert
                    description={"Please make sure you have selected the terms and conditions and entered " +
                        "a valid email address and confirmed your password."}
                />

            )}

            <CusInput title={'Username:'} id={'username'} htmlFor={'username'} inputValue={username}
                      setValue={handleUsernameChange}/>

            <CusInput title={'Email:'} id={'email'} htmlFor={'email'} inputValue={email} setValue={handleEmailChange}/>

            <CusInput title={'Password:'} id={'password'} htmlFor={'password'} isPassword={true}
                      setValue={handlePasswordChange} inputValue={password}/>

            <CusInput title={'Password Again:'} id={'passwordAgain'} htmlFor={'passwordAgain'} isPassword={true}
                setValue={handleConfirmPasswordChange} inputValue={confirmPassword}/>

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