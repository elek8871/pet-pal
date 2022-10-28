import { useState } from "react"
import axios from "axios"
import jwt_decode from "jwt-decode"
import { Navigate, useNavigate, Link }  from "react-router-dom"


export default function UserNew({currentUser, setCurrentUser}){
// state for the controlled form
const [name, setName] =useState("")
const [email, setEmail]= useState("")
const [password, setPassword] = useState ("")
const [msg, setMsg] = useState(" ")
const navigate = useNavigate()

// // handle form submit
const handleSubmit = async e =>{
    e.preventDefault()
    try{
        // posts form body to the backend server
        const reqBody = {
            name, 
            email,
            password
        }
        await axios.post('/api/user', reqBody)
        // got to user profile page
        
    }catch(err){
        console.warn(err)
        if(err.response){
            if(err.response.status === 400){
                setMsg(err.response.data.msg)
            }
        }
    }
    navigate("/")
}

// render a navigate component if user is already logged in 
    if (currentUser){
        return <Navigate to = "/" />
    }
    return(
        <div>
           <h1> Sign up to add your pet!</h1>
            {/* display msg if error occurs */}
            <p> {msg}</p>

            {/* new user form */}
            <form onSubmit={handleSubmit} >
                <label htmlFor="name"> <h2>Name:</h2></label>
                    <input 
                        type = "text"
                        id = "name"
                        placeholder = "Enter your name"
                        onChange = {e=> setName(e.target.value)}
                        value = {name}
                        required
                    />
                <label htmlFor="email"> <h2>Email:</h2></label>
                    <input 
                        type = "text"
                        id = "email"
                        placeholder = "Enter your email"
                        onChange = {e=> setEmail(e.target.value)}
                        value = {email}
                        required
                        />
                <label htmlFor="password"> <h2>Password:</h2></label>
                    <input 
                        type = "text"
                        id = "password"
                        placeholder = "Choose your password"
                        onChange = {e=> setPassword(e.target.value)}
                        value = {password}
                        required
                    />
                <button type="submit" className="bg-sky-500 hover:bg-sky-700 ..."><h2>Register</h2></button>
            </form>

            <div>
                <p>Already a member?<Link to="/user/login"><u>Login here</u></Link></p>
            </div>

        </div>
    )
}