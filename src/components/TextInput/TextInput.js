import React, { useRef, useState } from 'react'

import './textInput.css';

function TextInput({label, htmlFor, type, value = '', onchange = () => {}, classname = '', tabIndex = 0}) {
    const [active, setActive] = useState(false);
    const inputRef = useRef();

    const handleActive = () => {
        setActive(true)
    }

    const handleBlur = () => {
        if(inputRef.current.value === '') {
            setActive(false)
        }
    }

    const handleChange = (e) => {
        onchange(e.target.value);
    }

    return (
        <div className={'text-input ' + classname}>

            <label 
                className={active ? 'active' : ''} 
                htmlFor={htmlFor} >

                    {label}

            </label>

            <input 
                tabIndex={tabIndex} 
                ref={inputRef} 
                id={htmlFor} 
                type={type} 
                defaultValue={value} 
                onChange = {handleChange} 
                onFocus={handleActive} 
                onBlur={handleBlur} />
        </div>
    )
}

export default TextInput