// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkw97pX56WHQtxqEvKfMljJ0WsIOHaEs4",
  authDomain: "auth-b39ea.firebaseapp.com",
  projectId: "auth-b39ea",
  storageBucket: "auth-b39ea.firebasestorage.app",
  messagingSenderId: "371353137316",
  appId: "1:371353137316:web:ce688ffc85833158587631"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export default app;