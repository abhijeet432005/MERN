import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipeContext } from "../context/RecipeContext";

const RecipeDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setdata] = useContext(recipeContext);
  const Recipe = data.find((elem) => params.id == elem.id);

  const [whishlist, setWhishlist] = useState(
    JSON.parse(localStorage.getItem("whishlist")) || [],
  );

  let whishproduct = whishlist.find((elem) => elem.id === Number(params.id));

  useEffect(() => {
    localStorage.setItem("whishlist", JSON.stringify(whishlist));
  }, [whishlist]);

  const deleteHandler = () => {
    const filter = data.filter((elem) => elem.id != params.id);
    setdata(filter);
    localStorage.setItem("recipe", JSON.stringify(filter))
    navigate(-1);
  };

  const addHandler = () => {
    if (!whishproduct) setWhishlist([...whishlist, Recipe]);
  };

  const removeWhishlist = () => {
    const recipe = whishlist.filter(elem => elem.id !== Number(params.id))
    setWhishlist(recipe)
  }

  return (
    <div className="flex justify-center items-center gap-10 mt-10">
      <div>
        <img
          src={Recipe?.image}
          alt=""
          className="w-[25rem] h-[25rem] rounded-md"
        />
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl font-bold">{Recipe?.title}</h1>
        <p>Chef: {Recipe?.chef}</p>
        <p>{Recipe?.desc}</p>
        <div>
          <h2 className="text-xl font-semibold">Ingredients:</h2>
          <ul className="list-disc list-inside">
            {Recipe?.ingr?.map((elem, index) => (
              <li key={index}>{elem}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Instructions:</h2>
          <ol className="list-decimal list-inside">
            {Recipe?.instructions?.map((elem, index) => (
              <li key={index}>{elem}</li>
            ))}
          </ol>
        </div>
        <div className="flex gap-5">
          <button
            onClick={() => navigate(`/recipe/recipeUpdate/${params.id}`)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Update
          </button>
          <button
            onClick={deleteHandler}
            className="bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Delete
          </button>

          {whishproduct ? (
            <button
              onClick={removeWhishlist}
              className="bg-green-500 text-white px-4 py-2 rounded-md"
            >
              Remove From Wishlist
            </button>
          ) : (
            <button
              onClick={addHandler}
              className="bg-green-500 text-white px-4 py-2 rounded-md"
            >
              Add to Wishlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
