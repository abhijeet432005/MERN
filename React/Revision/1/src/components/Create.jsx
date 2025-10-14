import React, { useState } from "react";

const Create = (props) => {
    console.log(props)
  const [fullname, setfullname] = useState("");

  const [age, setage] = useState(0);

  const SubmitHandler = (e) => {
    e.preventDefault();

    const newuser = { fullname, age };
    console.log(newuser);
  };
  return (
    <div>
      <form onSubmit={SubmitHandler} className="gap-2 flex">
        <input
          type="text"
          placeholder="Enter name"
          onChange={(e) => setfullname(e.target.value)}
          value={fullname}
          className="border-1 bg-white text-black outline-0 "
        />

        <input
          type="number"
          placeholder="Age"
          className="border-1 bg-white text-black outline-0 "
          onChange={(e) => setage(e.target.value)}
          value={age}
        />

        <button className="bg-white text-black">Submit</button>
      </form>
    </div>
  );
};

export default Create;
