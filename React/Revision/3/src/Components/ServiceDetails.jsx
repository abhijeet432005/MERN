import React from 'react'
import { useNavigate } from 'react-router-dom'

const ServiceDetails = () => {
    const navigate = useNavigate()
  return (
    <div className='mt-4'>ServiceDetails
        <br />
        <button onClick={() => navigate(-1)} className='px-2 py-2 bg-white text-black'>Go Back</button>
    </div>
  )
}

export default ServiceDetails