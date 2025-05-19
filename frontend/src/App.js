import React, { useState } from 'react';
import './App.css';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Registration from './components/Registration/Registration.js';
import PrivateRoute from './utils/PrivateRoute'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import AlertComponent from './components/AlertComponent/AlertComponent';


function App() {
  const [title, updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null);

  return (
    <Router>
      <div>
      <Header title={title}/>
        <div>
        
          <Routes>
            <Route path="/" element={<Registration showError={updateErrorMessage} updateTitle={updateTitle} />} />
            <Route path="/register" element={<Registration showError={updateErrorMessage} updateTitle={updateTitle} />} />
            <Route path="/login" element={<Registration showError={updateErrorMessage} updateTitle={updateTitle} />} />
            <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
          </Routes>
            
          <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage}/>
          
        </div>
      </div>
    </Router>
    
  );
}

export default App;
