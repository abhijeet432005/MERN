import React, { useState } from 'react'

const Color = () => {
    const [Color, setColor] = useState('black')

    const ChangeColor = (val) => {
        setColor(val)
    }
  return (
    <div className={`w-full h-screen relative`} style={{backgroundColor: `${Color}`}}>
        <div className="wrapper absolute left-1/2 bottom-20 flex justify-center items-center gap-4 -translate-x-1/2 p-2  h-12 bg-white rounded-3xl">
            <button onClick={() => ChangeColor('red')} className='border uppercase rounded-4xl px-4 py-1'>Red</button>
            <button onClick={() => ChangeColor('blue')} className='border  uppercase rounded-4xl px-4 py-1'>blue</button>
            <button onClick={() => ChangeColor('black')} className='border uppercase rounded-4xl px-4 py-1'>black</button>
            <button onClick={() => ChangeColor('green')}blackassName='border-1 uppercase rounded-4xl px-4 py-1'>green</button>
            <button onClick={() => ChangeColor('gray')} className='border uppercase rounded-4xl px-4 py-1'>gray</button>
            <button onClick={() => ChangeColor('purple')} className='border uppercase rounded-4xl px-4 py-1'>purple</button>
        </div>
    </div>
  )
}

export default Color