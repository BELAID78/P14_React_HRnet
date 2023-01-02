import React, { useRef, useState } from 'react'

import './textInput.css';

function TextInput({label, htmlFor, type, classname}) {
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

    return (
        <div className={'text-input ' + classname}>
            <label className={active ? 'active' : ''} htmlFor={htmlFor}>{label}</label>
            <input ref={inputRef} id={htmlFor} type={type}  onFocus={handleActive} onBlur={handleBlur} />
        </div>
    )
}

export default TextInput