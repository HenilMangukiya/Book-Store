// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDH6Tf2oyafFdIwFsTt6Xu75-S585m26Ok",
  authDomain: "book-store-web-app-8ba19.firebaseapp.com",
  projectId: "book-store-web-app-8ba19",
  storageBucket: "book-store-web-app-8ba19.appspot.com",
  messagingSenderId: "198136769597",
  appId: "1:198136769597:web:4fa7cf4a8d80eea374ce54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app