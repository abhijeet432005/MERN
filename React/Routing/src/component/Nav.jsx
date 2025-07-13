import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex justify-center gap-[1.5rem] items-center relative'>
      <Link to="/">Home</Link>
      <Link to="/product">Product</Link>
      <Link to="/service">Services</Link>
      <Link to="/about">About</Link>
      <h2 className='text-[2rem] absolute right-0 p-2 mt-1'>React Router</h2>
    </div>
  )
}

export default Nav
