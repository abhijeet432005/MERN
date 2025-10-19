import React from 'react'
import { useForm } from "react-hook-form"
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector }from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { asyncCreateProduct, asyncUpdateProduct } from '../../store/actions/productsAction'

const UpdateProduct = () => {
  const dispatch = useDispatch()
  const { id } = useParams();
  const navigate = useNavigate()
  const products = useSelector((state) => state.products.products);
  const user = useSelector((state) => state.user.user);
  const product = products?.find((elem) => elem.id == id);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
        image: product?.image,
        title: product?.title,
        price: product?.price,
        description: product?.description,
        category: product?.category

    }
  })

  const UpdateProductHandler = (product) => {
    product.id = nanoid()
    console.log(product)
    dispatch(asyncUpdateProduct(id, product))
    navigate(-1)
  }
  // console.log(errors)

  return product ? (
    <div className='mt-[4rem] flex justify-center'>
      <form onSubmit={handleSubmit(UpdateProductHandler)} className='flex flex-col gap-[1rem] border-1 p-4 rounded-2xl w-[25rem]'>

        <input type="url" placeholder='Enter Image URL' className='border-1 outline-0 rounded-2xl px-2 py-1' {...register("image")}/>

        <input type="text" placeholder='Enter Product Title' className='border-1 outline-0 rounded-2xl px-2 py-1 ' {...register("title", {required: "Enter valid Username"})}/>

        <input type="number" placeholder='50.00' className='border-1 outline-0 rounded-2xl px-2 py-1' {...register("price")}/>

        <textarea placeholder='Enter Description' className='border-1 outline-0 rounded-2xl px-2 py-1' {...register("description")}></textarea>

        <select className='border-1 outline-0 rounded-2xl px-2 py-1' {...register("category")}>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
        </select>

        <button className='button w-fit text-[0.8rem]'><span>Update Product</span></button>

        
      </form>
    </div>
  ) : "Loading..."
}

export default UpdateProduct