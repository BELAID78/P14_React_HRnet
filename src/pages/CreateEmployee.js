import React from 'react'
import { NavLink } from 'react-router-dom'

import Header from '../components/Header/Header';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import CreateEmployeeForm from '../components/CreateEmployeeForm/CreateEmployeeForm';

function CreateEmployee() {
    return (
        <div className='content'>

            <Header>
                <h2>CREATE EMPLOYEE</h2>
            </Header>

            <Breadcrumb>
                <NavLink to='/employee'>Employee</NavLink> / <NavLink to='/create-employee'>Create</NavLink>
            </Breadcrumb>

            <CreateEmployeeForm />

        </div>
    )
}

export default CreateEmployee