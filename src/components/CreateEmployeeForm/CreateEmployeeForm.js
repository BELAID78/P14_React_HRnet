import React, { useState } from 'react'

import TextInput from './../TextInput/TextInput'
import DateInput from './../DateInput/DateInput'
import SelectInput from './../SelectInput/SelectInput';
import Button from './../Button/Button';

import departments from '../../__mock__/departments'
import states from '../../__mock__/states'

import './createEmployeeForm.css'

function CreateEmployeeForm() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [zipCode, setZipCode] = useState(null)
    const [birthDate, setBirthDate] = useState(null)
    const [startDate, setStartDate] = useState(null)

    const handleSubmit = () => {
        console.log(firstName)
        console.log(lastName)
        console.log(street)
        console.log(city)
        console.log(zipCode)
        console.log(birthDate)
        console.log(startDate)
    }

    return (
        <div className='create-form'>
            <form>
                <div className='employee-informations'>
                    <h3>Employee informations:</h3>

                    <TextInput 
                        value={firstName} 
                        onchange={setFirstName} 
                        label='First Name' 
                        htmlFor='first-name' 
                        type='text' />

                    <TextInput 
                        value={lastName} 
                        onchange={setLastName} 
                        label='Last Name' 
                        htmlFor='last-name' 
                        type='text' />

                    <DateInput 
                        label='Date of Birth' 
                        htmlFor='date-of-birth' 
                        value={new Date()} 
                        onchange={setBirthDate} />

                    <DateInput 
                        label='Start Date' 
                        htmlFor='start-date' 
                        value={new Date()} 
                        onchange={setStartDate} />

                    <SelectInput 
                        label='Department' 
                        htmlFor='department' 
                        data={departments} />
                </div>
                <div className='employee-address'>
                    <h3>Employee address:</h3>

                    <TextInput 
                        value={street} 
                        onchange={setStreet} 
                        label='Street' 
                        htmlFor='street' 
                        type='text' />

                    <TextInput 
                        value={city} 
                        onchange={setCity} 
                        label='City' 
                        htmlFor='city' 
                        type='text' />

                    <TextInput 
                        value={zipCode} 
                        onchange={setZipCode} 
                        label='Zip Code' 
                        classname='top-15' 
                        htmlFor='zip-code' 
                        type='number' />

                    <SelectInput 
                        label='State' 
                        htmlFor='state' 
                        data={states} />

                </div>
            </form>

            <div className='m-t-30 text-right'>
                <Button 
                    label='Save' 
                    classname='btn btn-pink btn-rounded' 
                    onclick={handleSubmit}
                    />
            </div>
        </div>
    )
}

export default CreateEmployeeForm