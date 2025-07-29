import React, { useContext } from 'react'
import { recipieContext } from '../context/RecipieContext'
import Card from '../components/Card'

const Recipie = () => {
  const [data] = useContext(recipieContext)

  const render = data.map((elem) => <Card key={elem.id} recipe={elem} />)
  return (
    <div className='card gap-[1rem] p-[3rem] bg-gray-800'>
      {render}
    </div>
  )
}

export default Recipie
