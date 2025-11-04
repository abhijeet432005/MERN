import React, { useEffect } from 'react'
import { FaUser } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { LiveChat } from '../../store/actions/chatAction'
import { loadMessage } from '../../store/reducer/ChatSlice'
import { NameGenerate } from '../../utils/helper/nameGenerator'
import { MessageGenerate } from '../../utils/helper/messageGenerator'

const Message = () => {
    const dispatch = useDispatch()
    const message = useSelector(state => state.chat.message)

    useEffect(() => {
        const timeOut = setInterval(() => {
            dispatch(loadMessage({user: NameGenerate(), message: MessageGenerate(20)}))
        }, 500)

        return () => clearInterval(timeOut)
    }, [])

  return (
    <div className='flex flex-col gap-3'>

        {
            message.map((elem, idx) => {
                return (

                    <div className='flex gap-3 items-center' key={idx}>
                        <p className='border rounded-full overflow-hidden text-xl'><FaUser /></p>
                        <p className='text-gray-400'>{elem.user}</p>
                        <p>{elem.message}</p>
                    </div>
                )

            })
        }
        
        
    </div>
  )
}

export default Message