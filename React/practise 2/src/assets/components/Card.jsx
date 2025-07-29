import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
    const {id, image, title, chef, desc} = props.recipe
    
  return (
    <Link to={`/recipie/recipie-detail/${id}`} className='flex flex-col justify-center items-center border p-[1rem] text-center hover:scale-102 duration-150'>
        <img src={image} alt="" className='w-[15rem] object-cover hover:scale-110 p-[1rem] duration-200'/>
        <h1>{title}</h1>
        <h1>{chef}</h1>
        <p>Description: {desc.slice(1,100)} <span className='text-red-300'>...more</span></p>
    </Link>
  )
}

export default Card
