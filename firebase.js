// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtwJHhpc5BHbdRsdmSJPtkYxW3RvpG7qQ",
  authDomain: "moviex-1ba9e.firebaseapp.com",
  projectId: "moviex-1ba9e",
  storageBucket: "moviex-1ba9e.appspot.com",
  messagingSenderId: "308922471864",
  appId: "1:308922471864:web:599a49e6c58755a9f6eb4d",
  measurementId: "G-ZJPMTFGCFD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
