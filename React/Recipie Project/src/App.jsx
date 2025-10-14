import React from 'react'
import Mainroutes from './routes/Mainroutes'
import Nav from './components/Nav'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <div className='p-5 w-full bg-amber-100 min-h-screen'>
      <Nav />
      <Mainroutes />
      <ToastContainer position='top-center'/>
    </div>
  )
}

export default App