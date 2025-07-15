import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  
    
  return (
    <div className='flex items-center justify-center w-full gap-[1.5rem] p-2'>
      <NavLink className={e => e.isActive ?  "text-red-400 border-b" : ""} to="/">Home</NavLink>
      <NavLink className={e => e.isActive ?  "text-red-400 border-b" : ""} to="/recipie">Recipie</NavLink>
      <NavLink className={e => e.isActive ?  "text-red-400 border-b" : ""} to="/about">About</NavLink>
      <NavLink className={`px-2 py-2 bg-gray-900 ${e => e.isActive ?  "text-red-400 border-b" : ""}`} to="/create">Create Recipie</NavLink>
    </div>
  )
}

export default Nav
