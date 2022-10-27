import { useEffect, useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"


export default function PetNew(){

    const [form, setForm] = useState({
        Name: '',
        Breed: '',
        Date_of_birth: '',
        Nickname: '',
        Catchphrase: ''
    })

    const [errorMessage, setErrorMessage] = useState('')

    const navigate = useNavigate()

    // submit event handler
    const handleSubmit = async e => {   
        e.preventDefault()
        try {
            const token = localStorage.getItem('jwt')
            const options = {
                headers: {
                    'Authorization': token
                }
            }

            const response = await axios.post('/api-v1/pet/new', form, options)
            console.log(response.data)
            console.log(form)
            navigate('/user/profile')
        } catch (err) {
            console.warn(err)
            if (err.response) {
                setErrorMessage(err.response.data.message)
            }
        }
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
                        id='Name'
                        value={form.Name}
                        placeholder="What's your pet's name?"
                        onChange={e => setForm ({ ...form, Name: e.target.value})}
                        />
                </div>
                <div>
                    <label htmlFor='Breed'><h2>Breed:</h2></label>
                    <input 
                        type='text'
                        id='Breed'
                        value={form.Breed}
                        placeholder='What breed is your pet?'
                        onChange={e => setForm ({ ...form, Breed: e.target.value})}
                        />
                </div>
                <div>
                    <label htmlFor='date_of_birth'><h2>Date of birth/adoption:</h2></label>
                    <input 
                        type='text'
                        id='date_of_birth'
                        value={form.date_of_birth}
                        placeholder='When was your pet born or adopted?'
                        onChange={e => setForm ({ ...form, date_of_birth: e.target.value})}
                        />
                </div>
                <div>
                    <label htmlFor='Nickname'><h2>Nickname:</h2></label>
                    <input 
                        type='text'
                        id='Nickname'
                        value={form.Nickname}
                        placeholder='Does your pet have a nickname?'
                        onChange={e => setForm ({ ...form, Nickname: e.target.value})}
                        />
                </div>
                <div>
                    <label htmlFor='Catchphrase'><h2>Catchphrase:</h2></label>
                    <input 
                        type='text'
                        id='Catchphrase'
                        value={form.Catchphrase}
                        placeholder='When was your pet born or adopted?'
                        onChange={e => setForm ({ ...form, Catchphrase: e.target.value})}
                        />
                </div>

                <button type='submit'><h3>Add your pet</h3></button>

            </form>
        </div>
    )
}    