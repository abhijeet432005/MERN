import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Product_details = () => {

  const navigate = useNavigate()
  const param = useParams()
  console.log(param)

  

  return (
    <div>
      <div>
        <div className='p-10'>
          <p className='text-5xl'>{param.name}</p>
          <button onClick={() => navigate(-1)} className='px-[1rem] py-[0.5rem] border mt-4 bg-white text-black'>Go Back</button>
        </div>
      </div>
    </div>
  )
}

export default Product_details
