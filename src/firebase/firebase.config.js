// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAobEpcewdWqY00v0rv-qhnw4f2gT4BtVQ",
  authDomain: "career-hub-47086.firebaseapp.com",
  projectId: "career-hub-47086",
  storageBucket: "career-hub-47086.firebasestorage.app",
  messagingSenderId: "293507380143",
  appId: "1:293507380143:web:e5f0ca8e2c7f271720f55a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;