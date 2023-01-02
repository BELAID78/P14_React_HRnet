import React from 'react'

import './textInput.css';

function TextInput({label, htmlFor, type, classname}) {

    return (
        <div className={'text-input ' + classname}>
            <label htmlFor={htmlFor}>{label}</label>
            <input id={htmlFor} type={type} />
        </div>
    )
}

export default TextInput