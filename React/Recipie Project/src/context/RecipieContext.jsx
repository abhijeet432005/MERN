import React, { createContext, useContext, useEffect, useState } from "react";

export const recipiecontext = createContext(null);

const RecipieContext = (props) => {
  const [data, setdata] = useState([
    // {
    //   id: 1,
    //   title: "Classic Margherita Pizza",
    //   ingredients: [
    //     "Pizza dough",
    //     "Tomato sauce",
    //     "Fresh mozzarella cheese",
    //     "Fresh basil leaves",
    //     "Olive oil",
    //     "Salt and pepper to taste",
    //   ],
    //   instructions: [
    //     "Preheat the oven to 475°F (245°C).",
    //     "Roll out the pizza dough and spread tomato sauce evenly.",
    //     "Top with slices of fresh mozzarella and fresh basil leaves.",
    //     "Drizzle with olive oil and season with salt and pepper.",
    //     "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
    //     "Slice and serve hot.",
    //   ],
    //   description: [
    //     "Roll out the pizza dough and spread tomato sauce evenly.",
    //     "Top with slices of fresh mozzarella and fresh basil leaves.",
    //   ],
    //   image: "https://cdn.dummyjson.com/recipe-images/1.webp",
    //   chef: "Sher",
    //   category: ["cat-1"],
    // },
    // {
    //   id: 2,
    //   title: "Vegetarian Stir-Fry",
    //   ingredients: [
    //     "Tofu, cubed",
    //     "Broccoli florets",
    //     "Carrots, sliced",
    //     "Bell peppers, sliced",
    //     "Soy sauce",
    //     "Ginger, minced",
    //     "Garlic, minced",
    //     "Sesame oil",
    //     "Cooked rice for serving",
    //   ],
    //   instructions: [
    //     "In a wok, heat sesame oil over medium-high heat.",
    //     "Add minced ginger and garlic, sauté until fragrant.",
    //     "Add cubed tofu and stir-fry until golden brown.",
    //     "Add broccoli, carrots, and bell peppers. Cook until vegetables are tender-crisp.",
    //     "Pour soy sauce over the stir-fry and toss to combine.",
    //     "Serve over cooked rice.",
    //   ],
    //   description: [
    //     "Add broccoli, carrots, and bell peppers. Cook until vegetables are tender-crisp.",
    //     "Pour soy sauce over the stir-fry and toss to combine.",
    //     "Serve over cooked rice.",
    //   ],
    //   image: "https://cdn.dummyjson.com/recipe-images/2.webp",
    //   chef: "Bahubali",
    // },
  ]);

  
  useEffect(() => {
    setdata(JSON.parse(localStorage.getItem("recipies")))
    setdata(JSON.parse(localStorage.getItem("recipie")))
  }, [])

  

  //   // JSON.parse(localStorage.getItem("recipies"))
  // console.log(data);
  return (
    <recipiecontext.Provider value={[data, setdata]}>
      {props.children}
    </recipiecontext.Provider>
  );
};

export default RecipieContext;

 

