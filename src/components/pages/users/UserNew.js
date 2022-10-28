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
        const response = await axios.post('/api-v1/user', reqBody)
        // save the token in local storage
        const { token } = response.data
        localStorage.setItem("jwt", token)
        // decode the token
        const decoded = jwt_decode(token)
        // set the user in Apps state to be the decoded token
        setCurrentUser(decoded)
        // got to user profile page
        navigate("/")

    }catch(err){
        console.warn(err)
        if(err.response){
            if(err.response.status === 400){
                setMsg(err.response.data.msg)
            }
        }
    }
}

// render a navigate component if user is already logged in 
    if (currentUser){
        return <Navigate to = "/" />
    }
    return(
        // sign up div
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"> Sign up to add your pet!</h2>
                {/* display msg if error occurs */}
                <p className="mt-2 text-center text-sm text-gray-600"> {msg} </p>
            </div>

            {/* new user form */}
                <form className="mt-8 space-y-6" action="#" method="POST">
                <input type="hidden" name="remember" defaultValue="true" />

                <div className="-space-y-px rounded-md shadow-sm">

                    <div>
                        <label htmlFor="name" className="sr-only"> Name:</label>
                            <input 
                            type = "text"
                            id = "name"
                            placeholder = "Enter your name"
                            className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            onChange = {e=> setName(e.target.value)}
                            value = {name}
                            required
                            />
                    </div>

                    <div>
                    <label htmlFor="email" className="sr-only"> Email:</label>
                        <input 
                            type = "text"
                            id = "email"
                            placeholder = "Enter your email"
                            className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            onChange = {e=> setEmail(e.target.value)}
                            value = {email}
                            required
                            />
                    </div>

                    <div>
                    <label htmlFor="password" className="sr-only"> Password: </label>
                        <input 
                            type = "text"
                            id = "password"
                            placeholder = "Choose your password"
                            className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            onChange = {e=> setPassword(e.target.value)}
                            value = {password}
                            required
                        />
                    </div>
                </div>

                <div>
                    <button type="submit" class="bg-sky-500 hover:bg-sky-700 ..."> 
                    Create Account  
                    </button>
                </div>
                </form>

                <div className="text-sm">
                    <p>Already a member?<Link to="/user/login"><u>Login here</u></Link></p>
                </div>
        </div>

    )
}