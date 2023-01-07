import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';

import Header from '../components/Header/Header';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Card from '../components/Card/Card';
import EmployeeBarChart from '../components/EmployeeBarChart/EmployeeBarChart';

import usersAsSvg from '../images/users';
import statesAsSvg from '../images/states';
import departmentsAsSvg from '../images/departments';

import departments from '../__mock__/departments';

/**
 * group employee by deprtment
 * 
 * @param {array} departments 
 * @param {array} employees 
 * @returns {array}
 */
const groupByDepartment = (departments, employees) => {
    return departments.map(department => {
        let departmentName = department.value;

        let result = employees.filter(employee => employee.department === departmentName)

        return {name: departmentName, value: result.length}
    })
}

function Dashboard() {
    const employees = useSelector(state => state.employees)

    const employeeGroupByDepartments = groupByDepartment(departments, employees)

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
                        total={employees.length} 
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
                        <EmployeeBarChart label='Employee bar chart by departments' data={employeeGroupByDepartments} keys={{name:'name', value: 'value'}}/>
                    </div>
                    <div className='users-by-start-date'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard