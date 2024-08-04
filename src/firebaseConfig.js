// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDIdW_YbKFEV4ZukfVwbaW6cQjjokqHeFU",
    authDomain: "login-template-mb.firebaseapp.com",
    projectId: "login-template-mb",
    storageBucket: "login-template-mb.appspot.com",
    messagingSenderId: "1008145417061",
    appId: "1:1008145417061:web:dd4fb422096c82e9ef578c",
    measurementId: "G-MB9XZDQTPQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { auth, db, analytics };
