import { useParams } from 'react-router-dom'
import { nanoid } from 'nanoid'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { recipiecontext } from '../context/RecipieContext'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Recipie_update = () => {

  const navigate = useNavigate()
  const [data, setdata] = useContext(recipiecontext)
  const param = useParams()
  const recipie = data.find(elem => param.id == elem.id)
  // console.log(recipie)
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm(
    {defaultValues: {
      image: recipie.image,
      title: recipie.title,
      steps: recipie.instructions,
      desc: recipie.desc,
      chef: recipie.chef,
      cat: recipie.category,
      ingr: recipie.ingredients,
      instructions: recipie.instructions
    }}
  )
  // console.log(data)
  
  
  
  const SubmitHandler = (recipe) => {
    const index = data.findIndex(elem => param.id == elem.id)
    const copydata = [...data]
    copydata[index] = {...copydata[index], ...recipe}
    setdata(copydata)
    console.log(copydata[index])

    toast.success("Update Successfully!")

    // console.log("hii")
    navigate(-1)
  }


  return (
    <div className='p-5 bg-gray-800 flex justify-center'>
      
      <form onSubmit={handleSubmit(SubmitHandler)} className='flex flex-col w-fit items-start '>
        <input className='border-b p-1 m-2' type="url" placeholder='Enter image URL' {...register("image")} />
        <input className='border p-2 m-2' type="text" placeholder='Recipie Title' {...register("title", { required: "Empty" })} />

        {/* <small className='text-red-500 p-1 ml-2'>{errors?.title?.message}</small> */}

        <input className='border p-2 m-2' type="text" placeholder='Chef name' {...register("chef", { required: "Empty" })} />

        {/* <small className='text-red-500 p-1 ml-2'>{errors?.title?.message}</small> */}

        <textarea className='border p-2 m-2' type="text" rows={5} cols={40} placeholder='Description' {...register("desc", { required: "Empty" })} ></textarea>

        {/* <small className='text-red-500 p-1 ml-2'>{errors?.title?.message}</small> */}

        <textarea className='border p-2 m-2' type="text" cols={40} placeholder='Ingredients' {...register("ingr", { required: "Empty" })} ></textarea>

        {/* <small className='text-red-500 p-1 ml-2'>{errors?.title?.message}</small> */}

        <textarea className='border p-2 m-2' type="text" cols={40} placeholder='Steps' {...register("instructions", { required: "Empty" })} ></textarea>

        {/* <small className='text-red-500 p-1 ml-2'>{errors?.title?.message}</small> */}

        <select className='border p-2 m-2 text-black bg-white'  {...register("cat", { required: "Empty" })} >
          <option value="cat-1">Category 1</option>
          <option value="cat-2">Category 2</option>
          <option value="cat-3">Category 3</option>
        </select>

        <button className='px-2 py-1 bg-white text-black m-2'>Update</button>

      </form>


    </div>
  )
}

export default Recipie_update
