import axios from "axios";
export const API_KEY = "AIzaSyA8RS1XML5Eesvwl3AMvQfzcT8ykiD9YjE"

export const youtube = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        key: API_KEY,
    }
})