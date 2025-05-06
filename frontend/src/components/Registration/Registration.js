import React, { useState } from 'react';
import axios from 'axios';
import './Registration.css';


function RegistrationForm(props) {
    const [state, setState] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        userName: "",
        successMsg: null
    })

    const handleChange = (e) => {
        const {id, value} = e.target
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();
        if(state.password === state.confirmPassword) {
            sendDetailsToServer()
        } else {
            props.showError('Passwords do NOT match')
        }
    }

    return (
        <div>
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
                            id="Password"
                            placeholder="Password"
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

                <div>
                    <button type="submit"
                            className="btn btn-primary"
                            onClick={handleSubmitClick}
                    >
                        Register
                    </button>
                </div>

            </form>
        </div>
    )
}