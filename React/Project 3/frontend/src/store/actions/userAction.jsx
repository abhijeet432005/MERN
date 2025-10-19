import axios from '../../api/axiosconfig'
import { loaduser, logOutUser }from '../reducers/userSlice'


export const asyncRegisterUser = async (user) => {

    try {
        const response = await axios.post("/users", user)
    } catch (error) {
        console.log(error)
    }
}


export const asyncLoginUser = (user) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/users?email=${user.email}&password=${user.password}`)
    localStorage.setItem("user", JSON.stringify(data[0]))
    dispatch(loaduser(data[0]))  // ✅ Redux state update
  } catch (error) {
    console.log(error)
  }
}

export const asyncLogOutUser = (user) => async (dispatch, getState) => {
    try {
        localStorage.removeItem("user")
        dispatch(logOutUser())
    } catch (error) {
        console.log(error)
    }
}

export const asyncCurrentUser = () => async (dispatch, getState) => {
    try {
        
        const user = JSON.parse(localStorage.getItem("user"))
        if(user) dispatch(loaduser(user))
        else console.log("User not loggen in!")
    

    } catch (error) {
        console.log(error)
    }
}

export const asyncUpdateUser = (id, user) => async (dispatch) => {
    try {
        const {data} = await axios.patch('/users/' + id, user)
        console.log(data)
        localStorage.setItem("user", JSON.stringify(data))
        dispatch(loaduser(data))
    } catch (error) {
       console.log(error) 
    }
} 