import React from 'react'

const RecipieCard = ({ recipe, addToCart }) => {
    console.log("render", recipe.id)
  return (
    <div className='card border w-[300px] h-[300px] flex flex-col justify-center items-center p-2 gap-3'>
        <img src={recipe.image} className='w-30 h-30 rounded-2xl object-cover' alt="" />
        <h1>{recipe.name}</h1>
        <p>Cuisine: {recipe.cuisine}</p>
        <p>Rating: {recipe.rating} <span>({recipe.reviewCount} reviews)</span></p>
        <button onClick={() => addToCart(recipe)} className='w-40 h-8 bg-green-500 rounded-2xl'>Add To Cart</button>

    </div>
  )
}

export default React.memo(RecipieCard)