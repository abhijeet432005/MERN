import React from 'react'
import { useState } from 'react'
import { nanoid } from 'nanoid'


const Create = (props) => {

    const todos = props.todos
    const setTodos = props.setTodos
    const [title, setTitle] = useState("")
    

    const SubmitHAndler = e => {
        e.preventDefault()

        const newToDO = {
            id: nanoid(),
            title: title,
        }
        // console.log(newToDO)

        const x = [...todos]
        x.push(newToDO)
        setTodos(x)

        setTitle("")


        // setTodos([...todos, newToDO])
    }

    

    return (
        <div className='w-[60%] flex flex-col gap-[1rem] '>
            <h1 className='text-7xl co'>Create Task</h1>
            <form onSubmit={SubmitHAndler}>
                <input type="text" placeholder='Enter title' onChange={(e) => setTitle(e.target.value)} value={title} className='border p-[5px] rounded-[1rem] outline-0'/>
                <br /><br />
                <button className='cursor-pointer px-[0.5rem] py-[0.5rem] border rounded-[2rem] '>Create Task</button>
                

                {/* <>
        <input type="checkbox" onChange={e => setcompleted(e.target.checked)} checked={completed}/> Completed
        <br /><br />
        <input type="radio" onChange={e => setgender(e.target.value)} value="male" checked={gender === "male" ? true : false}/>Male
        <input type="radio" onChange={e => setgender(e.target.value)} value="female" checked={gender === "female" ? true : false}/>Male
        <br /><br />
        
        </> */}
            </form>
            

        </div>
    )
}

export default Create
