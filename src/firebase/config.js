// Import the functions you need from the SDKs you need

import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.FIREBASEKEY,
  authDomain: "vuetest-35344.firebaseapp.com",
  projectId: "vuetest-35344",
  storageBucket: "vuetest-35344.firebasestorage.app",
  messagingSenderId: "2844207119",
  appId: "1:2844207119:web:687837aeece2bf9eea5b7a",
  measurementId: "G-42LZ3K97KN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db