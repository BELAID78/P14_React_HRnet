import React from 'react'

import './datatablefilter.css'

function DataTableFilter({filterText, onFilter}) {
    return (
        <input 
            className='datatable-filter'
            id="search"
            type="text"
            placeholder="Filter By First or Last Name"
            aria-label="Search Input"
            value={filterText}
            onChange={onFilter} />
    )
}

export default DataTableFilter