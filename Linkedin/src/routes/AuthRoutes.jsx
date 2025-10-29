import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const AuthRoutes = () => {
    const user = useSelector(state => state.user.user)
  return user ? props.children : <Navigate to='/' />
}

export default AuthRoutes