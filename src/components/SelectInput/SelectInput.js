import React from 'react'

import './selectInput.css'

function SelectInput({label, htmlFor, data}) {
    return (
        <div className='select-input'>
            <label htmlFor={htmlFor}>{label}</label>
            <select id={htmlFor}>
                {
                    data.map(item => <option key={item.id}>{item.value}</option>)
                }
            </select>
        </div>
    )
}

export default SelectInput