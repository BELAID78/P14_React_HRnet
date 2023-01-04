import React from 'react'

import './card.css'

function Card({title, svg, total, label, className = ''}) {
    return (
        <div className={className}>
            <h3 className='text-center font-bold'>{title}</h3>
            <div className='card-content'>
                {svg}
                <span>{total}</span>
                <span>{label}</span>
            </div>
        </div>
    )
}

export default Card