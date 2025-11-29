import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadUser } from "../../store/reducers/userSlice";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UserDetail = () => {
  const user = useSelector((state) => state.userSlice.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const LogoutHandler = () => {
    navigate("/shop");
    localStorage.removeItem("user");
    localStorage.removeItem("compareItems");
    localStorage.removeItem("cart");
    dispatch(loadUser(null));
    toast.success("Logged out successfully 👋");
  };

  return (
    <div className="w-full mt-40 flex justify-center items-center p-5">
      <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-lg w-[90vw] md:w-[50vw] flex flex-col items-center gap-6">
        
        {/* Profile */}
        <div className="w-28 h-28 rounded-full overflow-hidden shadow-md">
          <img
            src={user?.image || "https://cdn-icons-png.flaticon.com/512/847/847969.png"}
            className="w-full h-full object-cover"
            alt="user"
          />
        </div>

        <h1 className="text-2xl font-[font-3] tracking-wide">
          {user?.firstName || "User"} {user?.lastName}
        </h1>
        <p className="text-gray-600 font-[font-1]">{user?.email}</p>


        {/* Buttons */}
        <div className="flex flex-col w-full gap-3 mt-4">

          <NavLink
            to="/compare"
            className="w-full text-center py-3 border rounded-xl hover:bg-black hover:text-white transition-all font-[font-1]"
          >
            Compare Items
          </NavLink>

          <button
            onClick={LogoutHandler}
            className="w-full text-center py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-all font-[font-1]"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;