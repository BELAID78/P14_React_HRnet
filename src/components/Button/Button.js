import React from 'react'

import './button.css'

function Button({label, classname}) {
  return (
    <button className={classname}>{label}</button>
  )
}

export default Button