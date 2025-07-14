import React from 'react'
import { useNavigate } from 'react-router-dom'

const Service_details = () => {
    const navigate = useNavigate()

  return (
    <div>
      <div>
        <div className='p-10'>
          <p className='text-5xl'>More Services...</p>
          <p className='text-3xl'>Choose us...</p>
          <button onClick={() => navigate(-1)} className='px-[1rem] py-[0.5rem] border mt-4 bg-white text-black'>Go Back</button>
        </div>
      </div>
    </div>
  )
}

export default Service_details
