import React, { useState } from 'react'

import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";
import './dataInput.css'

function DateInput({label, htmlFor, value = new Date(), onchange = () => {}}) {
    const [date, setDate] = useState(value);

    const handleChangeDate = (date) => {
        setDate(date)
        onchange(date)
    }

    return (
        <div className='date-input'>
            <label htmlFor={htmlFor}>{label}</label>
            <DatePicker
                id={htmlFor} 
                selected={date}
                onChange={handleChangeDate} />
        </div>
    );
}

export default DateInput