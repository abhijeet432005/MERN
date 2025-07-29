import React, { useContext } from 'react'
import { recipieContext } from '../context/RecipieContext'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Recipe_Detailes = () => {
    const navigate = useNavigate()
    const [data, setdata] = useContext(recipieContext)
    const param = useParams()
    const recipe = data.find(elem => param.id == elem.id)
    console.log(recipe)

    const DeleteHandler = () => {
        const newData = data.filter(recipe => recipe.id != param.id)
        setdata(newData)
        navigate("/recipie")
    }

    const UpdateHandler = (id) => {
        navigate(`/recipie/recipie-detail/update/${id}`)
    }

  return (
    <div className='pt-5 bg-gray-800'>
        <h1 className='text-center text-6xl text-red-300'>{recipe.title}</h1>
        <div className=' bg-gray-800 p-[3rem] flex justify-center gap-[1.5rem]'>
            <div className='flex flex-col gap-4 w-fit'>
                <img src={`${recipe.image}`} alt="" className='w-[20rem]'/>
                <h1><span className='text-red-300'>Title: </span>{recipe.title}</h1>
                <h1><span className='text-red-300'>Chef: </span>{recipe.chef}</h1>
                <div className='flex gap-3'>
                    <button onClick={() => UpdateHandler(recipe.id)} className='px-2 py-1 bg-white text-black w-fit cursor-pointer active:scale-90'>Update</button>
                    <button onClick={DeleteHandler} className='px-2 py-1 bg-red-800 border-none w-fit cursor-pointer active:scale-90'>Delete</button>
                </div>
            </div>
            <div className='border'></div>
            <div className='w-[60%]'>
                <p><span className='text-red-300'>Description: </span>{recipe.desc}</p>
                <br />
                <p><span className='text-red-300'>Instruction: </span>{recipe.instructions}</p>
                <br />
                <p><span className='text-red-300'>Ingredients: </span>{recipe.ingr}</p>
            </div>
        
        </div>
    </div>
  )
}

export default Recipe_Detailes
