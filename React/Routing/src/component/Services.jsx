import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Services = () => {

  const navigate = useNavigate();
  const NavigateHandler = () => {
    navigate("/service/details")
  }

  return (
    <div className='p-4'>

      <div className='p-5'>
        <p className='text-6xl'>Services</p>
        <button onClick={NavigateHandler} className='px-[1rem] py-[0.5rem] border mt-4 bg-white text-black'>See Details</button>
      </div>

      <hr className='my-5' />


      <Outlet />
    </div>
  )
}

export default Services
