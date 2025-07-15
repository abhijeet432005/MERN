import React from 'react'
import { createContext } from 'react'
export const recipiecontext = createContext(null)
import { useState } from 'react'

const RecipieContext = (props) => {
    const [data, setdata] = useState([
        {
            "id": 1,
            "title": "Classic Margherita Pizza",
            "ingredients": [
                "Pizza dough",
                "Tomato sauce",
                "Fresh mozzarella cheese",
                "Fresh basil leaves",
                "Olive oil",
                "Salt and pepper to taste"
            ],
            "instructions": [
                "Preheat the oven to 475°F (245°C).",
                "Roll out the pizza dough and spread tomato sauce evenly.",
                "Top with slices of fresh mozzarella and fresh basil leaves.",
                "Drizzle with olive oil and season with salt and pepper.",
                "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
                "Slice and serve hot."
            ],
            "image": "https://cdn.dummyjson.com/recipe-images/1.webp",
            "chef": "abhi",
            "category": "dinner",
            "desc": "Drizzle with olive oil and season with salt and pepper.",
        },
        {
            "id": 2,
            "title": "Vegetarian Stir-Fry",
            "ingredients": [
                "Tofu, cubed",
                "Broccoli florets",
                "Carrots, sliced",
                "Bell peppers, sliced",
                "Soy sauce",
                "Ginger, minced",
                "Garlic, minced",
                "Sesame oil",
                "Cooked rice for serving"
            ],
            "instructions": [
                "In a wok, heat sesame oil over medium-high heat.",
                "Add minced ginger and garlic, sauté until fragrant.",
                "Add cubed tofu and stir-fry until golden brown.",
                "Add broccoli, carrots, and bell peppers. Cook until vegetables are tender-crisp.",
                "Pour soy sauce over the stir-fry and toss to combine.",
                "Serve over cooked rice."
            ],
            "image": "https://cdn.dummyjson.com/recipe-images/2.webp",
            "chef": "SalluBhai",
            "desc": "Add broccoli, carrots, and bell peppers. Cook until vegetables are tender-crisp."
        },
        {
            "id": 3,
            "title": "Chocolate Chip Cookies",
            "ingredients": [
                "All-purpose flour",
                "Butter, softened",
                "Brown sugar",
                "White sugar",
                "Eggs",
                "Vanilla extract",
                "Baking soda",
                "Salt",
                "Chocolate chips"
            ],
            "instructions": [
                "Preheat the oven to 350°F (175°C).",
                "In a bowl, cream together softened butter, brown sugar, and white sugar.",
                "Beat in eggs one at a time, then stir in vanilla extract.",
                "Combine flour, baking soda, and salt. Gradually add to the wet ingredients.",
                "Fold in chocolate chips.",
                "Drop rounded tablespoons of dough onto ungreased baking sheets.",
                "Bake for 10-12 minutes or until edges are golden brown.",
                "Allow cookies to cool on the baking sheet for a few minutes before transferring to a wire rack."
            ],
            "chef": "Rohit",
            "image": "https://cdn.dummyjson.com/recipe-images/3.webp",
            "desc": "Drop rounded tablespoons of dough onto ungreased baking sheets."
        },
    ]);

    // console.log(data)
    return (
        <recipiecontext.Provider value={[data, setdata]}>
            {props.children}
        </recipiecontext.Provider>
    )
}

export default RecipieContext
