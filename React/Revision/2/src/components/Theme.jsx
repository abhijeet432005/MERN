import React, { useState } from 'react'

const Theme = (props) => {
    const theme = props.theme
    const settheme = props.settheme

    const ThemeHandler = () => {
        settheme(theme === "light" ? "dark" : "light")
    }
  return (
    <div className='flex justify-end mb-10'>

        <button onClick={ThemeHandler} className='border-1 p-2'>{theme === "light" ? "Light Mode ☀️" : "Dark Mode 🌙"}</button>
    </div>
  )
}

export default Theme