import axios from "../../API/AxiosConfig";
import { loadUser } from "../reducers/userSlice";

export const getUser = (user) => async (dispatch) => {
  try {
    const { data } = await axios.post("/auth/login", {
      username: user.userName,
      password: user.password,
      expiresInMins: 30,
    });
    console.log(user)

    localStorage.setItem('user', JSON.stringify(data))
    dispatch(LoginUser())
  } catch (error) {
    console.log(error);
  }
};


export const LoginUser = () => async (dispatch) => {
    try {
        const data = JSON.parse(localStorage.getItem('user'))

        if (data) dispatch(loadUser(data))
    } catch (error) {
        console.log(error)
        
    }
}