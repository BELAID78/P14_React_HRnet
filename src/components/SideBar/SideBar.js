import React from 'react'
import { NavLink } from 'react-router-dom'

import dashboard from './../../images/dashboard'
import addUser from './../../images/add_user'
import users from './../../images/users'

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
                    <NavLink to='/'>
                        <i className='dashboard-icon'>{dashboard}</i>
                        Dashboard
                    </NavLink>
                </li>
                <li className='devider-list-item'>
                    Employees
                </li>
                <li className='list-item'>
                    <NavLink to='employee'>
                        <i className='users-icon'>{users}</i>
                        All
                    </NavLink>
                </li>
                <li className='list-item'>
                    <NavLink to='create-employee'>
                        <i className='add-user-icon'>{addUser}</i>
                        Create
                    </NavLink>
                </li>
            </ul>

        </div>
    )
}

export default SideBar