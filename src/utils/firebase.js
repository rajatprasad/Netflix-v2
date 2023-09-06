// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiIOb60tbUNn-pwbyJDcEKuaXLTtF_Zck",
  authDomain: "netflixgpt-4b1d6.firebaseapp.com",
  projectId: "netflixgpt-4b1d6",
  storageBucket: "netflixgpt-4b1d6.appspot.com",
  messagingSenderId: "587021047094",
  appId: "1:587021047094:web:db75ff36631f1a1f848f97",
  measurementId: "G-YYJK36QT71",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
