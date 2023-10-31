// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyA7ZfX1XnvphxPKwDFfHV8gFiQWYRCw2oc',
    authDomain: "surge-2023-d97f9.firebaseapp.com",
    projectId: "surge-2023-d97f9",
    storageBucket: "surge-2023-d97f9.appspot.com",
    messagingSenderId: "332975599337",
    appId: "1:332975599337:web:5863734fbc96ace3510a78",
    measurementId: "G-7ZRRP4EWLR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app