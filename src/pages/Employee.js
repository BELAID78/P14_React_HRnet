import React from 'react'
import { NavLink } from 'react-router-dom'

import Header from '../components/Header/Header';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';

function Employee() {
    return (
        <div className='content'>
            <Header>
                <h2>EMPLOYEE</h2>
            </Header>

            <Breadcrumb>
                <NavLink to='/employee'>Employee</NavLink>
            </Breadcrumb>
        </div>
    )
}

export default Employee