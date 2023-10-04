import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDD6fli2g5Cec5nTjbzgn3RNVQDPgWLFxU",
    authDomain: "real-time-chat-f91b4.firebaseapp.com",
    projectId: "real-time-chat-f91b4",
    storageBucket: "real-time-chat-f91b4.appspot.com",
    messagingSenderId: "462390929454",
    appId: "1:462390929454:web:603d89ad5fc719fbda17bf",
    measurementId: "G-0PVEWN2PK3"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);