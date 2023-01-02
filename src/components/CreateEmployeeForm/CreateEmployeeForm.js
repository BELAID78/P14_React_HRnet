import React from 'react'

import './createEmployeeForm.css'

import departments from '../../__mock__/departments'
import states from '../../__mock__/states'

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

                    <div className='text-input'>
                        <label htmlFor='street'>Street</label>
                        <input id='street' type='text' />
                    </div>

                    <div className='text-input'>
                        <label htmlFor='city'>City</label>
                        <input id='city' type='text' />
                    </div>

                    <div className='text-input'>
                        <label htmlFor='zip-code'>Zip Code</label>
                        <input id='zip-code' type='text' />
                    </div>

                    <div className='select-input'>
                        <label htmlFor='department'>Department</label>
                        <select id='department'>
                            {
                                states.map(item => <option key={item.id}>{item.value}</option>)
                            }
                        </select>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default CreateEmployeeForm