import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex justify-center gap-[1.5rem] items-center relative'>
      <NavLink className={e => (e.isActive ? "text-red-400 border-b" : "")} to="/">Home</NavLink>
      <NavLink className={e => (e.isActive ? "text-red-400 border-b" : "")} to="/product">Product</NavLink>
      <NavLink className={e => (e.isActive ? "text-red-400 border-b" : "")} to="/service">Services</NavLink>
      <NavLink className={e => (e.isActive ? "text-red-400 border-b" : "")} to="/about">About</NavLink>
      <h2 className='text-[2rem] absolute right-0 p-2 mt-1'>React Router</h2>
    </div>
  )
}

export default Nav
