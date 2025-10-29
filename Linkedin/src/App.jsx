import React, { useEffect } from 'react'
import Mainroutes from './routes/Mainroutes'
import { useDispatch } from 'react-redux'
import { currentUser } from './stores/actions/Useraction'
import { loading } from './stores/actions/PostActions'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(currentUser())
    dispatch(loading())
  }, [])
  return (
    <div className='w-full relative'>
      <Mainroutes />
    </div>
  )
}

export default App