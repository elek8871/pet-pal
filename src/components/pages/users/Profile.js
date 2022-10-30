import { Link } from "react-router-dom"
import { useState, UseEffect, useEffect } from "react"
import axios from "axios"


export default function Profile(){
    const [pets, setPets] = useState([])
    const [errorMessage, setErrorMessage] = useState([])

    useEffect(()=>{
        const getPets = async ()=>{
            try{
                const response = await axios.get(("http://localhost:8000/api/user/pet/"))
                setPets(response.data.pets)
            }catch(err){
                console.warn(err)
                if(err.response){
                    setErrorMessage(err.response.data.message)
                }
            }
        }
        getPets()
    }, [])
    console.log(pets)

    const petList = pets.map(pet =>{
        return(
            // not sure if this is correct w django? I feel like the id is different
            <div key= {pet._id}>
                <Link to = {"/user/{pet._id}/pet/"}> {pet.name}'s diary</Link>
            </div>
        )
    })

    return(
        <div>
            <h1> Welcome to Pet Pal </h1>
            <p> Pet Pal is designed to keep you up to date on your pets appointments and needs</p>
            {errorMessage}
            {/* link to add a new pet */}
            <Link to = "/pet/new/"> Add your pet</Link>
            {/* link to petdiary */}
            <Link to="/pet/home/"> Your pets diary </Link>
        </div>
    )
}