import React from 'react'

import './selectInput.css'

function SelectInput({label, htmlFor, data, value = '', onchange = () => {}}) {
    const handleChange = (e) => {
        onchange(e.target.value)
    }

    return (
        <div className='select-input'>
            <label htmlFor={htmlFor}>{label}</label>
            <select value={value} onChange={handleChange} id={htmlFor}>
                {
                    data.map(item => <option key={item.id} value={item.id} >{item.value}</option>)
                }
            </select>
        </div>
    )
}

export default SelectInput