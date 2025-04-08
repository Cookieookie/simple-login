import react from 'react'
import axios from 'axios';
// import 'bootstrap/dist/css/boostrap.min.css';
import { useState } from 'react';

function Login() {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8081/login', {email, password})
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }


    return(
        <div className='d-flex vh-100 justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder="Enter Email" className='form-control rounded-0'
                        onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder="Password" className='form-control rounded-0'
                        onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <button className='btn btn-success w-100 rounded-0'>Log in</button>
                    <p className='text-sm-center'>Don't have an account yet?</p>
                    <button className="btn btn-default border w-100 bg-light rounded-0">Create Account</button>
                
                </form>
            </div>
        </div>
    )
}

export default Login