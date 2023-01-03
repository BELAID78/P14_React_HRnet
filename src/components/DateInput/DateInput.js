import React, { useState } from 'react'

import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";
import './dataInput.css'

function DateInput({label, htmlFor}) {
    const [date, setDate] = useState(new Date());

    return (
        <div className='date-input'>
            <label htmlFor={htmlFor}>{label}</label>
            <DatePicker
                id={htmlFor} 
                selected={date}
                onChange={(date) => setDate(date)} />
        </div>
    );
}

export default DateInput