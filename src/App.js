import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import jwt_decode from "jwt-decode"
import './App.css';
import { useState , useEffect} from 'react';

import UserNew from './components/pages/users/UserNew'
import UserLogin from './components/pages/users/UserLogin'
import Home from './components/pages/Home';

function App() {

  const [currentUser,setCurrentUser] =useState (null)
  // useEffect -- if the user navigates away form the page, we will log them back in
  useEffect(() => {
    // check to see if token is in storage
    const token = localStorage.getItem('jwt')
    if (token) {
      // if so, we will decode it and set the user in app state
      setCurrentUser(jwt_decode(token))
    } else {
      setCurrentUser(null)
    }
    
  }, []) // happen only once
  // console.log(currentUser)



  return (
    <div className="App">
        <Home />
    </div>
  );
}

export default App;
