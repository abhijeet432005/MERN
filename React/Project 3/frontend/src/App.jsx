import axios from './api/axiosconfig'
import React, { useEffect } from 'react'
import { asyncgetUser } from './store/userAction'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {
  const data = useSelector((state) => state.user.data)

  console.log(data)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(asyncgetUser())
  }, [])

  return (
    <div>App</div>
  )
}

export default App