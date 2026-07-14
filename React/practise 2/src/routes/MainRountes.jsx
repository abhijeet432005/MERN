import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from '../pages/Home'
import Recipe from '../pages/Recipe'
import Whislist from '../pages/Whishlist'
import Create from '../pages/Create'
import RecipeDetails from "../pages/RecipeDetails";
import RecipeUpdate from "../pages/RecipeUpdate";

const MainRountes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipe" element={<Recipe />} />
      <Route path="/recipe/recipeDetails/:id" element={<RecipeDetails />} />
      <Route path="/recipe/recipeUpdate/:id" element={<RecipeUpdate />} />
      <Route path="/whishlist" element={<Whislist />} />
      <Route path="/create" element={<Create />} />
    </Routes>
  );
};

export default MainRountes;
