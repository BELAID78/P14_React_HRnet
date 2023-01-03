import React from 'react'

import Button from '../Button/Button'

import './modal.css'

function Modal({ children, title, modalSize = 'sm', modalHandler = { isOpen: false, setIsOpen: () => {} } }) {
    const clickCloseHandle = () => {
        modalHandler.setIsOpen(false)
    }

    return (
        <div className={modalHandler.isOpen ? 'modal fade-in' : 'modal'}>

            <div className={`modal-content ${modalSize}`}>

                <div className='modal-header'>

                    <h4 className='modal-title'>{title}</h4>

                    <span className='modal-close-btn' onClick={clickCloseHandle} >X</span>
                </div>

                <div className='modal-body'>

                    {children}

                </div>

                <div className='modal-footer text-right'>
                    <Button 
                        label='Close' 
                        classname='btn btn-pink btn-rounded' 
                        onclick={clickCloseHandle} />
                </div>
            </div>
        </div>
    )
}

export default Modal