import React, { lazy, Suspense, useCallback, useMemo, useState } from "react";
import recipesData from "../../data/recipesData";
const RecipieCard = lazy(() => import("./RecipieCard"));

const Recipe = () => {
  const [filter, setFilter] = useState("");
  const [cart, setCart] = useState([])

  const addToCart = useCallback((recipe) => {
    setCart(prev => [...prev, recipe])
  }, [])

  const filterData = useMemo(() => {
    if (!filter) return recipesData;

    return recipesData.filter((item) => item.rating >= Number(filter.replace("+", "")));
  }, [filter]);

  const render = useMemo(() => filterData.map((item) => (
    <div key={item.id} >
      <RecipieCard recipe={item} addToCart={addToCart}/>
    </div>
  )), [filter, cart]);

  return (
    <div>
      <div className="w-full flex justify-between items-center">
        <form>
          <label id="options">Filter</label>
          <select
            name=""
            id="options"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="4.0+">4.0+</option>
            <option value="4.3+">4.3+</option>
            <option value="4.5+">4.5+</option>
            <option value="4.7+">4.7+</option>
            <option value="4.9+">4.9+</option>
          </select>
        </form>
        <div>Cart: {cart.length}</div>
      </div>
      {
        <Suspense fallback={<h1>Loading...</h1>}>
            <div className="wrapper">{render}</div>
        </Suspense>
      }
    </div>
  );
};

export default Recipe;
