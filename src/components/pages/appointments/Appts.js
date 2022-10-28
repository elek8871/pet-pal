import Cuddles from "./Cuddles"
import Groomer from "./Groomer"
import Play_dates from "./Play_date"

export default function Appts(){
    
    return(
        <div>
            <h1 class="text-2xl">Appointments</h1>
            <Cuddles/>
            <Groomer/>
            <Play_dates/>
        </div>
    )
}