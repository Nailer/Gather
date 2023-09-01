
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCDHjrz-fCrd9ixkbl9awODlCbaPSqCBIw",
  authDomain: "gather-483dd.firebaseapp.com",
  projectId: "gather-483dd",
  storageBucket: "gather-483dd.appspot.com",
  messagingSenderId: "328325586634",
  appId: "1:328325586634:web:ee7141897306973cc69e33",
  measurementId: "G-PRXTCELXN7"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();