import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOutAPI } from "../../stores/actions/Useraction";

const UserDetail = ({ userData, closePostHandler }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

const signOutHandler = async () => {
  console.log("Signout clicked"); // 🔥 Add this
  try {
    await dispatch(signOutAPI());
    console.log("Signout done"); // 🔥 Add this
    navigate("/");
  } catch (err) {
    console.error("Sign out failed:", err);
  }
};


  return (
    <div className="absolute top-14 lg:right-0 w-56 bg-white shadow-lg rounded-lg border p-3">
      <div className="flex flex-col items-center text-center border-b pb-3 relative">
        <img
          src={userData?.photo}
          alt="profile"
          referrerPolicy="no-referrer"
          className="h-12 w-12 rounded-full mb-2"
        />
        <h2 className="text-sm font-semibold">{userData?.name}</h2>
        <p className="text-xs text-gray-500">{userData?.email}</p>
        
        <p className="absolute top-0 right-0" onClick={closePostHandler}>╳</p>
      </div>

      <ul className="text-sm mt-3">
        <li className="py-2 hover:bg-gray-100 rounded-md cursor-pointer">
          View Profile
        </li>
        <li className="py-2 hover:bg-gray-100 rounded-md cursor-pointer">
          Settings & Privacy
        </li>
        <li className="py-2 hover:bg-gray-100 rounded-md cursor-pointer">
          Help
        </li>
        <li
          className="py-2 hover:bg-gray-100 rounded-md cursor-pointer"
          onClick={signOutHandler}
        >
          Sign Out
        </li>
      </ul>
    </div>
  );
};

export default UserDetail;
