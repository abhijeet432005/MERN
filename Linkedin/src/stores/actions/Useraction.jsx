import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../../firebase/firebase";
import { logOutUser, setUser } from "../reducers/UserReducer";

// LOGIN
export const signINAPI = () => async (dispatch) => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    const info = {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
    }

    // dispatch(
    //   setUser({
    //     name: user.displayName,
    //     email: user.email,
    //     photo: user.photoURL,
    //   })
    // );

    localStorage.setItem("user", JSON.stringify(info))
  } catch (error) {
    alert(error.message);
  }
};

export const currentUser = () => async (dispatch) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"))
    if(user) dispatch(setUser(user))
    
  } catch (error) {
    console.log(error)
  }
}


// LOGOUT
export const signOutAPI = () => async (dispatch) => {
  try {
    localStorage.removeItem("user")
    dispatch(logOutUser());
  } catch (error) {
    console.log(error);
  }
};

// CHECK AUTH STATE (auto-login after refresh)
// export const checkUserAuth = () => (dispatch) => {
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       dispatch(
//         setUser({
//           name: user.displayName,
//           email: user.email,
//           photo: user.photoURL,
//         })
//       );
//     } else {
//       dispatch(logOutUser());
//     }
//   });
// };