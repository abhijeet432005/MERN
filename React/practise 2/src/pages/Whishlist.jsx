import React from 'react'
import RecipeCard from '../components/Card/RecipeCard'

const Whishlist = () => {
  let recipe = JSON.parse(localStorage.getItem("whishlist")) || []

  const render = recipe.map(elem => (
    <RecipeCard key={elem.id} recipe={elem} />
  ))

  return (
    <div className='card justify-center mt-10 gap-5'>{render}</div>
  )
}

export default Whishlist