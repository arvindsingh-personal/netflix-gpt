// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCikr9Bmc6k9wQNlNf-flkaUOGw3DDDr_s",
  authDomain: "netflixgpt1-1.firebaseapp.com",
  projectId: "netflixgpt1-1",
  storageBucket: "netflixgpt1-1.appspot.com",
  messagingSenderId: "365070228060",
  appId: "1:365070228060:web:b44e91af0a20299eb0a499",
  measurementId: "G-HHT7CNJPQB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
