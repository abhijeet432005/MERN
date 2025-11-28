import React, { createContext, useState, useEffect } from "react";

export const myContext = createContext(null);

const Contextprovider = ({ children }) => {
  const [open, setopen] = useState(window.innerWidth >= 768); // desktop pe true, mobile pe false

  const ToggelHandler = () => {
    setopen((prev) => !prev);
  };

  // optional: agar user window resize kare toh responsive toggle maintain rahe
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setopen(false);
      else setopen(true);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <myContext.Provider value={{ open, ToggelHandler }}>
      {children}
    </myContext.Provider>
  );
};

export default Contextprovider;