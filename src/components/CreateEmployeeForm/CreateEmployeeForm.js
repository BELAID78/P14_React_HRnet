import React from 'react'

import TextInput from './../TextInput/TextInput'

import departments from '../../__mock__/departments'
import states from '../../__mock__/states'

import './createEmployeeForm.css'

function CreateEmployeeForm() {
    return (
        <div className='create-form'>
            <form>
                <div className='employee-informations'>
                    <h3>Employee informations:</h3>

                    <TextInput label='First Name' htmlFor='first-name' type='text' />

                    <TextInput label='Last Name' htmlFor='last-name' type='text' />

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

                    <TextInput label='Street' htmlFor='street' type='text' />

                    <TextInput label='City' htmlFor='city' type='text' />

                    <TextInput label='Zip Code' classname='top-15' htmlFor='zip-code' type='text' />

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

            <div className='m-t-30 text-right'>
                <button className='btn btn-pink btn-rounded'>Save</button>
            </div>
        </div>
    )
}

export default CreateEmployeeForm