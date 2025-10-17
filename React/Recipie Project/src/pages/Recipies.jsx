import React, { useContext } from 'react'
import { recipiecontext } from '../context/RecipieContext'
import RecipieCard from '../components/RecipieCard'
import { useNavigate } from 'react-router-dom'

const Recipies = () => {
  const [data] = useContext(recipiecontext)

  const render = data.map((recipie) => (
    <RecipieCard key={recipie.id} recipie={recipie} />
  ))
  return (
    <div className='card '>
      {render}
    </div>
  )
}

export default Recipies