import React, { useEffect, useRef } from "react";
import Nav from "./components/Nav";
import Mainroutes from "./routes/Mainroutes";
import { useDispatch } from "react-redux";
import { asyncCurrentUser } from "./store/actions/userAction";
import { asyncLoadProduct } from "./store/actions/productsAction";

const App = () => {
  const dispatch = useDispatch();
  const cursorRef = useRef(null);

  useEffect(() => {
    dispatch(asyncCurrentUser());
    dispatch(asyncLoadProduct())
  }, []);


  useEffect(() => {
    const cursor = cursorRef.current;

    if (cursor) {
      cursor.style.opacity = 0;
      setTimeout(() => {
        cursor.style.opacity = 0.5;
      }, 1000);
    }

  }, []);


  const CursorAnim = (e) => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const x = e.clientX - cursor.offsetWidth / 2;
    const y = e.clientY - cursor.offsetHeight / 2;

    cursor.style.transform = `translate(${x}px, ${y}px)`;
  };

  return (
    <div onMouseMove={CursorAnim} className="relative w-full min-h-screen bg-white overflow-hidden">
      <div ref={cursorRef} className="w-4 h-4 border-2 border-black rounded-full absolute pointer-events-none transition-transform duration-75 ease-linear"></div>

      <div className="w-full p-[2rem]">
        <Nav />
        <Mainroutes />
      </div>
    </div>
    
  );
};

export default App;
