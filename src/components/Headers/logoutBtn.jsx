import React from 'react'
import { useDispatch} from 'react-redux'
import authService from '../../services/authentication'
import {logout} from '../../Store/authSlice'

function logoutBtn() {
    const dispatch = useDispatch();

    const handleLogout = () => {
        authService.logout().then(() => {
            dispatch(logout())
        }
    )
    }
  return (
    <button onClick={handleLogout} className='inline-block p-5 border duration-200'>Logout</button>
  )
}

export default logoutBtn