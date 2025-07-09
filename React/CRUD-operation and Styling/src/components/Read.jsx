import React, { Fragment } from 'react'


const Read = (props) => {

    const todos = props.todos
    const setTodos = props.setTodos

    const DeleteHandler = (id) => {
        const filterTodo = todos.filter(elem => elem.id != id)
        setTodos(filterTodo)

    }

    const allclear = () => {
        setTodos([])
    }


    const renderToDo = todos.map((elem) => {
        return (
            <li key={elem.id} className='w-full flex justify-between items-center bg-slate-700 p-3 border rounded-[2rem]'>
                {elem.title}
                <span onClick={() => DeleteHandler(elem.id)} className='cursor-pointer px-[0.5rem] py-[0.5rem] border rounded-[2rem]'>Delete</span>
            </li>
        )
    })

    return (
        <div className='w-[40%] p-5 flex flex-col gap-[2rem]'>
            <div className='w-full flex justify-between items-center'>
                <h1 className='text-6xl'>Task List</h1>

                <button onClick={allclear} className='cursor-pointer px-[0.5rem] py-[0.5rem] border-[2px] rounded-[2rem] bg-sky-50 text-black border-black'>All Clear</button>
            </div>

            <div className="w-full h-full max-h-[80vh] overflow-auto custom-scrollbar">
                <ol className="flex flex-col gap-[1rem] flex-nowrap">
                    {renderToDo}
                </ol>
            </div>
        </div>
    )
}

export default Read


