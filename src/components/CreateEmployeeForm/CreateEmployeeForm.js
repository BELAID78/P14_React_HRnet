import React from 'react'

import './createEmployeeForm.css'

import departments from '../../__mock__/departments'

function CreateEmployeeForm() {
    return (
        <div className='create-form'>
            <form>
                <div className='employee-informations'>
                    <h3>Employee informations:</h3>

                    <div className='text-input'>
                        <label htmlFor='first-name'>First Name</label>
                        <input id='first-name' type='text' />
                    </div>

                    <div className='text-input'>
                        <label htmlFor='last-name'>Last Name</label>
                        <input id='last-name' type='text' />
                    </div>

                    <div className='date-input'>
                        <label htmlFor='date-of-birth'>Date of Birth</label>
                        <input id='date-of-birth' type='date' />
                    </div>

                    <div className='date-input'>
                        <label htmlFor='start-date'>Start Date</label>
                        <input id='start-date' type='date' />
                    </div>

                    <div className='select-input'>
                        <label htmlFor='department'>Department</label>
                        <select id='department'>
                            {
                                departments.map(item => <option key={item.id}>{item.value}</option>)
                            }
                        </select>
                    </div>
                </div>
                <div className='employee-address'>
                    <h3>Employee address:</h3>
                </div>
            </form>
        </div>
    )
}

export default CreateEmployeeForm