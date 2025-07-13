import React, { useContext } from 'react'
import { toast } from 'react-toastify'
import { todoContext } from './Wrapper'

const Read = () => {
    const [todos, settodos] = useContext(todoContext)

    const deleteHandler = (id) => {
        const filterData = todos.filter(val => val.id !== id)
        settodos(filterData)
        toast.error("Task Deleted!")
    }

    const clear = () => {

        if(todos.length === 0){
            // console.log("hii")
            toast.error("Create The Task!")
        }

        else{
            settodos([])
            toast.error("All Clear!")

        }
    }


    const render = todos.map(elem => {
        return(
            <li key={elem.id} className='w-full flex justify-between items-center bg-slate-600 p-2'>
                {elem.title}
                <button onClick={() => deleteHandler(elem.id)} className='border bg-red-400 px-[1rem] py-[0.5rem] cursor-pointer'>Delete</button>
            </li>
        )
    })

    return (
        <div className='w-[40%] p-1 flex flex-col  gap-[2rem]'>

            <div className='w-full flex justify-between pl-3'>
                <h1 className='text-4xl'>Task List</h1>
                <button onClick={clear} className='border bg-white text-black px-[1rem] py-[0.5rem]'>Clear All</button>
            </div>

            <div className='ml-[1rem] h-[85%] w-full overflow-auto custom-scrollbar'>
                <ol className='flex flex-col gap-[1rem]'>{render}</ol>
            </div>
        </div>
    )
}

export default Read


