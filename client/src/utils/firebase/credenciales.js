// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyApfPIIupuQwmJIQ3fykxuyu6Uzdr5CIvA",
    authDomain: "mymarket-f0eba.firebaseapp.com",
    projectId: "mymarket-f0eba",
    storageBucket: "mymarket-f0eba.appspot.com",
    messagingSenderId: "134125397954",
    appId: "1:134125397954:web:71ab76d544c3a7ddb4185b",
    measurementId: "G-DVP3BJX9TX"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp)
