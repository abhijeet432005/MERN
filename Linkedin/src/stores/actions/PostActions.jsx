import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { loadPost } from "../reducers/PostReducer";
import { database, storage } from "../../firebase/firebase";

const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
});



export const Syncpost = (data) => async (dispatch, getState) => {
  try {
    console.log(data)
    let base64Image = null;

    if (data.imageFile) {
      base64Image = await toBase64(data.imageFile);
    }


    const newPost = {
      caption: data.caption,
      name: data.name,
      email: data.email,
      image: base64Image,
      video: data.video,
    };
    const oldPost = JSON.parse(localStorage.getItem("Post")) || []
    const updated = [newPost, ...oldPost]
    // Redux me update karo
    localStorage.setItem("Post", JSON.stringify(updated))
    dispatch(loading())

  } catch (error) {
    console.error("❌ Error posting:", error);
  }
};


export const loading = () => async (dispatch) => {
  try {
    const stored = localStorage.getItem("Post")
    const data = stored ? JSON.parse(stored) : [] // agar null ho toh empty array
    if (Array.isArray(data)) {
      dispatch(loadPost(data))
    } else {
      dispatch(loadPost([]))
    }
  } catch (error) {
    console.log("❌ JSON Parse Error:", error)
    dispatch(loadPost([])) // fallback to empty array
  }
}


