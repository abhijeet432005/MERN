import React from 'react'
import { useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch }from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { asyncCreateProduct } from '../../store/actions/productsAction'

const CreateProduct = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const ProductHandler = (product) => {
    product.id = nanoid()
    console.log(product)
    dispatch(asyncCreateProduct(product))
    navigate('/product')
  }
  // console.log(errors)

  return (
    <div className='mt-[4rem] flex justify-center'>
      <form onSubmit={handleSubmit(ProductHandler)} className='flex flex-col gap-[1rem] border-1 p-4 rounded-2xl w-[25rem]'>

        <input type="url" placeholder='Enter Image URL' className='border-1 outline-0 rounded-2xl px-2 py-1' {...register("image")}/>

        <input type="text" placeholder='Enter Product Title' className='border-1 outline-0 rounded-2xl px-2 py-1 ' {...register("title", {required: "Enter valid Username"})}/>

        <input type="number" placeholder='50.00' className='border-1 outline-0 rounded-2xl px-2 py-1' {...register("price")}/>

        <textarea placeholder='Enter Description' className='border-1 outline-0 rounded-2xl px-2 py-1' {...register("description")}></textarea>

        <select className='border-1 outline-0 rounded-2xl px-2 py-1' {...register("category")}>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
        </select>

        <button className='button w-fit text-[0.8rem]'><span>Create Product</span></button>

        
      </form>
    </div>
  )
}

export default CreateProduct