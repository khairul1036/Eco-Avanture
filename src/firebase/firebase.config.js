// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPENd2yaWoIDI6wprDOlL2aA8MbRnxpRI",
  authDomain: "eco-adventure-experience-6f026.firebaseapp.com",
  projectId: "eco-adventure-experience-6f026",
  storageBucket: "eco-adventure-experience-6f026.firebasestorage.app",
  messagingSenderId: "374313358884",
  appId: "1:374313358884:web:ec45e3f41d1820f804aab1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export default app;