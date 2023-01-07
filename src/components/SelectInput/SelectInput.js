import React from 'react'

import Select from 'react-select-menu/dist/components/index'

import './selectInput.css'

function SelectInput({label, htmlFor, data, value = '', onchange = () => {}}) {
    return (
        <div className='select-input'>
            <label htmlFor={htmlFor}>{label}</label>
            <Select 
                tabIndex="" 
                label="" 
                modifier={{currentValue: value, valueModifier: onchange}} 
                data={data} 
                dataKey={{id:'id', value: 'value'}} 
                zIndex="" />
        </div>
    )
}

export default SelectInput