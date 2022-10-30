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

  // const [currentUser,setCurrentUser] = useState (null)
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('jwt')? { userId: jwt_decode(localStorage.getItem('jwt')).user_id }: null)


  // useEffect -- if the user navigates away form the page, we will log them back in
  useEffect(() => {
    // check to see if token is in storage
    const token = localStorage.getItem('jwt')
    // if (token) {
    //   // if so, we will decode it and set the user in app state
    //   setCurrentUser(jwt_decode(token))
    // } else {
    //   setCurrentUser(null)
    // }
    if (token){
      const decoded =jwt_decode(token)
      setCurrentUser({userId: decoded.user_id})
    }else{
      setCurrentUser(null)
    }
    
  }, []) // happen only once
  console.log(currentUser)

  // event handler to log the user out when needed
  const handleLogout = () => {
    // check to see if a token exists in local storage
    if (localStorage.getItem('jwt')) {
       // if so, delete it
      localStorage.removeItem('jwt')
      // set the user in the App state to be null
      setCurrentUser(null)      
      }
    }


  return (
    <div className="App">
        <Router>
          <NavBar 
           currentUser={currentUser} setCurrentUser={setCurrentUser}/>
            
          <Routes>

            <Route path='/' element={<Home
               currentUser={currentUser} setCurrentUser={setCurrentUser}/>} /> 

            <Route path='/pet/new' element={<PetNew
               currentUser={currentUser} setCurrentUser={setCurrentUser}/>} /> 

            <Route path='/user/new' element={<UserNew 
                currentUser={currentUser} setCurrentUser={setCurrentUser}/>} /> 

            <Route path='/user/login' element={<UserLogin
               currentUser={currentUser} setCurrentUser={setCurrentUser} />} /> 

            <Route path='/user/profile' element={<Profile 
               currentUser={currentUser} setCurrentUser={setCurrentUser}/> }/> 
             
            </Routes>
        </Router>
    </div>
  );
}

 
