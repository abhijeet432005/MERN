import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const RecipieCard = (props) => {
    const navigate = useNavigate()

    const {title, image,id,chef, description} = props.recipie

    // console.log(title)

    
  return (
    <Link className='w-[20rem] border-1 p-3 flex flex-col hover:scale-105 duration-100 rounded-2xl' to={`/recipies/details/${id}`}>
        <img src={image} className='w-[20rem] object-cover rounded-2xl' />
        <h1><small className='text-red-400 text-[1rem]'>Recipie:</small> {title}</h1>
        <h1><small className='text-red-400 text-[1rem]'>Chef:</small> {chef}</h1>
        <p><small className='text-red-400 text-[1rem]'>Description:</small> {description.slice(0,1)}...<small>more</small></p>
    </Link>
  )
}

export default RecipieCard