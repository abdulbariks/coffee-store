// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOq4GBdLqRNlz_HkMDYSiIfV6ghn_FJzE",
  authDomain: "coffee-store-4afc3.firebaseapp.com",
  projectId: "coffee-store-4afc3",
  storageBucket: "coffee-store-4afc3.firebasestorage.app",
  messagingSenderId: "731247476149",
  appId: "1:731247476149:web:3879ebf3420d2905d52dfc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
