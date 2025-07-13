import { useState } from "react"
import { useFormState } from "react-dom"

const App = () => {
  let a = 5
  let arr = [5, "hello", undefined, null]

  //  way to print obj om HTML

  const profile = [
    { name: "Raghav", age: 5 },
    { name: "SalluBhai", age: 10 },
    { name: "Carry", age: 15 }

  ]

  const update = profile.map((elem, idx) => {
    return (
      <li key={idx}>
        <span>{elem.name} </span>
        <small>{elem.age}</small>
      </li>
    )
  })

  // console.log(update)



  // UseState
  const [Username, setUsername] = useState("Carry")

  const ChangeName = () => {
    setUsername("SalluBahi")
  }
  // console.log(Username)

  



  return (
    <>
      <div>{a}</div>
      <div>
        <ol>{update}</ol>
      </div>
      <div>Username: {Username}</div>
      <button onClick={ChangeName}>Change Name</button>
    </>
  )
}

export default App