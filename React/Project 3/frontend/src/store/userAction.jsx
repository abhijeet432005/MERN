import axios from "../api/axiosconfig"
import { loaduser } from "./userSlice"

export const asyncgetUser = () => async (dispatch, getstate) => {
    try {
        console.log(getstate())
        
        const res = await axios.get("/users")
        dispatch(loaduser(res.data))

    } catch (error) {
        console.log(user)
    }
} 