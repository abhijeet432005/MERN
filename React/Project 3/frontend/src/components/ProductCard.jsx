import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = (props) => {
    const {id, title, description, price, image} = props.product
    
  return (
    <div>
        <Link to={`/product/detail-product/${id}`} className='w-[20rem] h-[25rem] border-1 p-3 flex flex-col justify-center hover:scale-105 duration-100 rounded-2xl'>
            <div className='flex justify-center items-center bg-amber-50 p-4 rounded-2xl mb-2 hover:scale-105 duration-100 overflow-hidden'>
                <img src={image} className='' />
            </div>
            <h1>{title}</h1>
            <h3 >₹{price}</h3>
            <h4>{description.slice(0,51)} <span className='text-red-500'>...more</span></h4>
        </Link>
    </div>
  )
}

export default ProductCard