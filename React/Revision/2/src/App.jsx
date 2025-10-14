import React, { useState } from 'react'
import Create from './components/Create'
import Read from './components/Read';
import Theme from './components/Theme';

const App = () => {

  const [theme, settheme] = useState("light");

  const [todos, settodos] = useState([
    {id: 1, title: "Kaam Kr le"},
  ]);

  return (
    <div className={`w-full p-4 min-h-screen ${theme === "light" ? "bg-black text-white" : "bg-white text-black"}`}>
      <Theme theme={theme} settheme={settheme} />

      <div className='flex w-full justify-evenly'>
        <Create todos={todos} settodos={settodos} theme={theme}/>
        <div className='border-1 h-[40rem]'></div>
        <Read todos={todos} settodos={settodos}/>
      </div>
    </div>
  )
}

export default App