import React from 'react'
import { BsInfoSquareFill } from "react-icons/bs";


const HomeRight = () => {
  return (
    <div className='hidden lg:flex flex-col w-full bg-white border border-gray-300 p-3 gap-4 h-fit rounded-2xl'>
      <div className='w-full flex justify-between items-center'>
        <h1>Add to your feed</h1>
        <BsInfoSquareFill />
      </div>

      <div className='w-full flex flex-col gap-4'>
        <div className='flex items-center gap-3 w-full'>
          <p className='text-3xl px-2 bg-gray-100 outline-4 outline-blue-400 border-white rounded-full border'>#</p>

          <div className='flex flex-col w-full'>
            <h1>#Linkedin</h1>
            <button className='px-3 py-1 border rounded-full w-fit'>Follow</button>
          </div>
        </div>
        <div className='flex items-center gap-3 w-full'>
          <p className='text-3xl px-2 bg-gray-100 outline-4 outline-blue-400 border-white rounded-full border'>#</p>

          <div className='flex flex-col w-full'>
            <h1>#Linkedin</h1>
            <button className='px-3 py-1 border rounded-full w-fit'>Follow</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeRight