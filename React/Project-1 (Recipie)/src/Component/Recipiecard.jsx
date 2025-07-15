import React from 'react'
import { Link } from 'react-router-dom'

const Recipiecard = (props) => {
    const {id, image, title, desc, chef} = props.recipie
    // console.log(title)

  return (
    <Link to={`/recipie/detail/${id}`} className=' border flex flex-col justify-center items-center p-4 rounded gap-[0.5rem] active:scale-[0.97] duration-150 hover:scale-[0.99]'>
    <img className='w-[15rem] object-cover rounded-2xl hover:scale-104 duration-150' src={image} alt="" />
    <h1>Name: {title}</h1>
    <p>Chef: {chef}</p>
    <p>Description: {desc}</p>
    {/* <p>Description: {desc.slice(0, 100)}...{""}<small>more</small></p> */}

    </Link>
  )
}

export default Recipiecard
