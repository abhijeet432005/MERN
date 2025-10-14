import { nanoid } from 'nanoid'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { recipiecontext } from '../context/RecipieContext'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const CreateRecipie = () => {
    const navigate = useNavigate()

    const [data, setdata] = useContext(recipiecontext)
      const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

    const SubmitHandler = (recipie) => {
        // console.log(data)
        recipie.id = nanoid()

        // setdata([...data, recipie])
        
        const copy = [...data]
        copy.push(recipie)
        setdata(copy)
        localStorage.setItem("recipie", JSON.stringify(copy))
        
        reset()
        toast.success("Recipie Created ✅")
        navigate("/recipies")
        
        console.log(recipie)
      }
      console.log("Current origin:", window.location.origin);
      console.log("hii")

  return (
    <div className='flex justify-center mt-4'>
        <form onSubmit={handleSubmit(SubmitHandler)} className='border-1 p-4 w-[25rem] flex flex-col gap-4 rounded-2xl'>
            
            <input type="url" placeholder='Enter Url' {...register("image")} className='px-2 outline-0 border-b-1 w-full'/>

            <input type="text" placeholder='Enter Name' {...register("title", {required:"Name is required!"})} className='px-2 outline-0 border-b-1 w-full'/>
            {errors?.title && (<small className='text-red-600'>{errors?.title?.message}</small>)}

            <input type="text" placeholder='Enter Chef Name' {...register("chef")} className='px-2 outline-0 border-b-1 w-full'/>

            <textarea type="text" placeholder='Enter Ingredients' rows={5} className='px-2 outline-0 border-1 rounded-2xl p-2 w-full' {...register("ingredients")}></textarea>

            <textarea type="text" placeholder='Enter Description' rows={5} className='px-2 outline-0 border-1 w-full rounded-2xl' {...register("description")}></textarea>

            <textarea type="text" placeholder='Enter Instructions' rows={5} className='px-2 outline-0 border-1 rounded-2xl p-2 w-full' {...register("instructions")}></textarea>

            <select className='border-1 outline-0 rounded-2xl p-1' {...register("category")}>
                <option value="cat-1">Paneer</option>
                <option value="cat-2">Roti</option>
                <option value="cat-3">Rice</option>
            </select>

            <button className='text-left px-3 py-2 bg-blue-500 text-white rounded-2xl w-fit scale-110 hover:scale-105 duration-100'>Submit</button>

        </form>


    </div>
  )
}

export default CreateRecipie