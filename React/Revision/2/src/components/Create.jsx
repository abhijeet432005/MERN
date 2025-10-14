import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Create = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;
  const theme = props.theme;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [title, settitle] = useState("");

  const SubmitHandler = (data) => {
    data.id = nanoid()

    settodos([...todos, data])
    reset()

    toast.success("Task Created")

  };

  console.log(errors?.title?.message)

  return (
    <div>
      <h1 className="text-red-500 text-7xl mb-[4rem]">Create Task</h1>

      <form onSubmit={handleSubmit(SubmitHandler)} className="flex gap-4 flex-col">
        <input
          type="text"
          placeholder="Enter Task"
          {...register("title", {required: "Title Can't be Empty"})}
          className={`w-2xl px-2 py-2 border-1 outline-0 mb-4 ${
            theme === "light" ? "text-white" : "text-black"
          }`}
        />
        <small className="text-red-600">{errors?.title?.message}</small>

        <button className="px-2 py-2 bg-white text-black border-1 w-fit">
          Create Todo
        </button>
      </form>
    </div>
  );
};

export default Create;
