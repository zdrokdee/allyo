// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional\
const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;


const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "allyo-85b27.firebaseapp.com",
  projectId: "allyo-85b27",
  storageBucket: "allyo-85b27.firebasestorage.app",
  messagingSenderId: "549065112878",
  appId: "1:549065112878:web:11f08d3a8c88b936844ebf",
  measurementId: "G-C73C35YVQV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);