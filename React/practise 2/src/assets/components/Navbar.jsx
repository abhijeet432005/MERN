import React from 'react'
import MainRoutes from '../routes/MainRoutes'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-center gap-8 text-xl'>
        <NavLink className={(e) => e.isActive ? "text-red-500" : ""} to="/">Home</NavLink>
        <NavLink className={(e) => e.isActive ? "text-red-500" : ""} to="/recipie">Recipie</NavLink>
        <NavLink className={(e) => e.isActive ? "text-red-500" : ""} to="/about">About</NavLink>
        <NavLink className={`px-3 py-1 rounded-2xl bg-gray-600 ${(e) => e.isActive ? "text-red-500" : ""}`} to="/create">Create</NavLink>

    </div>
  )
}

export default Navbar
