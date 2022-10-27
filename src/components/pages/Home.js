import SelectionCards from '../partials/SelectionCards'
import Daily from './daily_needs/Daily'
import Appts from './appointments/Appts'

export default function Home(){
    return (
        <div>
            <h1>Welcome to Pet Pal!</h1>
            <h3>Add a pet to get started!</h3>
            <SelectionCards />
            <Daily/>
            <Appts/>
        </div>
    )
}