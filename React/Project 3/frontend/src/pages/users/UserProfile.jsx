import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncUpdateUser } from "../../store/actions/userAction";

const UserProfile = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: users?.username,
      email: users?.email,
      password: users?.password,
    },
  });

  const UpdateProfileHandler = (user) => {
    console.log(user)
    dispatch(asyncUpdateUser(users.id, user))
    navigate("/login")
  };

  return (
    <div className="flex gap-[5rem] p-[3rem] justify-center items-center">
        <div>
            <h1 className="text-3xl">👋 Hello, {users?.username}</h1>
            <h1 className="text-2xl">{users?.email}</h1>
        </div>

      <div className="mt-[4rem] flex justify-center">
        <form
          onSubmit={handleSubmit(UpdateProfileHandler)}
          className="flex flex-col gap-[0.7rem] border-1 p-4 rounded-2xl"
        >
          <input
            type="text"
            placeholder="Enter Name"
            className="border-1 outline-0 rounded-2xl px-2 py-1 w-fit"
            {...register("username", { required: "Enter valid Username" })}
          />

          <input
            type="text"
            placeholder="john-doe@gmail.com"
            className="border-1 outline-0 rounded-2xl px-2 py-1 w-fit"
            {...register("email")}
          />

          <input
            type="password"
            placeholder="********"
            className="border-1 outline-0 rounded-2xl px-2 py-1 w-fit"
            {...register("password")}
          />

          <button className=" text-left px-3 py-1 bg-black text-white rounded-2xl w-fit">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
