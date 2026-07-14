import React, { useContext } from 'react'
import { recipeContext } from '../context/RecipeContext'
import RecipeCard from '../components/Card/RecipeCard'

const Recipe = () => {
  const [data] = useContext(recipeContext)

  const render = data.map(elem => (
    <RecipeCard key={elem.id} recipe={elem}/>
  )) 
  return (
    <div className='card justify-center mt-10 gap-5'>{render}</div>
  )
}

export default Recipe