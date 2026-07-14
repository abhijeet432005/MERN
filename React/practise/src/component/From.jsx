import React, { useState } from "react";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const From = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");

    let isValid = true;

    if (email.trim() === "") {
      setEmailError("Email field is empty");

      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Invalid Email");

      isValid = false;
    }

    if (password.trim() === "") {
      setPasswordError("Password field is empty");

      isValid = false;
    } else if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must contain uppercase, lowercase, number and 8+ chars",
      );

      isValid = false;
    }

    if (!isValid) return;

    console.log(email);
    console.log(password);
  };

  return (
    <>
      <form onSubmit={SubmitHandler}>
        <input
          type="text"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 outline-0 m-1"
        />
        <small className="text-red-400">{emailError}</small>
        <br />
        <input
          type="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 outline-0 m-1"
        />
        <small className="text-red-400">{passwordError}</small>
        <br />
        <button className="px-2 py-2 bg-black border-0 text-white">
          Submit
        </button>
      </form>
    </>
  );
};

export default From;
