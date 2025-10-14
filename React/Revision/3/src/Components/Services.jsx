import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Services = () => {
  const navigate = useNavigate()


  return (
    <div className='p-5'> 
      <h1>Services</h1>
      <button onClick={() => navigate('/services/detail')} className='px-2 py-2 bg-white text-black'>More Details</button>

      <hr className='mt-4' />
      <Outlet />
    </div>
  )
}

export default Services