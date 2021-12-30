// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCck4HzseDz8N-gutMxkocrqb0S_OxB0KA",
  authDomain: "e-clone-8fd2f.firebaseapp.com",
  projectId: "e-clone-8fd2f",
  storageBucket: "e-clone-8fd2f.appspot.com",
  messagingSenderId: "796616414691",
  appId: "1:796616414691:web:c48c340e8f74b7e3c7fcd6",
  measurementId: "G-YR9E09PM25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);