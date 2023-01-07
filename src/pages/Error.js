import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleSideBar } from '../redux/sideBarSlice'

function Error() {
    const dispatch = useDispatch()

    dispatch(toggleSideBar(false))

    return (
        <div className='error-container'>
            <h1>ERROR 404</h1>
            <p>The request page not found</p>
        </div>
    )
}

export default Error