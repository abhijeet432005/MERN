import { useState } from "react"

const create = () => {

    const [Fullname, SetFullname] = useState("")
    const [age, setage] = useState(18)

    const Submit = (e) => {
        e.preventDefault()
        const Details = { Fullname, age }
        console.log(Details)
    }


    return (
        <div>
            <form onSubmit={Submit}>
                <input onChange={e => SetFullname(e.target.value)} type="text" placeholder='Enter FullName' value={Fullname} />
                <input onChange={e => setage(e.target.value)} value={age} type="number" placeholder='Enter Age' />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default create


