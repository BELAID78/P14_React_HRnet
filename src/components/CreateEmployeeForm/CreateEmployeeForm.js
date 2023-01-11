import React, { useState } from 'react'

import TextInput from './../TextInput/TextInput'
import DateInput from './../DateInput/DateInput'
import SelectInput from './../SelectInput/SelectInput';
import Button from './../Button/Button';

import departments from '../../__mock__/departments'
import states from '../../__mock__/states'

import './createEmployeeForm.css'
import { useDispatch } from 'react-redux';
import { create } from '../../redux/employeeSlice';
import Modal from '../Modal/Modal';

function CreateEmployeeForm() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [zipCode, setZipCode] = useState(null)
    const [birthDate, setBirthDate] = useState(null)
    const [startDate, setStartDate] = useState(null)
    const [department, setDepartment] = useState('Sales')
    const [state, setState] = useState('Alabama')

    const [isOpen, setIsOpen] = useState(false)

    const [errorsModalOpen, setErrorModalOpen] = useState(false)

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        street: '',
        city: '',
        zipCode: '',
        department: '',
        state: '',
    })

    const dipatch = useDispatch()

    const handleSubmit = () => {
        const employee = {
            firstName,
            lastName,
            street,
            city,
            zipCode,
            birthDate,
            startDate,
            department,
            state
        }

        validateCreateEmployee();
        
        if(firstName === '' || lastName === '' || street === '' || city === '' || zipCode === null || department === '' || state === '') {
            setErrorModalOpen(true)
            return false;
        }

        dipatch(create(employee))

        setIsOpen(true)
    }

    const validateCreateEmployee = () => {
        firstName === '' ? 
            setErrors(prevErrors => {
                return {
                    ...prevErrors, 
                    firstName: 'you must enter employee first name'
                }
            }) : 
            setErrors(prevErrors => {
                return {
                    ...prevErrors, 
                    firstName: ''
                }
            })

        lastName === '' ? 
            setErrors(prevErrors => {
                return {
                    ...prevErrors, 
                    lastName: 'you must enter employee last name'
                }
            }) :
            setErrors(prevErrors => {
                return {
                    ...prevErrors, 
                    lastName: ''
                }
            }) 

        street === '' ? 
            setErrors(prevErrors => {
                return {
                    ...prevErrors, 
                    street: 'you must enter employee street'
                }
            }) :
            setErrors(prevErrors => {
                return {
                    ...prevErrors, 
                    street: ''
                }
            }) 

        city === '' ? 
            setErrors(prevErrors => {
                return {
                    ...prevErrors, 
                    city: 'you must enter employee city'
                }
            }) : 
            setErrors(prevErrors => {
                return {
                    ...prevErrors, 
                    city: ''
                }
            }) 

        zipCode === null ? 
            setErrors(prevErrors => {
                return {
                    ...prevErrors, 
                    zipCode: 'you must enter employee zipCode'
                }
            }) :
            setErrors(prevErrors => {
                return {
                    ...prevErrors, 
                    zipCode: ''
                }
            }) 

        department === '' ? 
            setErrors(prevErrors => {
                return {
                    ...prevErrors, 
                    department: 'you must enter employee department'
                }
            }) :
            setErrors(prevErrors => {
                return {
                    ...prevErrors, 
                    department: ''
                }
            })

        state === '' ? 
            setErrors(prevErrors => {
                return {
                    ...prevErrors, 
                    state: 'you must enter employee state'
                }
            }) : 
            setErrors(prevErrors => {
                return {
                    ...prevErrors, 
                    state: ''
                }
            }) 
    }

    return (
        <div className='create-form'>
            <form>
                <div className='employee-informations'>
                    <h3>Employee informations:</h3>

                    <TextInput 
                        tabIndex={1}
                        value={firstName} 
                        onchange={setFirstName} 
                        label='First Name' 
                        htmlFor='first-name' 
                        type='text' />

                    <TextInput 
                        tabIndex={2}
                        value={lastName} 
                        onchange={setLastName} 
                        label='Last Name' 
                        htmlFor='last-name' 
                        type='text' />

                    <DateInput 
                        tabIndex={3}
                        label='Date of Birth' 
                        htmlFor='date-of-birth' 
                        value={new Date()} 
                        onchange={setBirthDate} />

                    <DateInput 
                        tabIndex={4}
                        label='Start Date' 
                        htmlFor='start-date' 
                        value={new Date()} 
                        onchange={setStartDate} />

                    <SelectInput 
                        tabIndex={5}
                        label='Department' 
                        htmlFor='department' 
                        data={departments} 
                        value={department}
                        onchange={setDepartment} />
                </div>
                <div className='employee-address'>
                    <h3>Employee address:</h3>

                    <TextInput 
                        tabIndex={6}
                        value={street} 
                        onchange={setStreet} 
                        label='Street' 
                        htmlFor='street' 
                        type='text' />

                    <TextInput 
                        tabIndex={7} 
                        value={city} 
                        onchange={setCity} 
                        label='City' 
                        htmlFor='city' 
                        type='text' />

                    <TextInput 
                        tabIndex={8}
                        value={zipCode} 
                        onchange={setZipCode} 
                        label='Zip Code' 
                        classname='top-15' 
                        htmlFor='zip-code' 
                        type='number' />

                    <SelectInput 
                        tabIndex={9} 
                        label='State' 
                        htmlFor='state' 
                        data={states} 
                        value={state}
                        onchange={setState} />

                </div>
            </form>

            <div className='m-t-30 text-right'>
                <Button 
                    label='Save' 
                    classname='btn btn-pink btn-rounded' 
                    onclick={handleSubmit}
                    />
            </div>

            <Modal title='create employee notification' modalSize='sm' modalHandler={{ isOpen, setIsOpen}}>
                <p>Employee Created!</p>
            </Modal>

            <Modal title='create new employee validation error' modalSize='sm' modalHandler={{ isOpen: errorsModalOpen, setIsOpen: setErrorModalOpen}}>
                { errors.firstName !== '' && <p>{errors.firstName}</p> }
                { errors.lastName !== '' && <p>{errors.lastName}</p> }
                { errors.street !== '' && <p>{errors.street}</p> }
                { errors.city !== '' && <p>{errors.city}</p> }
                { errors.zipCode !== '' && <p>{errors.zipCode}</p> }
                { errors.department !== '' && <p>{errors.department}</p> }
                { errors.state !== '' && <p>{errors.state}</p> }
            </Modal>
        </div>
    )
}

export default CreateEmployeeForm