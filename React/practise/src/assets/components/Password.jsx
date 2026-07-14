import { useCallback, useEffect, useState } from "react";

const Password = () => {
    const [Length, setLength] = useState(8)
    const [Number, setNumber] = useState(false)
    const [Character, setCharacter] = useState(false)
    const [Password, setPassword] = useState("")

    const passwordGen = useCallback(() => {
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if(Number) str += '123456789'
        if(Character) str += "!@#$%^&*()_+-=[]{}|;:,.<>?"

        for(let i = 1; i < Length; i++) {
            const index = Math.floor(Math.random() * str.length)
            pass += str.charAt(index)
        }

        setPassword(pass)


    }, [Length, Number, Character, setPassword]) 

    useEffect(() => {
        passwordGen()
    }, [Length, Number, Character])

  return (
    <div className="w-full h-screen bg-black text-white flex justify-center items-center">
      <div className="bg-gray-400 p-4 rounded-2xl">
        <h1 className="text-center mb-4 text-2xl">Password Generator</h1>

        <div className="flex items-center">
          <input
            type="text"
            placeholder="Password"
            readOnly
            className="bg-white text-black w-full h-10 p-2"
            value={Password}
            onChange={e => setPassword(e.target.value)}
          />
          <button className="bg-blue-500 text-white p-2 h-10 ">Copy</button>
        </div>

        <div className="flex items-center gap-4 mt-4">
            <input type="range" min={6} max={100} value={Length} onChange={e => setLength(e.target.value)}/>
            <label>Length: {Length}</label>

            <input type="checkbox" value={Number} onChange={(e) => setNumber(e.target.checked)} />
            <label >Number</label>

            <input type="checkbox" value={Character} onChange={(e) => setCharacter(e.target.checked)}/>
            <label >Character</label>
        </div>

      </div>
    </div>
  );
};

export default Password;
