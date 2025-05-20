import React from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function Login(props) {

    const [state, setState] = useState({
        email: "",
        password: "",
        successMessage: null,
        errorMessage: null,
    })

    const handleChange = () => {

    }

    const handleSubmitClick = () => {
        e.preventDefault();
        const payload={
            "email": state.email,
            "password": state.password,
        }
        axios.post(API_BASE_URL+'/user/login', payload)
            .then(function (response) {
                if(response.status === 200) { //indicates HTTP request was succesful - 200 Success
                    setState(prevState => ({
                        ...prevState,
                        'successMessage': "You're logged in! Redirecting to home page..."
                    }))
                    localStorage.setItem(ACCESS_TOKEN_NAME, response.data.token);
                    redirectToHome();
                    props.showError(null)
                } else if(response.status === 204) { //indicate a successful request, but the server is not sending any content back - 204 No Content1
                    props.showError("Username and password do not match!");
                } else { //indicate a login that does not exist
                    props.showError("Username does not exist");
                }
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    const redirectToHome = () => {
        navigate('/home');
    }

    const redirectToRegister = () => {
        navigate('/login');
    }

    return(
        <div className='card col-12 col-lg-4 login-card mt-2 hv-center'>
            <div className='bg-white p-3 rounded w-25'>
                <form>

                    <div className="form-group text-left">
                        <label htmlFor="email">Email</label>
                        <input type="email" 
                                placeholder="Enter Email" 
                                className="form-control"
                                id="email"
                                aria-describedby="emailHelp"
                                value={state.email}
                                onChange={handleChange}
                                />
                    </div>

                    <div className="form-group text-left">
                        <label htmlFor="password">Password</label>
                        <input type="password"
                                placeholder="Password"
                                className="form-control"
                                id="password"
                                value={state.password}
                                onChange={handleChange}
                                />
                    </div>

                    <button type="submit"
                            className="btn btn primary"
                            onClick={handleSubmitClick}>Log in
                    </button>

                
                </form>

                <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
                    {state.successMessage}
                </div>
                
                <div className="registerMessage">
                    <span>Don't have an account yet?</span>
                    <span className="loginText" onClick={() => redirectToRegister()}>Create a new account</span>
                </div>

            </div>
        </div>
    )
}

export default Login