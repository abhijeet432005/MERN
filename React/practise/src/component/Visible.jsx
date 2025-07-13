import React from 'react'
import { useState } from 'react';

const Visible = () => {

    const [hide, sethide] = useState(true);
    
    const [darkmode, setdarkmode] = useState(false);

    const theme = () => {
        setdarkmode(!darkmode)
    }

    const toggle = () => {
        sethide(!hide)
    }

    return (
        <div className={`p-2 w-full h-full flex flex-col item-end ${darkmode ? "bg-black text-white" : "bg-white text-black"}`}>

            <div className='flex justify-between'>
                <button className='px-[1rem] py-[0.5rem] border size-fit' onClick={toggle}>{hide ? "Hide" : "Show"}</button>
                <button className='px-[1rem] py-[0.5rem] border' onClick={theme}>{darkmode ? "Light" : "Dark"}</button>

            </div>

            {hide && (
                <div className='mt-[2rem] border p-1'>
                    <p className='text-2xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta voluptate molestias perspiciatis, ducimus neque a quae perferendis error iste quod labore debitis delectus totam necessitatibus consequuntur ipsa odio exercitationem laboriosam.</p>
                </div>

            )}

        </div>
    )
}

export default Visible
