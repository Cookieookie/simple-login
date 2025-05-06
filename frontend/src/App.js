import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Registration from './components/RegistrationForm/RegistrationForm';
import PrivateRoute from './utils/PrivateRoute'
import {
  BrowserRouter as Router,
  Switch,
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
            <Switch>
              <Route path="/" exact={true}>
                <Registration showError={updateErrorMessage} updateTitle={updateTitle}/>
              </Route>
              <Route path="/register">
                <Registration showError={updateErrorMessage} updateTitle={updateTitle}/>
              </Route>
              <Route path="/login">
                <Login showError={updateErrorMessage} updateTitle={updateTitle}/>
              </Route>
              <PrivateRoute path="/home">
                <Home />
              </PrivateRoute>
            </Switch>
            
          <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage}/>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
