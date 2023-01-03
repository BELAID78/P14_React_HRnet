import React, { useState } from 'react'

import Button from '../Button/Button'

import './modal.css'

function Modal({ children, title, modalSize = 'sm', modalHandler = { isOpen: true, setIsOpen: () => {} } }) {
    const [isOpen, setIsOpen] = useState(modalHandler.isOpen)

    return (
        <div className={isOpen ? 'modal fade-in' : 'modal'}>

            <div className={`modal-content ${modalSize}`}>

                <div className='modal-header'>

                    <h4 className='modal-title'>{title}</h4>

                    <span className='modal-close-btn'>X</span>
                </div>

                <div className='modal-body'>

                    {children}

                </div>

                <div className='modal-footer text-right'>
                    <Button label='Close' classname='btn btn-pink btn-rounded' />
                </div>
            </div>
        </div>
    )
}

export default Modal