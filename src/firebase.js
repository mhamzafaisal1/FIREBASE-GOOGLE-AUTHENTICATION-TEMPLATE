// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDAs42elGL6CM5d0yyP0rBPSJ7137e1HmU",
    authDomain: "redux-auth-app-69ae3.firebaseapp.com",
    projectId: "redux-auth-app-69ae3",
    storageBucket: "redux-auth-app-69ae3.appspot.com",
    messagingSenderId: "257828220912",
    appId: "1:257828220912:web:6d27025e9a3df762eab735",
    measurementId: "G-RP4976H805"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


export { auth, provider };