
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewbuddy-4f20c.firebaseapp.com",
  projectId: "interviewbuddy-4f20c",
  storageBucket: "interviewbuddy-4f20c.firebasestorage.app",
  messagingSenderId: "321569156378",
  appId: "1:321569156378:web:335e905b5af6af311150a3"
};
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}