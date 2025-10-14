import React from "react";
import { toast } from "react-toastify";

const Read = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;

  const render = todos.map((todo) => {
    return <li className="bg-gray-400 mt-4 p-3 rounded-2xl flex justify-between items-center" key={todo.id}>
        {todo.title} 
        <button className="bg-red-400 p-1 rounded-2xl" onClick={() => DeleteHandler(todo.id)}>Delete</button>
    </li>;
  });

  const DeleteHandler = (id) => {
    const filter = todos.filter(val => val.id !== id)
    settodos(filter)
    toast.error("Deleted Successfully")
  }
  return (
    <div>
        <h1 className="text-7xl text-red-200">Remainder</h1>

        <div className="w-full h-[30rem] overflow-x-auto mt-4">
          <ol>{render}</ol>
        </div>
    </div>
  );
};

export default Read;
