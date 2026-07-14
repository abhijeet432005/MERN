import { useNavigate } from "react-router-dom"


const RecipeCard = (props) => {
    const { image, title, desc, chef, id } = props?.recipe || {}
    const navigate = useNavigate()
    
  return (
    <div onClick={() => navigate(`/recipe/recipeDetails/${id}`)} className='flex justify-center items-center flex-col border hover:scale-105 cursor-pointer duration-500 p-4 gap-3 rounded-md'>
        <img src={image} alt="" className='w-[15rem] h-[15rem]'/>
        <h1>{title}</h1>
        <p>Chef: {chef}</p>
        <p>{desc?.slice(0,50)} ...more</p>
    </div>
  )
}

export default RecipeCard