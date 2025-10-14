import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex justify-center gap-[3rem] items-center'>
        <NavLink className={e => e.isActive === true ? "text-red-400" : ""} to="/">Home</NavLink>
        <NavLink className={e => e.isActive === true ? "text-red-400" : ""} to="/recipies">Recipies</NavLink>
        <NavLink className={e => e.isActive === true ? "text-red-400" : ""} to="/about">About</NavLink>
        <NavLink className={`${e => e.isActive === true ? "text-red-400" : ""} bg-blue-500 hover:bg-blue-700 text-white 
            font-bold py-4 px-4 rounded transition-all duration-300 transform hover:scale-105 focus:scale-100`} to="/createRecipie">Create Recipie</NavLink>
          <NavLink className={e => e.isActive === true ? "text-red-600" : ""} to="/favourite">Favourite</NavLink>

    </div>
  )
}

export default Nav