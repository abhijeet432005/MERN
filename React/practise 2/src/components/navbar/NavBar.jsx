import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex w-full gap-4 justify-center p-3'>
        <NavLink to={"/"} className={({ isActive }) => isActive ? 'text-blue-500' : 'text-gray-500'}>
            Home
        </NavLink>
        <NavLink to={"/recipe"} className={({ isActive }) => isActive ? 'text-blue-500' : 'text-gray-500'}>
            Recipe
        </NavLink>
        <NavLink to={"/whishlist"} className={({ isActive }) => isActive ? 'text-blue-500' : 'text-gray-500'}>
            Whislist
        </NavLink>
        <NavLink to={"/create"} className={({ isActive }) => isActive ? 'text-blue-500' : 'text-gray-500'}>
            Create
        </NavLink>
    </div>
  )
}

export default NavBar