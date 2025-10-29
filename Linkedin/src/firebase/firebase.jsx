import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyA89qeJJM8429fROh0RhnQn1yVZ-wBRm8M",
  authDomain: "linkedin-project-953ed.firebaseapp.com",
  projectId: "linkedin-project-953ed",
  storageBucket: "linkedin-project-953ed.appspot.com",
  messagingSenderId: "395592823573",
  appId: "1:395592823573:web:62a28a7afadbfca9d72f1c",
  measurementId: "G-JY79NG3YPD"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const database = getFirestore(app)
export const storage = getStorage(app)

export default app;