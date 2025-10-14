import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ProductDetails = () => {
    const naviagte = useNavigate()
    const param = useParams()
  return (
    <div>
        <h1>{param.name}</h1>
        <button className="px-2 py-2 bg-white text-black rounded-4xl w-fit" onClick={() => naviagte(-1)}>Go Back</button>
    </div>
  )
}

export default ProductDetails