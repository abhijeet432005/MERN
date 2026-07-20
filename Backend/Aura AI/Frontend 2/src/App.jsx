import React, { useEffect } from "react";
import MainRoutes from "./routes/MainRoutes";
import { useDispatch } from "react-redux";
import axios from "./api/axiosConfig";
import { loginSuccess, authFailure } from "./store/reducers/authSlice";

export const getCurrentUser = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/auth/profile", {
      withCredentials: true,
    });

    dispatch(loginSuccess(data.user.fullName.firstName));
  } catch (err) {
    // no active session — that's a normal, expected outcome, not an error
    dispatch(authFailure());
  }
};

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return <MainRoutes />;
};

export default App;
