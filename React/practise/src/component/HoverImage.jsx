import React, { useRef } from "react";

const HoverImage = () => {
  const ImgRef = useRef(null);

  const ImageEnter = (e) => {
    if (!ImgRef.current) return;

    const image = ImgRef.current;

    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    image.style.opacity = "1";
    image.style.left = `${x}px`;
    image.style.top = `${y}px`;
  };

  const ImageLeave = () => {
    if (ImgRef.current === null) return;
    let image = ImgRef.current;

    image.style.opacity = "0";
  };

  return (
    <div
      onMouseMove={(e) => ImageEnter(e)}
      onMouseLeave={ImageLeave}
      className="w-full h-20 p-4 flex justify-between items-center uppercase border-b relative"
    >
      <h1 className="text-6xl">Rocky</h1>
      <p>Kgf</p>
      <img
        ref={ImgRef}
        src="https://imgs.search.brave.com/Md6lSQ4SuPVS6PpO_AKaXFbH_I58CFZc_XFRvT60OQY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzA4LzA4/L2E2LzA4MDhhNmJi/ZWM4NTU4ZmU4N2Fl/YjBlOTQ2MzY5MDQz/LmpwZw"
        alt="kgf"
        className="opacity-0 w-30 h-40 object-cover rounded-2xl absolute left-1/2 top-1/2 duration-200 -translate-1/2 -translate-x-1/2"
      />
    </div>
  );
};

export default HoverImage;
