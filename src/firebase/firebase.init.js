// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlaat6eblf7qRx0qO3RO9PDPZMXz0cC1Q",
  authDomain: "assignment-9-671ee.firebaseapp.com",
  projectId: "assignment-9-671ee",
  storageBucket: "assignment-9-671ee.firebasestorage.app",
  messagingSenderId: "265737241074",
  appId: "1:265737241074:web:1334e4163a2e319a11eb6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;