import React from "react";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate()

  const NavigateHandler = (name) => {
    navigate(`/product/Details/${name}`)
  }
  return (
    <div className="mt-5 p-4">
      <h1 className="text-center text-7xl">Products</h1>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-5">
          <h1 className="text-5xl">Product 1</h1>
          <button onClick={() => NavigateHandler("Product 1")} className="px-2 py-2 bg-white text-black rounded-4xl w-fit">
            See Details
          </button>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-5xl">Product 2</h1>
          <button onClick={() => NavigateHandler("Product 2")} className="px-2 py-2 bg-white text-black rounded-4xl w-fit">
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
