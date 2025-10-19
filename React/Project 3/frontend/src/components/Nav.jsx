import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { asyncLogOutUser } from "../store/actions/userAction";

const Nav = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const user = useSelector(state => state.user.user)
  // console.log(user)

  const HandelLogOut = () => {
    dispatch(asyncLogOutUser())
    navigate("/login")
  }



  return (
    <div className="w-full flex justify-between items-center p-1">

      <div>Logo.</div>

      <div className="flex gap-[3rem]">
        <NavLink className="line" to="/">Home</NavLink>
        <NavLink className="line" to="/product">Products</NavLink>
        <NavLink className="line" to="/about">About</NavLink>

        {user && user.isAdmin && <NavLink className="line" to="/admin/create-product">Create Products</NavLink>}

        
      </div>

      <div>

        {
          (user) ? 
          <div className="flex items-center gap-2">
          <h1 onClick={() => navigate(`/user/${user.id}`)} className=" cursor-pointer">Hello, {user.username}</h1>
          <NavLink onClick={HandelLogOut} className='button '><span>LogOut</span></NavLink>
          </div> : 
          <>
          <NavLink to="/login" className='button'><span>LogIn</span></NavLink>
          </>
        }
        
      </div>
    </div>
  );
};

export default Nav;