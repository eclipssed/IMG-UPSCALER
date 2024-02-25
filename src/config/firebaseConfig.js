// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDc44EFhQLqNLL2RaDSVXW_3UZoM1GcKHY",
  authDomain: "image-upscaler-d95c1.firebaseapp.com",
  projectId: "image-upscaler-d95c1",
  storageBucket: "image-upscaler-d95c1.appspot.com",
  messagingSenderId: "119874548616",
  appId: "1:119874548616:web:d598e4f0b9021d0409403d",
  measurementId: "G-F5R87LSP7Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const storage = getStorage();
