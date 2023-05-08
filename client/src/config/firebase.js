import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'




const firebaseConfig = {
  apiKey: "AIzaSyCtJ_8Scwi_HSoaldIedXW0GLHo7EQnNLU",
  authDomain: "gamegeekz.firebaseapp.com",
  projectId: "gamegeekz",
  storageBucket: "gamegeekz.appspot.com",
  messagingSenderId: "696249195302",
  appId: "1:696249195302:web:e6bd2a4f4bf97742867fe7",
  measurementId: "G-LQMHMNMHPY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth, provider}