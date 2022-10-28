import Food from "./Food"
import Walk from "./Walk"
import Potty_trip from "./Potty_trip"
import Meds from "./Meds"
import TableDatePicker from "./TableDatePicker"

export default function Daily(){
    
    return(
        <div>
            <h1 class="text-2xl">Daily needs</h1>
            <Food/>
            <Walk/>
            <Potty_trip/>
            <TableDatePicker/>
            {/* <Meds /> */}
        </div>
    )
}