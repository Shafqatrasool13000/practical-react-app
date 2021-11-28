import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePick = () => {
    const [startDate, setStartDate] = useState(new Date())
    return (
       <div style={{width:'180px'}}>

            <DatePicker  isClearable={true} selected={startDate} onChange={(date)=>setStartDate(date)}  dateFormat="dd/MM/yyyy" onInputClick={true}
            // maxDate={new Date()}   
            filterDate={date=>date.getDay()!==6&&date.getDay()!==0}
            showYearDropdown
            scrollableMonthYearDropdown
            />
            </div>

  
    )
}

export default DatePick
