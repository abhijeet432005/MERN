import React from 'react'
import { useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom'
import { asyncRegisterUser } from '../store/actions/userAction'
import { useDispatch }from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const SubmitHandler = (user) => {
    user.id = nanoid();
    user.isAdmin = false;
    asyncRegisterUser(user)
    navigate(-1)
  }
  // console.log(errors)

  return (
    <div className='mt-[4rem] flex justify-center'>
      <form onSubmit={handleSubmit(SubmitHandler)} className='flex flex-col gap-[0.7rem] border-1 p-4 rounded-2xl'>

        <input type="text" placeholder='Enter Name' className='border-1 outline-0 rounded-2xl px-2 py-1 w-fit' {...register("username", {required: "Enter valid Username"})}/>

        <input type="text" placeholder='john-doe@gmail.com' className='border-1 outline-0 rounded-2xl px-2 py-1 w-fit' {...register("email")}/>

        <input type="password" placeholder='********' className='border-1 outline-0 rounded-2xl px-2 py-1 w-fit' {...register("password")}/>

        <button className=' text-left px-3 py-1 bg-black text-white rounded-2xl w-fit'>Register</button>

        <p>Already have an account ? <Link to="/login" className='text-blue-400'><br></br>Login</Link></p>
      </form>
    </div>
  )
}

export default Register