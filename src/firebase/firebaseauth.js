// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

 // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBR0S7lu1eOEGk4CVhq7d8oMUXvxD6dFjk",
  authDomain: "products-ea97d.firebaseapp.com",
  projectId: "products-ea97d",
  storageBucket: "products-ea97d.firebasestorage.app",
  messagingSenderId: "823787661707",
  appId: "1:823787661707:web:98a8143c0e327d929b678e",
  measurementId: "G-38DXXGDXEL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
