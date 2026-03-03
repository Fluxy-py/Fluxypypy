import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};





// const firebaseConfig = {
//   apiKey: "AIzaSyAlFsNEMmr9cdLwRY2TfWJr-3WFqMSZIR0",
//   authDomain: "fluxypy-e66bb.firebaseapp.com",
//   projectId: "fluxypy-e66bb",
//   storageBucket: "fluxypy-e66bb.firebasestorage.app",
//   messagingSenderId: "913275483889",
//   appId: "1:913275483889:web:381d4a3a47a140d0c79b50"
// };

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);

