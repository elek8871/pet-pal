import Cuddles from "./Cuddles"
import Groomer from "./Groomer"
import Play_dates from "./Play_date"

export default function Appts(){
    
    return(
        <div>
            <h1>Appointments</h1>
            <Cuddles/>
            <Groomer/>
            <Play_dates/>
        </div>
    )
}