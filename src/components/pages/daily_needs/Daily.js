import Food from "./Food"
import Walk from "./Walk"
import Potty_trip from "./Potty_trip"
import Meds from "./Meds"

export default function Daily(){
    
    return(
        <div>
            <h1>Daily needs</h1>
            <Food/>
            <Walk/>
            <Potty_trip/>
            <Meds/>
        </div>
    )
}