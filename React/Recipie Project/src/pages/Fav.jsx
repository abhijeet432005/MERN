import React from 'react'
import { jsx } from 'react/jsx-runtime'
import RecipieCard from '../components/RecipieCard'

const Fav = () => {
    const data = JSON.parse(localStorage.getItem("fav")) || []

    const render = data.map(recipie => (
        <RecipieCard key={recipie.id} recipie={recipie} /> 
    ))
  return (
    <div className='card'>
        {data.length > 0 ? render : "No Recipie Found !"}
    </div>
  )
}

export default Fav