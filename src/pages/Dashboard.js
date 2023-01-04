import React from 'react'
import { NavLink } from 'react-router-dom'

import Header from '../components/Header/Header';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';

import usersAsSvg from '../images/users';
import statesAsSvg from '../images/states';
import departmentsAsSvg from '../images/departments';
import Card from '../components/Card/Card';

function Dashboard() {
    return (
        <div className='content'>
            <Header>
                <h2>DASHBOARD</h2>
            </Header>

            <Breadcrumb>
                <NavLink to='/'>Dashboard</NavLink>
            </Breadcrumb>

            <div className='dashboard-container'>
                <div className='total-container'>
                    <Card 
                        title='TOTAL USERS' 
                        svg={usersAsSvg} 
                        total='100' 
                        label='Users' 
                        className='users-card' />

                    <Card 
                        title='TOTAL STATES' 
                        svg={statesAsSvg} 
                        total='58' 
                        label='States' 
                        className='states-card' />

                    <Card 
                        title='TOTAL DEPARTMENTS' 
                        svg={departmentsAsSvg} 
                        total='5' 
                        label='Departments' 
                        className='departments-card' />
                </div>
                <div className='chart-container'>
                    <div className='users-by-department'>

                    </div>
                    <div className='users-by-start-date'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard