import React from 'react'

import './dataInput.css'

function DateInput({label, htmlFor}) {
    return (
        <div className='date-input'>
            <label htmlFor={htmlFor}>{label}</label>
            <input id={htmlFor} type='date' />
        </div>
    )
}

export default DateInput