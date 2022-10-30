import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { useState , useEffect} from 'react';
import jwt_decode from "jwt-decode"

import UserNew from './components/pages/users/UserNew'
import UserLogin from './components/pages/users/UserLogin'
import Home from './components/pages/Home';
import Profile from './components/pages/users/Profile';
import ProfileEdit from './components/pages/users/ProfileEdit';
import PetEdit from './components/pages/pets/PetEdit'
import PetNew from './components/pages/pets/PetNew'
import NavBar from './components/partials/NavBar';


export default function App() {

  const [currentUser,setCurrentUser] = useState (null)
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
        <Router>
          <NavBar />
            <Routes>

              <Route path='/' element={<Home />} /> 
              <Route path='/pet/new' element={<PetNew/>} /> 
              <Route path='/user/new' element={<UserNew />} /> 
              <Route path='/user/login' element={<UserLogin />} /> 
              <Route path='/user/profile' element={<Profile /> }/> 
             
            </Routes>
        </Router>
    </div>
  );
}

 
