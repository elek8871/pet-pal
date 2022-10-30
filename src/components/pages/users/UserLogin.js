import { useState } from "react"
import axios from "axios"
import jwt_decode from "jwt-decode"
import { useNavigate, Navigate } from "react-router-dom"

export default function UserLogin( {currentUser, setCurrentUser}){
    // states for the controlled form
    const [username, setUsername] =useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] =useState("")
    const [msg, setMsg] = useState("")
    const navigate = useNavigate()

    // submit login form event handler
    const handleSubmit = async e =>{
        e.preventDefault()
        try{
        // post form to backend
            const reqBody = {
                username,
                email,
                password
            }
            console.log('TACO', reqBody)
           const response = await axios.post(`http://localhost:8000/api/user/login/`, reqBody)

            // save the token in local storage
            const { token } = response.data
            localStorage.setItem("jwt", token)
            // decode the token
            const decoded= jwt_decode(token)
            // set the user in app state
            setCurrentUser(decoded)
        }catch(err){
            console.warn(err)
            if(err.response === 400 ){
                setMsg(err.response.data.msg)
            }
        }
        navigate('/user/profile')
    }
    // conditionally render a navigate component
    if (currentUser){
        return <Navigate to="/user/profile" />
    }


    return(
        <div>
            <h1> Login to access your account </h1>
            {msg}
            <form onSubmit={handleSubmit}>
            <label htmlFor="username"><h2>Username:</h2></label>
                    <input
                        type = "text"
                        id = "username"
                        placeholder = "your username"
                        onChange ={e=> setEmail(e.target.value)}
                        value={username}
                    />
                <label htmlFor="email"><h2>Email:</h2></label>
                    <input
                        type = "text"
                        id = "email"
                        placeholder = "your email"
                        onChange ={e=> setEmail(e.target.value)}
                        value={email}
                    />
                <label htmlFor="password"><h2>Password:</h2></label> 
                    <input
                        type = "text"
                        id = "password"
                        placeholder = "enter your password"
                        onChange={e => setPassword (e.target.value)}
                        value={password}
                    />
                <button type="submit" className="bg-sky-500 hover:bg-sky-700 ..."><h2>Login</h2></button>
            </form>
        </div>
    )
}