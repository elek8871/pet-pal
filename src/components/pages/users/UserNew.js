import { useState } from "react"
import axios from "axios"
import { Navigate, useNavigate, Link }  from "react-router-dom"


export default function UserNew({currentUser, setCurrentUser}){
// state for the controlled form
const [username, setUsername] =useState("")
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
            username, 
            email,
            password
        }
        console.log('BANANA', reqBody)
        await axios.post('http://localhost:8000/api/user/', reqBody)
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
                <label htmlFor="username"> <h2>username:</h2></label>
                    <input 
                        type = "text"
                        id = "username"
                        placeholder = "Enter your username"
                        onChange = {e=> setUsername(e.target.value)}
                        value = {username}
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