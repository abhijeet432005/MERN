import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { recipiecontext } from '../context/RecipieContext'

const RecipieDetails = () => {
    const navigate = useNavigate()
    const [data, setdata] = useContext(recipiecontext)
    const param = useParams()
    const recipie = data.find(reci => reci.id == param.id)
    const [favourite, setfavourite] = useState(JSON.parse(localStorage.getItem("fav")) || []);

    const NavigateHandler = (id) => {
        navigate(`/recipies/details/updates/${id}`)
    }

    const DeleteHandler = () => {
        const filter = data.filter(elem => elem.id != param.id)
        setdata(filter)
        localStorage.setItem("recipie", JSON.stringify(filter))

        const filterfav = favourite.filter(f => f.id != recipie?.id)
        setfavourite(filterfav)
        localStorage.setItem("fav", JSON.stringify(filterfav))

        navigate('/recipies')
        console.log(data)
    }


    const FavHandler = () => {
        const copydata = [...favourite]
        copydata.push(recipie)
        setfavourite(copydata)
        localStorage.setItem("fav", JSON.stringify(copydata))
    }

    const UnfavHandler = () => {
        const filterfav = favourite.filter(f => f.id != recipie?.id)
        setfavourite(filterfav)
        localStorage.setItem("fav", JSON.stringify(filterfav))
    }
    


  return (
    <div className='flex gap-5 justify-center mt-[3rem]'>

        <div className='flex flex-col gap-2 mt-[5rem]'>
            <img src={recipie?.image} alt="" className='w-[25rem]  object-cover' />
            <h1 className='text-2xl '>{recipie?.title}</h1>
            <h1 className='text-2xl'>Chef: {recipie?.chef}</h1>

            <div className='relative flex'>
                <div className='flex gap-4'>
                    <button className='text-left px-2 py-2 bg-amber-600 w-fit text-white' onClick={() => NavigateHandler(recipie.id)}>Update</button>
                    <button className='bg-red-500 px-2 py-2 w-fit text-white' onClick={DeleteHandler}>Delete</button>

                </div>

                <div className=''>

                    {favourite.find(f => f.id == recipie?.id) ? (<i onClick={UnfavHandler} className="ri-heart-fill text-3xl text-red-600 absolute right-0"></i>) : <i onClick={FavHandler} className="ri-heart-line text-3xl absolute right-0"></i> }
                                        
                </div>
                
            </div>
        </div>

        <div className='border-1 bg-black h-[40rem]'></div>

        <div className='flex flex-col gap-3 items-baseline-last mt-[5rem]'>
            <p className='w-[20rem]'>Ingredients: {recipie?.ingredients}</p>
            <p className='w-[20rem]'>Description: {recipie?.description}</p>
            <p className='w-[20rem]'>Instructions: {recipie?.instructions}</p>
        </div>
        
    </div>
  )
}

export default RecipieDetails