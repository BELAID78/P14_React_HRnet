import React from 'react'

import './breadcrumb.css'

function Breadcrumb({children}) {
    return (
        <div className='breadcrumb'>
            {children}
        </div>
    )
}

export default Breadcrumb