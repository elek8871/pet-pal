import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function TableDatePicker() {

 const [date, setDate] = useState(new Date());
 const [startDate, setStartDate] = useState(new Date());
 const [endDate, setEndDate] = useState(new Date());

 return (
    <div> 
    <DatePicker
        showTimeSelect
        dateFormat="MMMM d, yyyy h:mmaa"
        selected={startDate}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        onChange={date => setStartDate(date)}
/>

    {/* Uncomment out if you want a end date and time */}
    {/* <DatePicker
        showTimeSelect
        dateFormat="MMMM d, yyyy h:mmaa"
        selected={startDate}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        onChange={date => setEndDate(date)}
/> */}
   </div>
 );
}