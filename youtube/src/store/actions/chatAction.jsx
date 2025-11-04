import { loadMessage } from "../reducer/ChatSlice"

export const LiveChat = (data) => async (dispatch) => {
    try {
        // console.log({
        //     user: "user",
        //     message: data.chat
        // })

        dispatch(loadMessage({
            user: "user",
            message: data.chat
        }))
        
    } catch (error) {
        console.log(error)
    }
}