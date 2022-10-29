import { useEffect, useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"


export default function PetNew(){
    const [petname, setPetname] = useState("")
    const [breed, setBreed] = useState("")
    const [date_of_birth, setDate_of_birth] = useState("")
    const [nickname, setNickname] = useState("")
    const [catchphrase, setCatchphrase] = useState("")

    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()

    // submit event handler
    const handleSubmit = async e => {   
        e.preventDefault()
        try {
             const reqBody ={
                petname,
                breed,
                date_of_birth,
                nickname,
                catchphrase
            }

            await axios.post('http://localhost:8000/api/pet/', reqBody)
            console.log('CAKE', reqBody)

        } catch (err) {
            console.warn(err)
            if (err.response) {
                setErrorMessage(err.response.data.message)
            }
        }
        navigate('/')
    }
    return(
        <div>
            <h2>Need to add a new pet? </h2>
            <p>{errorMessage}</p>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='Name'><h2>Name:</h2></label>
                    <input 
                        type='text'
                        id='petname'
                        // value={form.Name}
                        placeholder="What's your pet's name?"
                        onChange={e => setPetname (e.target.value)}
                        />
                </div>
                <div>
                    <label htmlFor='Breed'><h2>Breed:</h2></label>
                    <input 
                        type='text'
                        id='Breed'
                        // value={form.Breed}
                        placeholder='What breed is your pet?'
                        onChange={e => setBreed ( e.target.value)}
                        />
                </div>
                <div>
                    <label htmlFor='date_of_birth'><h2>Date of birth/adoption:</h2></label>
                    <input 
                        type='text'
                        id='date_of_birth'
                        // value={form.date_of_birth}
                        placeholder='When was your pet born or adopted?'
                        onChange={e => setDate_of_birth (e.target.value)}
                        />
                </div>
                <div>
                    <label htmlFor='Nickname'><h2>Nickname:</h2></label>
                    <input 
                        type='text'
                        id='Nickname'
                        // value={form.Nickname}
                        placeholder='Does your pet have a nickname?'
                        onChange={e => setNickname(e.target.value)}
                        />
                </div>
                <div>
                    <label htmlFor='Catchphrase'><h2>Catchphrase:</h2></label>
                    <input 
                        type='text'
                        id='Catchphrase'
                        // value={form.Catchphrase}
                        placeholder="What's on your pets mind?"
                        onChange={e => setCatchphrase (e.target.value)}
                        />
                </div>

                <button type='submit'><h3>Add your pet</h3></button>

            </form>
        </div>
    )
}    




  // const token = localStorage.getItem('jwt')
            // const options = {
            //     headers: {
            //         'Authorization': token
            //     }
            // }