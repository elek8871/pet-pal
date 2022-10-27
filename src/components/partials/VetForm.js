import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"


export default function VetForm(){

    const [form, setForm] = useState({
        date: "",
        visit_type: "",
        pet_weight: "",
        shots: "",
        meds: "",
        other: "",
        tx_plan: ""
    })

    const [errorMessage, setErrorMessage] = useState('')

    const navigate = useNavigate()
    const {id} = useParams()

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

            const response = await axios.post(`/pet/${id}/health`, form, options)
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
        <h2>What did they do at the vet today?</h2>
        <p>{errorMessage}</p>

        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='date'><h2>Date:</h2></label>
                <input 
                    type='text'
                    id='date'
                    value={form.date}
                    placeholder="What date was your visit?"
                    onChange={e => setForm ({ ...form, date: e.target.value})}
                    />
            </div>
            <div>
                <label htmlFor='visit_type'><h2>Visit type:</h2></label>
                <input 
                    type='text'
                    id='visit_type'
                    value={form.visit_type}
                    placeholder='What type of visit was it?'
                    onChange={e => setForm ({ ...form, visit_type: e.target.value})}
                    />
            </div>
            <div>
                <label htmlFor='pet_weight'><h2>Weight:</h2></label>
                <input 
                    type='text'
                    id='pet_weight'
                    value={form.pet_weight}
                    placeholder="What does you pet weight?"
                    onChange={e => setForm ({ ...form, pet_weight: e.target.value})}
                    />
            </div>
            <div>
                <label htmlFor='shots'><h2>Shots:</h2></label>
                <input 
                    type='text'
                    id='shots'
                    value={form.shots}
                    placeholder='Did they get any shots this visit?'
                    onChange={e => setForm ({ ...form, shots: e.target.value})}
                    />
            </div>
            <div>
                <label htmlFor='meds'><h2>medicines:</h2></label>
                <input 
                    type='text'
                    id='meds'
                    value={form.meds}
                    placeholder='Were they prescribed any medication?'
                    onChange={e => setForm ({ ...form, meds: e.target.value})}
                    />
            </div>
            <div>
                <label htmlFor='other'><h2>Other:</h2></label>
                <input 
                    type='text'
                    id='other'
                    value={form.other}
                    placeholder='Additional notes'
                    onChange={e => setForm ({ ...form, other: e.target.value})}
                    />
            </div>
            <div>
                <label htmlFor='tx_plan'><h2>Treatment plan:</h2></label>
                <input 
                    type='text'
                    id='tx_plan'
                    value={form.tx_plan}
                    placeholder='What is the treatment plan?'
                    onChange={e => setForm ({ ...form, tx_plan: e.target.value})}
                    />
            </div>

            <button type='submit'><h3>Add your visit</h3></button>

        </form>
    </div>
    )
}