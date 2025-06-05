// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhbYEEvH9IFd-nXb4ETM3MKiUtq2TeezQ",
  authDomain: "app-comercios-demo.firebaseapp.com",
  projectId: "app-comercios-demo",
  storageBucket: "app-comercios-demo.firebasestorage.app",
  messagingSenderId: "63317708689",
  appId: "1:63317708689:web:2a0ccb158f349a7f331430",
  measurementId: "G-86BPH9EGLK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);