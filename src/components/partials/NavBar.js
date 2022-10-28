import { Link } from "react-router-dom";

export default function NavBar({currentUser, setCurrentUser}){

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

    const loggedIn = (
        <>
        <Link to = "/user/profile"> Your Profile </Link> 
        <Link to ="/"> <span onClick={handleLogout}>Log Out </span></Link> 
        </>
    )

    const loggedOut =(
        <>
        <Link to= "/user/new" className="hover:bg-white ..."> Sign Up </Link> 
        <Link to= "/user/login" className="hover:bg-white ..."> Log into your Account</Link> 
        </>

    )

    return(
        <nav>
            <div>
            <Link to='/' className="hover:bg-white ...">Home</Link>
            <Link to='/pet/new' className="hover:bg-white ...">Add your pet</Link>
            {currentUser ? loggedIn : loggedOut}
            </div>
        </nav>
    )
}