import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const AuthRoutes = (props) => {
    const user = JSON.parse(localStorage.getItem("user"))
  return user ? props.children : <Navigate to='/' />
}

export default AuthRoutes