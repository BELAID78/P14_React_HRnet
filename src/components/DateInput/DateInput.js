import React, { useState } from 'react'

import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";
import './dataInput.css'

function DateInput({label, htmlFor, value = new Date(), onchange = () => {}, tabIndex = 0}) {
    const [date, setDate] = useState(value);

    const handleChangeDate = (date) => {
        setDate(date)
        onchange(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`)
    }

    return (
        <div className='date-input'>
            <label htmlFor={htmlFor}>{label}</label>
            <DatePicker
                tabIndex={tabIndex} 
                id={htmlFor} 
                selected={date}
                onChange={handleChangeDate} />
        </div>
    );
}

export default DateInput