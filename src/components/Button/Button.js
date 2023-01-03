import React from 'react'

import './button.css'

function Button({label, classname, onclick = () => {}}) {
  return (
    <button className={classname} onClick={onclick}>{label}</button>
  )
}

export default Button