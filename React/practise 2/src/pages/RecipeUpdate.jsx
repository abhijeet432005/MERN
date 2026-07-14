import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { recipeContext } from "../context/RecipeContext";

const RecipeUpdate = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setdata] = useContext(recipeContext);
  const Recipe = data.find((elem) => params.id == elem.id);
  console.log(Recipe)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: Recipe.title,
      image: Recipe.image,
      desc: Recipe.desc,
      ingr: Recipe.ingr,
      instructions: Recipe.instructions,
      chef: Recipe.chef,
      category: Recipe.category,
    },
  });

  const SubmitHandler = (recipe) => {
    const index = data.findIndex(elem => elem.id == params.id)
    const copyData = [...data]
    copyData[index] = {...copyData[index], ...recipe}
    setdata(copyData)

    localStorage.setItem("recipe", JSON.stringify(copyData))
    navigate(-1)
  };

  return (
    <div className="flex justify-center py-10 px-4">
      <form
        onSubmit={handleSubmit(SubmitHandler)}
        className="w-full max-w-3xl rounded-2xl border border-zinc-700 bg-zinc-900 p-8 shadow-lg"
      >
        <h1 className="mb-8 text-center text-3xl font-bold">
          Create New Recipe
        </h1>

        <div className="grid gap-5">
          <div>
            <input
              {...register("title", {
                required: "Recipe title is required",
                minLength: {
                  value: 3,
                  message: "Title must be at least 3 characters",
                },
              })}
              type="text"
              placeholder="Recipe Title"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-3 outline-none"
            />
            {errors.title && (
              <p className="mt-1 text-sm text-red-500">
                {errors.title.message}
              </p>
            )}
          </div>

          <div>
            <input
              {...register("chef", {
                required: "Chef name is required",
              })}
              type="text"
              placeholder="Chef Name"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-3 outline-none"
            />
            {errors.chef && (
              <p className="mt-1 text-sm text-red-500">{errors.chef.message}</p>
            )}
          </div>

          <div>
            <input
              {...register("image", {
                required: "Image URL is required",
                pattern: {
                  value: /^https?:\/\/.+/i,
                  message: "Enter a valid image URL",
                },
              })}
              type="url"
              placeholder="Image URL"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-3 outline-none"
            />
            {errors.image && (
              <p className="mt-1 text-sm text-red-500">
                {errors.image.message}
              </p>
            )}
          </div>

          <div>
            <select
              {...register("category", {
                required: "Please select a category",
              })}
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-3 outline-none"
            >
              <option value="">Select Category</option>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="dessert">Dessert</option>
              <option value="snack">Snack</option>
              <option value="drink">Drink</option>
            </select>
            {errors.category && (
              <p className="mt-1 text-sm text-red-500">
                {errors.category.message}
              </p>
            )}
          </div>

          <div>
            <textarea
              {...register("desc", {
                required: "Description is required",
                minLength: {
                  value: 5,
                  message: "Description must be at least 5 characters",
                },
              })}
              rows="4"
              placeholder="Recipe Description"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-3 outline-none resize-none"
            />
            {errors.desc && (
              <p className="mt-1 text-sm text-red-500">{errors.desc.message}</p>
            )}
          </div>

          <div>
            <textarea
              {...register("ingr", {
                required: "Ingredients are required",
              })}
              rows="5"
              placeholder="Ingredients (comma separated)"
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-3 outline-none resize-none"
            />
            {errors.ingr && (
              <p className="mt-1 text-sm text-red-500">{errors.ingr.message}</p>
            )}
          </div>

          <div>
            <textarea
              {...register("instructions", {
                required: "Instructions are required",
              })}
              rows="6"
              placeholder={`Instructions (one step per line)

Example:
Preheat oven
Mix ingredients
Bake for 20 mins`}
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 p-3 outline-none resize-none"
            />
            {errors.instructions && (
              <p className="mt-1 text-sm text-red-500">
                {errors.instructions.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="mt-3 rounded-lg bg-green-600 px-6 py-3 font-semibold transition hover:bg-green-700"
          >
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default RecipeUpdate;
