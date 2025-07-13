import { nanoid } from 'nanoid/non-secure';
import React, { useContext } from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { todoContext } from './Wrapper';

const Create = () => {

    const [todos, settodos] = useContext(todoContext)

    const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

    const SubmitHandler = (data) => {
        
        data.id = nanoid()
        console.log(data.id)

        const copy = [...todos]
        copy.push(data)
        settodos(copy)

        // settodos([...todos, data])

        toast.success("Task Created!")

        reset()

    }

    // console.log(errors.title.message)

    return (
        <div className='w-[60%] flex flex-col gap-[2rem]'>
            <h1 className='text-6xl'>Plan <span className='text-red-400'>Your</span> Day</h1>

            <form onSubmit={handleSubmit(SubmitHandler)} className=''>
                <input {...register("title", {required: "Title can't be empty"})} type="text" placeholder='Title' className='mb-[1rem] border-b-2 p-2 text-3xl outline-0' />
                <br />


                <small className='text-red-500'>{errors?.title?.message}</small>


                <br /><br />
                <button className='border px-[1rem] py-[0.5rem] cursor-pointer'>Create</button>
            </form>


        </div>
    )
}

export default Create
