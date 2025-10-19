import React from 'react'
import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { asyncLoginUser } from '../store/actions/userAction'

const Login = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const SubmitHandler = (user) => {
    // console.log(data)
    dispatch(asyncLoginUser(user))
    navigate("/")
  }
  // console.log(errors)

  return (
    <div className='mt-[4rem] flex justify-center'>
      <form onSubmit={handleSubmit(SubmitHandler)} className='flex flex-col gap-[1.5rem] border-1 p-4 rounded-2xl'>

        <input type="text" placeholder='john-doe@gmail.com' className='border-b-1 text-2xl outline-0 rounded-2xl px-2 py-2 w-fit' {...register("email")}/>


        <input type="password" placeholder='********' className='border-b-1 text-2xl  outline-0 rounded-2xl px-2 py-2 w-fit' {...register("password")}/>

        <button className=' button w-fit'><span>Login</span></button>

        <p>Don't have account ? <Link to="/register" className='text-blue-400'><br></br>Register</Link></p>
      </form>
    </div>
  )
}

export default Login