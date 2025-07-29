import { nanoid } from 'nanoid'
import React from 'react'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { recipieContext } from '../context/RecipieContext'
import { useNavigate } from 'react-router-dom'

const Create = () => {
  const navigate = useNavigate()

  const [data, setdata] = useContext(recipieContext)

    const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const SubmitHandler = (recipie) => {
    recipie.id = nanoid()
    // console.log(recipie)

    // const copy = [...data]
    // copy.push(recipie)
    // setdata(copy)

    setdata([...data, recipie])
    navigate("/recipie")

    reset()
  }

  // console.log(errors.title.message)
  return (
    <div className='p-5 bg-gray-800'>
      <form onSubmit={handleSubmit(SubmitHandler)} className='flex flex-col w-fit items-start '>
        <input className='border-b p-1 m-2' type="url" placeholder='Enter image URL' {...register("image")} />
        <input className='border p-2 m-2' type="text" placeholder='Recipie Title' {...register("title", {required: "Empty"})}/>

        {/* <small className='text-red-500 p-1 ml-2'>{errors?.title?.message}</small> */}
        
        <input className='border p-2 m-2' type="text" placeholder='Chef name' {...register("chef", {required: "Empty"})}/>

        {/* <small className='text-red-500 p-1 ml-2'>{errors?.title?.message}</small> */}

        <textarea className='border p-2 m-2' type="text" rows={5} cols={40} placeholder='Description' {...register("desc", {required: "Empty"})}></textarea>

        {/* <small className='text-red-500 p-1 ml-2'>{errors?.title?.message}</small> */}
        
        <textarea className='border p-2 m-2' type="text" cols={40} rows={1} placeholder='Ingredients' {...register("ingr", {required: "Empty"})}></textarea>

        {/* <small className='text-red-500 p-1 ml-2'>{errors?.title?.message}</small> */}
        
        <textarea className='border p-2 m-2' type="text" cols={40} rows={1} placeholder='Steps' {...register("instructions", {required: "Empty"})}></textarea>

        {/* <small className='text-red-500 p-1 ml-2'>{errors?.title?.message}</small> */}
        
        <select className='border p-2 m-2 text-black bg-white'  {...register("cat", {required: "Empty"})}>
            <option value="cat-1">Category 1</option>
            <option value="cat-2">Category 2</option>
            <option value="cat-3">Category 3</option>
        </select>

        <button className='px-2 py-1 bg-white text-black m-2'>Create</button>

      </form>

        
    </div>
  )
}

export default Create
