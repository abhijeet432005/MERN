import React, { useState } from 'react'


const Background = () => {

    const [color, setcolor] = useState();
    
  return (
    <div className='w-full h-full flex items-end justify-center' style={{background: color}}>

      <div className='w-[25rem] h-[3rem] bg-fuchsia-100 mb-[1rem] rounded flex items-center justify-between p-1'>
        <div className="blue w-[2rem] h-[2rem] bg-blue-800 rounded-[50%]"  onClick={() => setcolor("blue")}></div>
        <div className="red w-[2rem] h-[2rem] bg-red-500 rounded-[50%]" onClick={() => setcolor("red")}></div>
        <div className="red w-[2rem] h-[2rem] bg-green-800 rounded-[50%]" onClick={() => setcolor("green")}></div>
        <div className="red w-[2rem] h-[2rem] bg-black rounded-[50%]" onClick={() => setcolor("black")}></div>
      </div>
      
    </div>
  )
}

export default Background
