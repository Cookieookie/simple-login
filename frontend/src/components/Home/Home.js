import React, { useEffect } from 'react';
import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../../constants/apiConstants';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();

    useEffect(() => {

        axios.get(`${API_BASE_URL}/user/me`, {
            headers: { 'token': localStorage.getItem(ACCESS_TOKEN_NAME) }
        })
        .then(response => {
            if (response.status !== 200) {
                navigate('/login');
            }
        })
        .catch(error => {
            navigate('/login');
        });
    }, [navigate]); 

    return (
        <div className="mt-2">
            Home page content
        </div>
    );
}

export default Home;