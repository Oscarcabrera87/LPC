// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsy4QpMBXLaWvHvSrZwSr6Bp1rspIvg-M",
  authDomain: "database-app-7eafa.firebaseapp.com",
  projectId: "database-app-7eafa",
  storageBucket: "database-app-7eafa.appspot.com",
  messagingSenderId: "1065382375836",
  appId: "1:1065382375836:web:b7d6acc633c7207fbd9859",
  measurementId: "G-85TMYBYGX1"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const analytics = getAnalytics(app);

 export const db = getFirestore(app)