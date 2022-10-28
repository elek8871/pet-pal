import SelectionCards from '../partials/SelectionCards'
import Daily from './daily_needs/Daily'
import Appts from './appointments/Appts'

export default function Home(){
    return (
        <div>
            <h1 class="text-3xl">Welcome to Pet Pal!</h1>
            <h3 class="text-1xl">Add a pet to get started!</h3>
                <div className='row'>
                 <div className=' selectioncard column'><SelectionCards /></div>  
                 <div className=' selectioncard column'><Daily/></div>  
                 <div className=' selectioncard column'><Appts/></div>  
                    
                    
                </div>
        </div>
    )
}