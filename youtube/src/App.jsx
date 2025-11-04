import React, { useEffect } from 'react'
import Home from './pages/Home'
import { useDispatch } from 'react-redux'
import { asyncGetVideoData } from './store/actions/vidoeAction'
import Mainroutes from './routes/Mainroutes'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncGetVideoData())
  }, [])
  return (
    <div className='w-full'>
      <Mainroutes />
    </div>
  )
}

export default App