// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADFrTI9hs0563vJlVV2LopRGyPNupYSD8",
  authDomain: "project3-39d63.firebaseapp.com",
  databaseURL: "https://project3-39d63-default-rtdb.firebaseio.com/",
  projectId: "project3-39d63",
  storageBucket: "project3-39d63.appspot.com",
  messagingSenderId: "211637826568",
  appId: "1:211637826568:web:e9bbe3d33eeea3ad564dbd"
};

firebase.initializeApp(firebaseConfig);