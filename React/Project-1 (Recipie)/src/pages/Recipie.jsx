import React, { useContext } from 'react'
import { recipiecontext } from '../context/RecipieContext'
import Recipiecard from '../Component/Recipiecard'

const Recipie = () => {
    const [data] = useContext(recipiecontext)

    const renderData = data.map(elem => <Recipiecard recipie={elem} key={elem.id}/>)
  return (
    <div className='pt-10 w-[25rem] bg-gray-800 gap-[2rem] card justify-center'>
      {renderData}
    </div>
  )
}

export default Recipie
