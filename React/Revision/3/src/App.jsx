import React from 'react'
import Nav from './Components/Nav'
import Mainroutes from './routes/Mainroutes'

const App = () => {
  return (
    <div className='bg-gray-800 w-screen h-screen text-white p-3'>
      <Nav />
      <Mainroutes />
    </div>
  )
}

export default App