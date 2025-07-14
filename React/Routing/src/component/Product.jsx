import React from 'react'
import { useNavigate } from 'react-router-dom'

const Product = () => {

  const navigate = useNavigate()

  const NavigateHandler = (name) => {
    navigate(`/product/details/${name}`)
  }

  return (
    <div className='p-4'>
      <h1>Products</h1>

      <div className='p-5'>
        <p className='text-5xl'>Product 1</p>
        <button onClick={() => NavigateHandler("Product 1")} className='px-[1rem] py-[0.5rem] border mt-4 bg-white text-black'>See Details</button>
      </div>
      <div className='p-5'>
        <p className='text-5xl'>Product 2</p>
        <button onClick={() => NavigateHandler("Product 2")} className='px-[1rem] py-[0.5rem] border mt-4 bg-white text-black'>See Details</button>
      </div>
      <div className='p-5'>
        <p className='text-5xl'>Product 3</p>
        <button onClick={() => NavigateHandler("Product 3")} className='px-[1rem] py-[0.5rem] border mt-4 bg-white text-black'>See Details</button>
      </div>
    </div>
  )
}

export default Product
