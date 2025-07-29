import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { recipieContext } from '../context/RecipieContext'
import { useForm } from 'react-hook-form'

const Recipie_Update = () => {
    const navigate = useNavigate()
    const [data, setdata] = useContext(recipieContext)
    const params = useParams()
    const recipe = data.find(elem => elem.id == params.id)
    // console.log(recipe.instructions)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({

        defaultValues: {
            image: recipe.image,
            title: recipe.title,
            chef: recipe.chef,
            desc: recipe.desc,
            ingr: recipe.ingr,
            instructions: recipe.instructions
        }
    }
    )

    const SubmitHandler = (recipie) => {
        const index = data.findIndex(elem => params.id == elem.id)
        const copydata = [...data]
        copydata[index] = { ...copydata[index], ...recipie }
        setdata(copydata)
        // console.log(copydata[index])

        // toast.success("Update Successfully!")

        // console.log("hii")
        navigate(-1)
    }
    return (
        <div className='bg-gray-800 flex justify-center'>
            <form onSubmit={handleSubmit(SubmitHandler)} className='flex flex-col w-fit items-start p-5'>
                <input className='border-b p-1 m-2' type="url" placeholder='Enter image URL' {...register("image")} />
                <input className='border p-2 m-2' type="text" placeholder='Recipie Title' {...register("title", { required: "Empty" })} />

                {/* <small className='text-red-500 p-1 ml-2'>{errors?.title?.message}</small> */}

                <input className='border p-2 m-2' type="text" placeholder='Chef name' {...register("chef", { required: "Empty" })} />

                {/* <small className='text-red-500 p-1 ml-2'>{errors?.title?.message}</small> */}

                <textarea className='border p-2 m-2' type="text" rows={5} cols={40} placeholder='Description' {...register("desc", { required: "Empty" })}></textarea>

                {/* <small className='text-red-500 p-1 ml-2'>{errors?.title?.message}</small> */}

                <textarea className='border p-2 m-2' type="text" cols={40} rows={5} placeholder='Ingredients' {...register("ingr", { required: "Empty" })}></textarea>

                {/* <small className='text-red-500 p-1 ml-2'>{errors?.title?.message}</small> */}

                <textarea className='border p-2 m-2' type="text" cols={40} rows={6} placeholder='Steps' {...register("instructions", { required: "Empty" })}></textarea>

                {/* <small className='text-red-500 p-1 ml-2'>{errors?.title?.message}</small> */}

                <select className='border p-2 m-2 text-black bg-white'  {...register("cat", { required: "Empty" })}>
                    <option value="cat-1">Category 1</option>
                    <option value="cat-2">Category 2</option>
                    <option value="cat-3">Category 3</option>
                </select>

                <button className='px-2 py-1 bg-white text-black m-2'>Update</button>

            </form>


        </div>
    )
}

export default Recipie_Update
