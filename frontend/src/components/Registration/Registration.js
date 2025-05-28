import React, { useState } from 'react';
import axios from 'axios';
import './Registration.css';
import {API_BASE_URL, ACCESS_TOKEN_NAME} from '../../constants/apiConstants';
import { useNavigate } from "react-router-dom";


function Registration(props) {

    const navigate =useNavigate();

    const [state, setState] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        userName: "",
        successMessage: null,
        errorMessage: null
    })

    const handleChange = (e) => {
        const {id, value} = e.target
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const redirectToHome = () => {
        navigate('/home');
    }

    const redirectToLogin = () => {
       navigate('/login');
    }

    const sendDetailsToServer = () => {
        if(state.email.length && state.password.length) {
            props.showError(null);
            const payload ={
                "email": state.email,
                "password": state.password,
                "name": state.userName
            }
            axios.post(API_BASE_URL+'/user/register', payload)
                .then(function (response) {
                    if(response.status === 200) {
                        setState(prevState => ({
                            ...prevState,
                            successMessage : 'You are now registered! Redirecting to home page. . .'
                        }))
                        localStorage.setItem(ACCESS_TOKEN_NAME, response.data.token);
                        redirectToHome();
                        props.showError(null)
                    } else {
                        setState(prev => ({ ...prev, errorMessage: 'Some error occured.'}));
                    }
                })
                .catch(function (error) {
                    setState(prev => ({ ...prev, errorMessage: 'Some error occured.'}));
                });
        } else {
            setState(prev => ({ ...prev, errorMessage: 'Please enter a valid username and password.'}));
        }
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();
        if(state.password === state.confirmPassword) {
            sendDetailsToServer();
            setState(prev => ({ ...prev, errorMessage: null}));
        } else {
            setState(prev => ({ ...prev, errorMessage: 'Passwords do not match.'}));
        }
    }

    return (
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
                <div>
                    <label htmlFor="inputEmail">Email</label>
                    <input type="email"
                            id="email"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            className="form-control"
                            value={state.email}
                            onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="inputPassword">Password</label>
                    <input type="password"
                            id="password"
                            placeholder="password"
                            className="form-control"
                            value={state.password}
                            onChange={handleChange}
                            />
                </div>

                <div>
                    <label htmlFor="confirmPassword"> Confirm Password</label>
                    <input type="confirmPassword"
                            id="confirmPassword"
                            placeholder="Confirm Password"
                            className="form-control"
                            value={state.confirmPassword}
                            onChange={handleChange}
                            />
                </div>

                {state.errorMessage && (
                    <div className="alert alert-danger mt-2" role="alert">
                        {state.errorMessage}
                    </div>
                )}

                <div>
                    <button type="submit"
                            className="btn btn-primary"
                            onClick={handleSubmitClick}
                    >
                        Register
                    </button>
                </div>

            </form>

            <div className="alert alert-success mt-2" style={{ display : state.successMessage ? 'block' : 'none' }} role="alert">
                {state.successMessage}
            </div>

            <div className="mt-2">
                <span>Already have an account? </span>
                <span className="loginText"
                        style={{ fontWeight: 'bold', color: 'blue'}} 
                        onClick={() => redirectToLogin()}>Login here</span>
            </div>

        </div>
    )
}

export default Registration;