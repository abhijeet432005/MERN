import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../../firebase/firebase";
import { logOutUser, setUser } from "../reducers/UserReducer";

// LOGIN
export const signINAPI = () => async (dispatch) => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    dispatch(
      setUser({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  } catch (error) {
    alert(error.message);
  }
};

// LOGOUT
export const signOutAPI = () => async (dispatch) => {
  try {
    await signOut(auth);
    dispatch(logOutUser());
  } catch (error) {
    console.log(error);
  }
};

// CHECK AUTH STATE (auto-login after refresh)
export const checkUserAuth = () => (dispatch) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(
        setUser({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );
    } else {
      dispatch(logOutUser());
    }
  });
};