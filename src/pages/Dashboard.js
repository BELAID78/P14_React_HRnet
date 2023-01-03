import React from 'react'
import { NavLink } from 'react-router-dom'

import Header from '../components/Header/Header';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';

function Dashboard() {
    return (
        <div className='content'>
            <Header>
                <h2>DASHBOARD</h2>
            </Header>

            <Breadcrumb>
                <NavLink to='/'>Dashboard</NavLink>
            </Breadcrumb>
        </div>
    )
}

export default Dashboard