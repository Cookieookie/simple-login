import React from 'react';
import axios from 'axios';


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

    }

    const redirectToHome = () => {

    }

    const redirectToRegister = () => {

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