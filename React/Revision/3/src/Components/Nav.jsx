import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="w-full flex justify-center gap-[3rem]">
      <NavLink className={e => e.isActive ? "text-red-400": ""} to="/">Home</NavLink>
      <NavLink className={e => e.isActive ? "text-red-400" : ""} to="/about">About</NavLink>
      <NavLink className={e => e.isActive ? "text-red-400" : ""} to="/product">Products</NavLink>
      <NavLink className={e => e.isActive ? "text-red-400" : ""} to="/services">Services</NavLink>
    </div>
  );
}

export default Nav