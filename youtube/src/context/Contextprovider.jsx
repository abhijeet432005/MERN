import React, { createContext, useState } from "react";

export const myContext = createContext(null);

const Contextprovider = ({ children }) => {
  const [open, setopen] = useState(true);
  // const [side, setside] = useState(false);

  // const toggle = () => {
  //   setside(!side);
  // };

  const ToggelHandler = () => {
    setopen(!open);
  };
  return (
    <myContext.Provider value={{ open, ToggelHandler }}>
      {children}
    </myContext.Provider>
  );
};

export default Contextprovider;
