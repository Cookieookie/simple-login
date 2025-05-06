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

    return (
        <div>
            <form>
                <div>
                    <label>Email</label>
                    <input/>
                </div>

                <div>
                    <label>Password</label>
                    <input/>
                </div>

                <div>
                    <button>Register</button>
                </div>
            </form>
        </div>
    )
}