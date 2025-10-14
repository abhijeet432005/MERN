import React, { useState } from "react";
import Create from "./Create";
import Read from "./Read";

const Theme = () => {
  const [Counter, setCounter] = useState(0);

  const [theme, setTheme] = useState("light");

  const [data, setdata] = useState([
    { name: "John", age: 23 },
    { name: "Takashi", age: 25 },
    { name: "JethaLal", age: 45 },
  ]);

  const increase = () => {
    setCounter(Counter + 1);
  };
  const decrease = () => {
    setCounter(Counter - 1);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      className={`w-full h-screen flex items-center justify-between p-4 relative ${
        theme === "light" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <button
        className="absolute right-0 top-2 p-3 m-2 border-1"
        onClick={toggleTheme}
      >
        {theme === "light" ? "Light Mode ☀️" : "Dark Mode 🌙"}
      </button>

      <div className="flex-col justify-center items-center border-1 p-5">
        <div className="text-center m-2 text-4xl">
          <h1>{Counter}</h1>
        </div>
        <div className="flex gap-4">
          <button className="px-2 py-2 border-1 " onClick={increase}>
            Increase
          </button>
          <button className="px-2 py-2 border-1 " onClick={decrease}>
            Decrease
          </button>
        </div>
      </div>

      {/* form  */}

      <div className="">
        <Create />
        <Read data={data} setdata={setdata} />
      </div>
    </div>
  );
};

export default Theme;
