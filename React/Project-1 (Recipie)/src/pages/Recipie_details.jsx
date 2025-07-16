import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { recipiecontext } from '../context/RecipieContext'
import { set } from 'react-hook-form'

const Recipie_details = () => {
    const navigate = useNavigate()
    const [data, setdata] = useContext(recipiecontext)
    const param = useParams()
    const recipie = data.find(elem => param.id == elem.id)
    console.log(recipie)
    // console.log(data, param.id)

    useEffect(() =>{
        console.log("Recipe_details Mount")
        
        return () => {
            console.log("Recipe_details Unmount")

        }
    }, [])

    const update = (id) => {
        navigate(`/recipie/detail/update/${id}`)
    } 

    const DeleteHandler = () => {
        const filterdata = data.filter(elem => elem.id != param.id)
        setdata(filterdata)
        navigate("/recipie")
    }
    return (

        <div className='pt-8'>
            <h1 className='text-4xl text-center'>{recipie.title}</h1>

            <div className='p-10 flex justify-center gap-[5rem]'>
                <div>
                    <img src={recipie.image} className='w-[20rem] object-cover' />
                    <h1>{recipie.title}</h1>
                    <h1>{recipie.chef}</h1>
                    <button onClick={() => update(recipie.id)} className='px-2 py-1 bg-white text-black mt-2'>Update</button>
                    <button onClick={DeleteHandler} className='px-2 py-1 ml-2 bg-white text-black mt-2'>Delete</button>
                </div>
                <div className='border-1'></div>

                <div className='flex flex-col gap-[2rem]'>
                    <div>
                        <h1>Description:</h1>
                        <p>{recipie.desc}</p>
                    </div>

                    <div>
                        <h1>Instruction</h1>
                        <p className='w-[20rem]'>{recipie.instructions}</p>
                    </div>
                    <div>
                        <h1>Ingredients</h1>
                        <p className='w-[20rem]'>{recipie.ingredients}</p>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Recipie_details
