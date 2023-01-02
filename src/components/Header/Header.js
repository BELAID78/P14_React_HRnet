import React from 'react'

import './header.css'

function Header({children}) {
    return (
        <header>
            {children}
        </header>
    )
}

export default Header