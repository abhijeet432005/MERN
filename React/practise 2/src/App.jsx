import React from 'react'
import MainRoutes from './assets/routes/MainRoutes'
import Navbar from './assets/components/Navbar'

const App = () => {
  return (
    <div className='bg-gray-800 w-full min-h-screen text-white p-4'>
      <Navbar />
      <MainRoutes />
    </div>
  )
}

export default App
