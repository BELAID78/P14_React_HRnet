import React from 'react'

import './createEmployeeForm.css'

function CreateEmployeeForm() {
    return (
        <div className='create-form'>
            <form>
                <div className='employee-informations'>
                    <h3>Employee informations:</h3>
                </div>
                <div className='employee-address'>
                    <h3>Employee address:</h3>
                </div>
            </form>
        </div>
    )
}

export default CreateEmployeeForm