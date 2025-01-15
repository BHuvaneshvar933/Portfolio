import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBmuq8j3RJ65QNzd8hdzTOyKJbHeq2Z1dg",
    authDomain: "portfolio-2f064.firebaseapp.com",
    projectId: "portfolio-2f064",
    storageBucket: "portfolio-2f064.firebasestorage.app",
    messagingSenderId: "647612114732",
    appId: "1:647612114732:web:f7055afbaf02cfe6a2ae89",
    measurementId: "G-SCGMHKM120"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
