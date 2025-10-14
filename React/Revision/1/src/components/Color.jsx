import React, { useState } from "react";

const Color = () => {

    const [Color, setColor] = useState("gray");
  return (
    <div
      className="bg-red-800 w-full h-screen flex items-end"
      style={{ backgroundColor: Color }}
    >
      <div className="flex justify-evenly w-full p-4 bg-amber-100">
        <div
          className="px-6 py-6 bg-red-600 rounded-[50%]"
          onClick={() => setColor("red")}
        ></div>
        <div
          className="px-6 py-6 bg-black rounded-[50%]"
          onClick={() => setColor("black")}
        ></div>
        <div
          className="px-6 py-6 bg-blue-600 rounded-[50%]"
          onClick={() => setColor("blue")}
        ></div>
        <div
          className="px-6 py-6 bg-gray-700 rounded-[50%]"
          onClick={() => setColor("gray")}
        ></div>
      </div>
    </div>
  );
};

export default Color;
