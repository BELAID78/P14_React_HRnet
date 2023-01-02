import React from 'react'
import { NavLink } from 'react-router-dom'

import './sidebar.css'

function SideBar() {
    return (
        <div className='sidebar'>

            <h1 className='logo'>
                <span className='first-part'>HR</span>
                <span className='second-part'>net</span>
            </h1>

            <ul className='list'>
                <li className='list-item'>
                    <NavLink to='/'>Dashboard</NavLink>
                </li>
                <li className='devider-list-item'>
                    Employees
                </li>
                <li className='list-item'>
                    <NavLink to='employee'>All</NavLink>
                </li>
                <li className='list-item'>
                    <NavLink  to='create-employee'>Create</NavLink>
                </li>
            </ul>

        </div>
    )
}

export default SideBar